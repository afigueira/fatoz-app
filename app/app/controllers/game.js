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

Cloud.Objects.query({
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
	Cloud.Users.show({
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
			}else{
				$.nameScoreB.text = name;
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
	//$.titleQuestion.visible = false;
	$.addClass($.titleQuestion, "questionGame proximaNovaRegular visibleFalse");
	//$.optionsQuestion.visible = false;
	$.addClass($.optionsQuestion, "optionGame visibleFalse");
	
	// animar o round1
	if(questionIndex == 5){
		$.lastRound.visible = true;
	}
	$.roundNumber.text = ' ' + questionIndex;
	
	//$.currentRound.visible = true;

	var transformCurrentRound = Titanium.UI.create2DMatrix({
		scale: 1
	});
	var AnimateCurrentRound = Titanium.UI.createAnimation({
		transform: transformCurrentRound
	});
	
	$.currentRound.animate(AnimateCurrentRound);

	$.removeClass($.currentRound, "visibleFalse");
	
	// pegar a questão
	var questionId = match['question_' + questionIndex];
	
	Cloud.Objects.query({
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
	/*$.currentRound.visible = false;*/
	var transformCurrentRound = Titanium.UI.create2DMatrix({
		scale: 0.5
	});
	var AnimateCurrentRound = Titanium.UI.createAnimation({
		transform: transformCurrentRound,
		duration: 1
	});
	$.currentRound.animate(AnimateCurrentRound);
	$.addClass($.currentRound, "visibleFalse");
	
	$.titleQuestion.text = currentQuestion.title;
	$.option1.title = currentQuestion.option_1;
	$.option2.title = currentQuestion.option_2;
	$.option3.title = currentQuestion.option_3;
	$.option4.title = currentQuestion.option_4;	
	//correct_option
	
	//$.titleQuestion.visible = true;
	$.removeClass($.titleQuestion, "visibleFalse");
	//$.optionsQuestion.visible = true;
	$.removeClass($.optionsQuestion, "visibleFalse");
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
	if(myUserSide == 'a' && Number($.pointsScoreA.text) > Number($.pointsScoreB.text) || myUserSide == 'b' && Number($.pointsScoreA.text) < Number($.pointsScoreB.text)){		
		$.addClass($.playing,'visibleFalse');
		$.containerYouWin.visible = true;

		setTimeout(function(){
			Alloy.createController('gameResult', {matchId: matchId});
		}, 1000);
	}else{
		Alloy.createController('gameResult', {matchId: matchId});
	}
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
	
	//finishGame();
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

	updateUserPoints(userSide, points);
}

function updateUserPoints(userSide, points){
	var labelPoints = userSide == 'a' ? $.pointsScoreA : $.pointsScoreB;

	var currentPoints = Number(labelPoints.text);

	currentPoints += points;

	labelPoints.text = (currentPoints > 0) ? currentPoints : 0;
}

function updateTimer(){
	var currentTimer = new Date();
	var time =  Math.ceil(10 - ((currentTimer.getTime() - counterTimer.getTime())/1000));
	
	$.leftNumber.text = 0;
	$.rightNumber.text = (time > 0) ? time : 0;

	if(time == 0){
		Titanium.App.fireEvent('websocket.dispatchEvent', {
			event: 'timerEnd',
			matchId: matchId,
			questionIndex: currentQuestionIndex
		});
	}
}

$.optionsQuestion.addEventListener('click', function(e){
	if (e.source.id){		
		if (e.source.id.indexOf('option') > -1){			
			var id = e.source.id;
			var clickedId = id.substr(-1);
			
			questionAnswered(clickedId);
		}
	}
});

Titanium.App.addEventListener('websocket.showQuestion', showQuestion);
Titanium.App.addEventListener('websocket.startQuestion', startQuestion);
Titanium.App.addEventListener('websocket.fighterAnswered', fighterAnswered);
Titanium.App.addEventListener('websocket.finishGame', finishGame);

$.game.open();