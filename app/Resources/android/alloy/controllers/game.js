function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getUserInfo(userId, side) {
        Cloud.Users.show({
            user_id: userId
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                var name = user.id == Titanium.App.Properties.getString("userId") ? "Você" : user.first_name;
                user.id == Titanium.App.Properties.getString("userId") && (myUserSide = side);
                "a" == side ? $.nameScoreA.text = name : $.nameScoreB.text = name;
                userReady++;
                2 == userReady && Titanium.App.fireEvent("websocket.dispatchEvent", {
                    event: "userReady",
                    matchId: args.matchId
                });
            }
        });
    }
    function showQuestion(e) {
        var questionIndex = e.questionIndex;
        timerInterval && clearInterval(timerInterval);
        $.leftNumber.text = 1;
        $.rightNumber.text = 0;
        $.addClass($.titleQuestion, "questionGame proximaNovaRegular visibleFalse");
        $.addClass($.optionsQuestion, "optionGame visibleFalse");
        5 == questionIndex && ($.lastRound.visible = true);
        $.roundNumber.text = " " + questionIndex;
        $.removeClass($.currentRound, "visibleFalse");
        var questionId = match["question_" + questionIndex];
        Cloud.Objects.query({
            classname: "questions",
            where: {
                id: questionId
            }
        }, function(e) {
            if (e.success) {
                currentQuestion = e.questions[0];
                Titanium.App.fireEvent("websocket.dispatchEvent", {
                    event: "questionReady",
                    questionIndex: questionIndex,
                    matchId: matchId
                });
            }
        });
    }
    function startQuestion(e) {
        $.removeClass($.option1, "optionRedGame");
        $.removeClass($.option1, "optionGreenGame");
        $.removeClass($.option1, "optionBlueGame");
        $.removeClass($.option2, "optionRedGame");
        $.removeClass($.option2, "optionGreenGame");
        $.removeClass($.option2, "optionBlueGame");
        $.removeClass($.option3, "optionRedGame");
        $.removeClass($.option3, "optionGreenGame");
        $.removeClass($.option3, "optionBlueGame");
        $.removeClass($.option4, "optionRedGame");
        $.removeClass($.option4, "optionGreenGame");
        $.removeClass($.option4, "optionBlueGame");
        counterTimer = new Date();
        timerInterval = setInterval(updateTimer, 1e3);
        var questionIndex = e.questionIndex;
        currentQuestionIndex = questionIndex;
        $.addClass($.currentRound, "visibleFalse");
        $.titleQuestion.text = currentQuestion.title;
        $.option1.title = currentQuestion.option_1;
        $.option2.title = currentQuestion.option_2;
        $.option3.title = currentQuestion.option_3;
        $.option4.title = currentQuestion.option_4;
        $.removeClass($.titleQuestion, "visibleFalse");
        $.removeClass($.optionsQuestion, "visibleFalse");
        canClick = true;
    }
    function fighterAnswered(e) {
        e.questionIndex;
        var time = e.time;
        var isCorrect = e.isCorrect;
        var option = e.option;
        var fighterSide = "a" == myUserSide ? "b" : "a";
        setQuestionResult(fighterSide, option, isCorrect);
        setQuestionPoints(fighterSide, time, isCorrect);
    }
    function finishGame() {
        var pointsA = Number($.pointsScoreA.text);
        var pointsB = Number($.pointsScoreB.text);
        "a" == myUserSide && Titanium.App.fireEvent("websocket.dispatchEvent", {
            event: "matchResult",
            matchId: matchId,
            pointsA: pointsA,
            pointsB: pointsB
        });
        timerInterval && clearInterval(timerInterval);
        $.scrollView.remove($.playing);
        createYouWin(pointsA, pointsB);
    }
    function createYouWin(pointsA, pointsB) {
        $youWinGame = Titanium.UI.createView({
            id: "containerYouWin"
        });
        $.addClass($youWinGame, "youWinGame");
        $imageView = Titanium.UI.createImageView({
            backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
        });
        $.addClass($imageView, "imageProfile imageProfileYouWin");
        $youWinBackground = Titanium.UI.createView();
        $.addClass($youWinBackground, "youWinBackground");
        $label = Titanium.UI.createLabel({
            id: "textWinner"
        });
        $.addClass($label, "proximaNovaRegular youWin");
        $youWinBackground.add($label);
        $trophy = Titanium.UI.createView();
        $.addClass($trophy, "trophyGame");
        $youWinGame.add($imageView);
        $youWinGame.add($youWinBackground);
        $youWinGame.add($trophy);
        $.scrollView.add($youWinGame);
        $label.text = pointsA != pointsB ? "a" == myUserSide && pointsA > pointsB || "b" == myUserSide && pointsB > pointsA ? "VOCÊ\n VENCEU!" : "VOCÊ\n PERDEU!" : "EMPATE!";
        $youWinGame.opacity = 0;
        var youWinFadeIn = Titanium.UI.createAnimation({
            opacity: 1,
            duration: 500
        });
        var onCompleteFadeIn = function() {
            var youWinFadeout = Titanium.UI.createAnimation({
                opacity: 0,
                duration: 500,
                delay: 1500
            });
            var onCompleteFadeout = function() {
                Alloy.createController("gameResult", {
                    matchId: matchId
                });
            };
            youWinFadeout.addEventListener("complete", onCompleteFadeout);
            $youWinGame.animate(youWinFadeout);
        };
        youWinFadeIn.addEventListener("complete", onCompleteFadeIn);
        $youWinGame.animate(youWinFadeIn);
    }
    function questionAnswered(clickedOption) {
        var currentTimer = new Date();
        var isCorrect = currentQuestion.correct_option == clickedOption;
        var time = currentTimer.getTime() - counterTimer.getTime();
        Titanium.App.fireEvent("websocket.dispatchEvent", {
            event: "questionAnswered",
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
    function setQuestionResult() {}
    function setQuestionPoints(userSide, time, isCorrect) {
        var points = Alloy.Globals.calculateQuestionPoints(time, isCorrect);
        updateUserPoints(userSide, points, isCorrect);
    }
    function updateUserPoints(userSide, points, isCorrect) {
        var labelPoints = "a" == userSide ? $.pointsScoreA : $.pointsScoreB;
        var currentPoints = Number(labelPoints.text);
        currentPoints += points;
        labelPoints.text = currentPoints > 0 ? currentPoints : 0;
        updateProgressBar(userSide, currentPoints, isCorrect);
    }
    function updateProgressBar(userSide, points, isCorrect) {
        var height = Math.round(maxHeightProgressBar * points / Alloy.Globals.maxPointsPerMatch);
        var progressBar = "a" == userSide ? $.percentBarA : $.percentBarB;
        var imageProfile = "a" == userSide ? $.imageProfileProgessA : $.imageProfileProgessB;
        var backgroundColor = isCorrect ? "#78a800" : "#e42e24";
        var animationProgressBar = Titanium.UI.createAnimation({
            backgroundColor: backgroundColor,
            height: height,
            duration: 600
        });
        var animationImageProfile = Titanium.UI.createAnimation({
            bottom: height - imageProfile.height / 2,
            duration: 600
        });
        var onCompleteAnimation = function() {
            animationProgressBar.removeEventListener("complete", onCompleteAnimation);
            progressBar.animate(Titanium.UI.createAnimation({
                backgroundColor: "#41b6da",
                duration: 600,
                delay: 400
            }));
        };
        animationProgressBar.addEventListener("complete", onCompleteAnimation);
        progressBar.animate(animationProgressBar);
        imageProfile.animate(animationImageProfile);
    }
    function updateTimer() {
        var currentTimer = new Date();
        var time = Math.ceil(10 - (currentTimer.getTime() - counterTimer.getTime()) / 1e3);
        $.leftNumber.text = 0;
        $.rightNumber.text = time > 0 ? time : 0;
        if (0 == time) {
            clearInterval(timerInterval);
            Titanium.App.fireEvent("websocket.dispatchEvent", {
                event: "timerEnd",
                matchId: matchId,
                questionIndex: currentQuestionIndex
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "game";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.game = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "game"
    });
    $.__views.game && $.addTopLevelView($.__views.game);
    $.__views.scrollView = Ti.UI.createScrollView({
        backgroundColor: "#383738",
        layout: "vertical",
        id: "scrollView"
    });
    $.__views.game.add($.__views.scrollView);
    $.__views.playing = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "playing"
    });
    $.__views.scrollView.add($.__views.playing);
    $.__views.__alloyId35 = Ti.UI.createView({
        height: 70,
        width: Titanium.UI.FILL,
        backgroundColor: "#222222",
        layout: "horizontal",
        id: "__alloyId35"
    });
    $.__views.playing.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 110,
        layout: "vertical",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.pointsScoreA = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "0",
        id: "pointsScoreA"
    });
    $.__views.__alloyId38.add($.__views.pointsScoreA);
    $.__views.nameScoreA = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "nameScoreA"
    });
    $.__views.__alloyId38.add($.__views.nameScoreA);
    $.__views.timer = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: 100,
        backgroundImage: "/images/background-timer.png",
        id: "timer"
    });
    $.__views.__alloyId37.add($.__views.timer);
    $.__views.leftNumber = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontWeight: "bold"
        },
        color: "#000000",
        width: 45,
        height: Titanium.UI.FILL,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        left: 5,
        id: "leftNumber",
        text: "1"
    });
    $.__views.timer.add($.__views.leftNumber);
    $.__views.rightNumber = Ti.UI.createLabel({
        font: {
            fontSize: 40,
            fontWeight: "bold"
        },
        color: "#000000",
        width: 45,
        height: Titanium.UI.FILL,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        right: 5,
        id: "rightNumber",
        text: "0"
    });
    $.__views.timer.add($.__views.rightNumber);
    $.__views.__alloyId39 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 110,
        layout: "vertical",
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    $.__views.pointsScoreB = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "0",
        id: "pointsScoreB"
    });
    $.__views.__alloyId39.add($.__views.pointsScoreB);
    $.__views.nameScoreB = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "nameScoreB"
    });
    $.__views.__alloyId39.add($.__views.nameScoreB);
    $.__views.__alloyId40 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        borderColor: "#0e0e0e",
        backgroundColor: "#0e0e0e",
        borderWidth: 1,
        id: "__alloyId40"
    });
    $.__views.playing.add($.__views.__alloyId40);
    $.__views.titleQuestion = Ti.UI.createLabel({
        visible: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: 42,
        left: 0,
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        bottom: 42,
        color: "#ffffff",
        id: "titleQuestion"
    });
    $.__views.playing.add($.__views.titleQuestion);
    $.__views.__alloyId41 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId41"
    });
    $.__views.playing.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "335",
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 4,
        right: 4,
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.imageProfileProgessA = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 0,
        zIndex: 1,
        id: "imageProfileProgessA",
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
    });
    $.__views.__alloyId44.add($.__views.imageProfileProgessA);
    $.__views.__alloyId45 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.percentBarA = Ti.UI.createView({
        height: 0,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "percentBarA"
    });
    $.__views.__alloyId45.add($.__views.percentBarA);
    $.__views.__alloyId46 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        layout: "vertical",
        width: "228",
        left: 5,
        right: 5,
        id: "__alloyId46"
    });
    $.__views.__alloyId43.add($.__views.__alloyId46);
    $.__views.optionsQuestion = Ti.UI.createView({
        height: 0,
        visible: false,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 0,
        layout: "vertical",
        id: "optionsQuestion"
    });
    $.__views.__alloyId46.add($.__views.optionsQuestion);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId47"
    });
    $.__views.optionsQuestion.add($.__views.__alloyId47);
    $.__views.option1 = Ti.UI.createButton({
        width: 228,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        id: "option1"
    });
    $.__views.__alloyId47.add($.__views.option1);
    $.__views.option2 = Ti.UI.createButton({
        width: 228,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        id: "option2"
    });
    $.__views.__alloyId47.add($.__views.option2);
    $.__views.option3 = Ti.UI.createButton({
        width: 228,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        id: "option3"
    });
    $.__views.__alloyId47.add($.__views.option3);
    $.__views.option4 = Ti.UI.createButton({
        width: 228,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        id: "option4"
    });
    $.__views.__alloyId47.add($.__views.option4);
    $.__views.currentRound = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "currentRound",
        visible: "true"
    });
    $.__views.__alloyId46.add($.__views.currentRound);
    $.__views.lastRound = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14
        },
        color: "#ffffff",
        width: 228,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: 70,
        bottom: 15,
        textid: "last_round",
        id: "lastRound",
        visible: "false"
    });
    $.__views.currentRound.add($.__views.lastRound);
    $.__views.__alloyId48 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId48"
    });
    $.__views.currentRound.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 40
        },
        color: "#ffffff",
        height: Titanium.UI.SIZE,
        textid: "round",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.roundNumber = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 40
        },
        color: "#ffffff",
        height: Titanium.UI.SIZE,
        text: " 1",
        id: "roundNumber"
    });
    $.__views.__alloyId48.add($.__views.roundNumber);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 4,
        right: 4,
        id: "__alloyId50"
    });
    $.__views.__alloyId43.add($.__views.__alloyId50);
    $.__views.imageProfileProgessB = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 0,
        zIndex: 1,
        id: "imageProfileProgessB",
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
    });
    $.__views.__alloyId50.add($.__views.imageProfileProgessB);
    $.__views.__alloyId51 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.percentBarB = Ti.UI.createView({
        height: 0,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "percentBarB"
    });
    $.__views.__alloyId51.add($.__views.percentBarB);
    exports.destroy = function() {};
    _.extend($, $.__views);
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
    Cloud.Objects.query({
        classname: "matches",
        where: {
            id: matchId
        }
    }, function(e) {
        if (e.success) {
            match = e.matches[0];
            var userA = match.user_a;
            var userB = match.user_b;
            getUserInfo(userA, "a");
            getUserInfo(userB, "b");
        } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
    $.optionsQuestion.addEventListener("click", function(e) {
        if (canClick && e.source.id && e.source.id.indexOf("option") > -1) {
            var id = e.source.id;
            var clickedId = id.substr(-1);
            canClick = false;
            questionAnswered(clickedId);
        }
    });
    Titanium.App.addEventListener("websocket.showQuestion", showQuestion);
    Titanium.App.addEventListener("websocket.startQuestion", startQuestion);
    Titanium.App.addEventListener("websocket.fighterAnswered", fighterAnswered);
    Titanium.App.addEventListener("websocket.finishGame", finishGame);
    $.game.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;