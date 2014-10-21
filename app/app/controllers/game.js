var args = arguments[0] || {};
var matchId = args.matchId;
var match;
var currentQuestion;
var currentQuestionIndex;
var myUserSide;
var userReady = 0;

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
	
	// esconder atual
	$.titleQuestion.visible = false;
	$.optionsQuestion.visible = false;
	
	// animar o round1
	$.roundNumber.text = ' ' + questionIndex;
	$.currentRound.visible = true;
	
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
	var questionIndex = e.questionIndex;
	
	currentQuestionIndex = questionIndex;
	
	// esconder round atual
	$.currentRound.visible = false;
	
	$.titleQuestion.text = currentQuestion.title;
	$.option1.title = currentQuestion.option_1;
	$.option2.title = currentQuestion.option_2;
	$.option3.title = currentQuestion.option_3;
	$.option4.title = currentQuestion.option_4;	
	//correct_option
	
	$.titleQuestion.visible = true;
	$.optionsQuestion.visible = true;
}

function fighterAnswered(e) {
	var questionIndex = e.questionIndex;
	var time = e.time;
	var isCorrect = e.isCorrect;
	var option = e.option;
	
	var fighterSide = myUserSide == 'a' ? 'b' : 'a';
	
	setQuestionResult(fighterSide, option, isCorrect);
}

function finishGame(e) {
	//
}

function questionAnswered(clickedOption) {
	var isCorrect = currentQuestion.correct_option == clickedOption;
	var time = Math.ceil(Math.random() * 10);
	
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
}

function setQuestionResult(userSide, clickedOption, isCorrect) {
	// aplicar se tá correto ou não
	var classColor = userSide == myUserSide ? (isCorrect ? 'optionGreenGame' : 'optionRedGame') : 'optionBlueGame';
	var option = $['option' + clickedOption];
	
	$.addClass(option, classColor);
	
	if (!isCorrect && userSide == myUserSide) {
		setQuestionResult(myUserSide, currentQuestion.correct_option, true);	
	}
	
	// to-do: marcar na fotinho quem foi que clicou
}

function calculatePontuation(time) {
	//
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