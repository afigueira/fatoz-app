var args = arguments[0] || {};
var matchId = args.matchId;
var match;
var currentQuestion;
var currentQuestionIndex;
var myUserSide;
var userReady = 0;
var counterTimer;
var timerInterval;
var maxHeightProgressBar = 325;
var canClick = false;

Alloy.Globals.Cloud.Objects.query({
    classname: 'matches',
    where: {
        id: matchId
    }
}, function (e) {	
    if (e.success) {
        match = e.matches[0];
        var userA = match.user_a;
        var userB = match.user_b;
        
        getUserInfo(userA, 'a');
        getUserInfo(userB, 'b');
        
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});

function getUserInfo(userId, side){
	Alloy.Globals.Cloud.Users.show({
		user_id: userId
	}, function(e){		
		if(e.success){
			var user = e.users[0];
			var name = user.id == Titanium.App.Properties.getString('userId') ? 'Você' : user.first_name;
			
			if (user.id == Titanium.App.Properties.getString('userId')) {
				myUserSide = side;
			}
						
			if(side == 'a'){				
				$.nameScoreA.text = name;
				Alloy.Globals.loadPhoto($.imageProfileProgessA, 'image', user.custom_fields.profile_image);
			}else{
				$.nameScoreB.text = name;
				Alloy.Globals.loadPhoto($.imageProfileProgessB, 'image', user.custom_fields.profile_image);
			}
			
			userReady++;
			
			if(userReady == 2){
				Titanium.App.fireEvent('websocket.dispatchEvent', {
					event: 'userReady',
					matchId: args.matchId
				});
			}
		}
	});
}

function showQuestion(e) {	
	var questionIndex = e.questionIndex;

	if(timerInterval){
		clearInterval(timerInterval);
	}
	
	$.leftNumber.text = 1;
	$.rightNumber.text = 0;
	
	// esconder atual
	$.addClass($.titleQuestion, "questionGame proximaNovaRegular visibleFalse");
	$.addClass($.optionsQuestion, "optionGame visibleFalse");
	
	// animar o round1
	if(questionIndex == 5){
		$.lastRound.visible = true;
	}
	$.roundNumber.text = ' ' + questionIndex;
		
	$.removeClass($.currentRound, 'visibleFalse');
	
	// pegar a questão
	var questionId = match['question_' + questionIndex];
	
	Alloy.Globals.Cloud.Objects.query({
		classname: 'questions',
		where: {
			id: questionId
		}
	}, function(e) {
		if (e.success) {
			currentQuestion = e.questions[0];
			Titanium.App.fireEvent('websocket.dispatchEvent', {event: 'questionReady', questionIndex: questionIndex, matchId: matchId });
		}
	});
}

function startQuestion(e) {
	$.removeClass($.option1, 'optionRedGame');
	$.removeClass($.option1, 'optionGreenGame');
	$.removeClass($.option1, 'optionBlueGame');
	
	$.removeClass($.option2, 'optionRedGame');
	$.removeClass($.option2, 'optionGreenGame');
	$.removeClass($.option2, 'optionBlueGame');
	
	$.removeClass($.option3, 'optionRedGame');
	$.removeClass($.option3, 'optionGreenGame');
	$.removeClass($.option3, 'optionBlueGame');
	
	$.removeClass($.option4, 'optionRedGame');
	$.removeClass($.option4, 'optionGreenGame');
	$.removeClass($.option4, 'optionBlueGame');

	counterTimer = new Date();
	timerInterval = setInterval(updateTimer, 1000);

	var questionIndex = e.questionIndex;
	
	currentQuestionIndex = questionIndex;
	
	// esconder round atual
	$.addClass($.currentRound, "visibleFalse");
	
	$.titleQuestion.text = currentQuestion.title;
	$.option1.title = currentQuestion.option_1;
	$.option2.title = currentQuestion.option_2;
	$.option3.title = currentQuestion.option_3;
	$.option4.title = currentQuestion.option_4;	
	//correct_option
	
	$.removeClass($.titleQuestion, "visibleFalse");
	$.removeClass($.optionsQuestion, "visibleFalse");
	
	canClick = true;
}

function fighterAnswered(e) {
	var questionIndex = e.questionIndex;
	var time = e.time;
	var isCorrect = e.isCorrect;
	var option = e.option;
	
	var fighterSide = myUserSide == 'a' ? 'b' : 'a';
	
	setQuestionResult(fighterSide, option, isCorrect);

	setQuestionPoints(fighterSide, time, isCorrect);
}

function finishGame(e) {
	var pointsA = Number($.pointsScoreA.text);
	var pointsB = Number($.pointsScoreB.text);
	
	// somente o criador da partida dispara o evento
	if (myUserSide == 'a') {
		Titanium.App.fireEvent('websocket.dispatchEvent', {
			event: 'matchResult',
			matchId: matchId,
			pointsA: pointsA,
			pointsB: pointsB
		});	
	}
	
	if(timerInterval){
		clearInterval(timerInterval);
	}
	
	$.scrollView.remove($.playing);
	//$.removeClass($.containerYouWin, 'visibleFalse');
	//$.addClass($.containerYouWin, 'youWinGame');
	
	createYouWin(pointsA, pointsB);
	
	/*if(myUserSide == 'a' && Number($.pointsScoreA.text) > Number($.pointsScoreB.text) || myUserSide == 'b' && Number($.pointsScoreA.text) < Number($.pointsScoreB.text)){		
		$.addClass($.playing,'visibleFalse');
		$.containerYouWin.visible = true;

		setTimeout(function(){
			Alloy.createController('gameResult', {matchId: matchId});
		}, 1000);
	}else{
		Alloy.createController('gameResult', {matchId: matchId});
	}*/
}

function createYouWin(pointsA, pointsB) {
	
	$youWinGame = Titanium.UI.createView({id: 'containerYouWin', opacity: 0});
	$.addClass($youWinGame, 'youWinGame');
	
	var imageProfile = myUserSide == 'a' ? $.imageProfileProgessA : $.imageProfileProgessB; 
	
	$imageView = Titanium.UI.createImageView({image: imageProfile.image});
	$.addClass($imageView, 'imageProfile imageProfileYouWin');
	
	$youWinBackground = Titanium.UI.createView();
	$.addClass($youWinBackground, 'youWinBackground');
	
	$label = Titanium.UI.createLabel({id: 'textWinner'});
	$.addClass($label, 'proximaNovaRegular youWin');
	
	$youWinBackground.add($label);
	
	$trophy = Titanium.UI.createView();
	$.addClass($trophy, 'trophyGame');
	
	$youWinGame.add($imageView);
	$youWinGame.add($youWinBackground);
	$youWinGame.add($trophy);
	
	$.scrollView.add($youWinGame);
	
	if (pointsA != pointsB) {
		if (myUserSide == 'a' && pointsA > pointsB || myUserSide == 'b' && pointsB > pointsA) {
			$label.text = 'VOCÊ\n VENCEU!';
		} else {
			$label.text = 'VOCÊ\n PERDEU!';
		}
	} else {
		$label.text = 'EMPATE!';
	}
	
	var youWinFadeIn = Titanium.UI.createAnimation({opacity: 1, duration: 500});
	var onCompleteFadeIn = function() {
		var youWinFadeout = Titanium.UI.createAnimation({opacity: 0, duration: 500, delay: 1500});
		var onCompleteFadeout = function() {
			Alloy.createController('gameResult', {matchId: matchId});
		};
		youWinFadeout.addEventListener('complete', onCompleteFadeout);
		$youWinGame.animate(youWinFadeout);
	};
	
	youWinFadeIn.addEventListener('complete', onCompleteFadeIn);	
	$youWinGame.animate(youWinFadeIn);
}

function questionAnswered(clickedOption) {
	var currentTimer = new Date();
	var isCorrect = currentQuestion.correct_option == clickedOption;
	var time = currentTimer.getTime() - counterTimer.getTime();
	
	Titanium.App.fireEvent('websocket.dispatchEvent', {
		event: 'questionAnswered',
		userSide: myUserSide,
		matchId: matchId,
		questionIndex: currentQuestionIndex,
		time: time,
		isCorrect: isCorrect,
		option: clickedOption
	});
	
	setQuestionResult(myUserSide, clickedOption, isCorrect);

	setQuestionPoints(myUserSide, time, isCorrect);
}

function setQuestionResult(userSide, clickedOption, isCorrect) {
	// aplicar se tá correto ou não
	/*var optionClassColor = userSide == myUserSide ? (isCorrect ? 'chosenOptionGame fillChosenOptionGame optionGreenGame' : 'chosenOptionGame fillChosenOptionGame optionRedGame') : 'chosenOptionGame fillChosenOptionGame optionBlueGame';
		
	var option = $['option' + clickedOption];
	
	$.addClass(option, optionClassColor);*/
	 	
	/*if (!isCorrect && userSide == myUserSide) {
		setQuestionResult(myUserSide, currentQuestion.correct_option, true);	
	}*/
	
	// to-do: marcar na fotinho quem foi que clicou
}

function setQuestionPoints(userSide, time, isCorrect){	
	var points = Alloy.Globals.calculateQuestionPoints(time, isCorrect);

	updateUserPoints(userSide, points, isCorrect);
}

function updateUserPoints(userSide, points, isCorrect){
	var labelPoints = userSide == 'a' ? $.pointsScoreA : $.pointsScoreB;

	var currentPoints = Number(labelPoints.text);

	currentPoints += points;

	labelPoints.text = (currentPoints > 0) ? currentPoints : 0;
	
	updateProgressBar(userSide, currentPoints, isCorrect);
}

function updateProgressBar(userSide, points, isCorrect) {
	var height = Math.round(maxHeightProgressBar * points / Alloy.Globals.maxPointsPerMatch);
	
	var progressBar = userSide == 'a' ? $.percentBarA : $.percentBarB;
	var imageProfile = userSide == 'a' ? $.imageProfileProgessA : $.imageProfileProgessB;
	
	var imageBottom = Math.round((maxHeightProgressBar - imageProfile.height) * points / Alloy.Globals.maxPointsPerMatch);
	
	var backgroundColor = isCorrect ? '#78a800' : '#e42e24';
	
	var animationProgressBar = Titanium.UI.createAnimation({backgroundColor:backgroundColor, height: height, duration: 600});
	var animationImageProfile = Titanium.UI.createAnimation({bottom: imageBottom, duration: 600});
	
	var onCompleteAnimation = function(){
		animationProgressBar.removeEventListener('complete', onCompleteAnimation);
		progressBar.animate(Titanium.UI.createAnimation({backgroundColor:'#41b6da', duration: 600, delay: 400}));
	};
	
	animationProgressBar.addEventListener('complete', onCompleteAnimation);
	
	progressBar.animate(animationProgressBar);
	imageProfile.animate(animationImageProfile);
}

function updateTimer(){
	var currentTimer = new Date();
	var time =  Math.ceil(10 - ((currentTimer.getTime() - counterTimer.getTime())/1000));
	
	$.leftNumber.text = 0;
	$.rightNumber.text = (time > 0) ? time : 0;

	if(time == 0){
		
		clearInterval(timerInterval);
		
		Titanium.App.fireEvent('websocket.dispatchEvent', {
			event: 'timerEnd',
			matchId: matchId,
			questionIndex: currentQuestionIndex
		});
	}
}

$.optionsQuestion.addEventListener('click', function(e){
	if (canClick) {
		if (e.source.id){		
			if (e.source.id.indexOf('option') > -1){			
				var id = e.source.id;
				var clickedId = id.substr(-1);
				
				canClick = false;
				
				questionAnswered(clickedId);
			}
		}	
	}
});

Titanium.App.addEventListener('websocket.showQuestion', showQuestion);
Titanium.App.addEventListener('websocket.startQuestion', startQuestion);
Titanium.App.addEventListener('websocket.fighterAnswered', fighterAnswered);
Titanium.App.addEventListener('websocket.finishGame', finishGame);

$.game.addEventListener('close', function(e) {
	
	Titanium.App.removeEventListener('websocket.showQuestion', showQuestion);
	Titanium.App.removeEventListener('websocket.startQuestion', startQuestion);
	Titanium.App.removeEventListener('websocket.fighterAnswered', fighterAnswered);
	Titanium.App.removeEventListener('websocket.finishGame', finishGame);
	
	if(timerInterval){
		clearInterval(timerInterval);
	}

	$.destroy();
	$.off();
});

$.game.open();