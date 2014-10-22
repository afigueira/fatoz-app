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
        $.addClass($.titleQuestion, "visibleFalse");
        $.addClass($.optionsQuestion, "visibleFalse");
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
    }
    function fighterAnswered(e) {
        e.questionIndex;
        e.time;
        var isCorrect = e.isCorrect;
        var option = e.option;
        var fighterSide = "a" == myUserSide ? "b" : "a";
        setQuestionResult(fighterSide, option, isCorrect);
    }
    function finishGame() {
        Alloy.createController("gameResult");
    }
    function questionAnswered(clickedOption) {
        var isCorrect = currentQuestion.correct_option == clickedOption;
        var time = Math.ceil(10 * Math.random());
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
        finishGame();
    }
    function setQuestionResult(userSide, clickedOption, isCorrect) {
        var classColor = userSide == myUserSide ? isCorrect ? "optionGreenGame" : "optionRedGame" : "optionBlueGame";
        var option = $["option" + clickedOption];
        $.addClass(option, classColor);
        isCorrect || userSide != myUserSide || setQuestionResult(myUserSide, currentQuestion.correct_option, true);
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
    $.__views.__alloyId48 = Ti.UI.createScrollView({
        backgroundColor: "#383738",
        layout: "vertical",
        id: "__alloyId48"
    });
    $.__views.game.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: 70,
        width: Titanium.UI.FILL,
        backgroundColor: "#222222",
        layout: "horizontal",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 125,
        layout: "vertical",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "290",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
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
    $.__views.__alloyId53.add($.__views.nameScoreA);
    $.__views.__alloyId55 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "69",
        backgroundColor: "lime",
        id: "__alloyId55"
    });
    $.__views.__alloyId52.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 125,
        layout: "vertical",
        id: "__alloyId56"
    });
    $.__views.__alloyId52.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "290",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
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
    $.__views.__alloyId56.add($.__views.nameScoreB);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        borderColor: "#0e0e0e",
        backgroundColor: "#0e0e0e",
        borderWidth: 1,
        id: "__alloyId58"
    });
    $.__views.__alloyId49.add($.__views.__alloyId58);
    $.__views.titleQuestion = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        visible: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: 42,
        bottom: 42,
        color: "#ffffff",
        text: "A Qual das seguintes marcas pertence a logo abaixo?",
        id: "titleQuestion"
    });
    $.__views.__alloyId49.add($.__views.titleQuestion);
    $.__views.__alloyId59 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId59"
    });
    $.__views.__alloyId49.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 4,
        right: 4,
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 175,
        zIndex: 1,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId64"
    });
    $.__views.__alloyId62.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        layout: "vertical",
        width: "228",
        left: 5,
        right: 5,
        id: "__alloyId66"
    });
    $.__views.__alloyId61.add($.__views.__alloyId66);
    $.__views.optionsQuestion = Ti.UI.createView({
        height: 0,
        visible: false,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        id: "optionsQuestion"
    });
    $.__views.__alloyId66.add($.__views.optionsQuestion);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId67"
    });
    $.__views.optionsQuestion.add($.__views.__alloyId67);
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
    $.__views.__alloyId67.add($.__views.option1);
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
    $.__views.__alloyId67.add($.__views.option2);
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
    $.__views.__alloyId67.add($.__views.option3);
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
    $.__views.__alloyId67.add($.__views.option4);
    $.__views.currentRound = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        id: "currentRound",
        visible: "true"
    });
    $.__views.__alloyId66.add($.__views.currentRound);
    $.__views.__alloyId68 = Ti.UI.createLabel({
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
        id: "__alloyId68"
    });
    $.__views.currentRound.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId69"
    });
    $.__views.currentRound.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 40
        },
        color: "#ffffff",
        height: Titanium.UI.SIZE,
        textid: "round",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.roundNumber = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 40
        },
        color: "#ffffff",
        height: Titanium.UI.SIZE,
        text: "5",
        id: "roundNumber"
    });
    $.__views.__alloyId69.add($.__views.roundNumber);
    $.__views.__alloyId71 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 4,
        right: 4,
        id: "__alloyId71"
    });
    $.__views.__alloyId61.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 175,
        zIndex: 1,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var matchId = args.matchId;
    var match;
    var currentQuestion;
    var currentQuestionIndex;
    var myUserSide;
    var userReady = 0;
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
        if (e.source.id && e.source.id.indexOf("option") > -1) {
            var id = e.source.id;
            var clickedId = id.substr(-1);
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