function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init() {
        matches();
    }
    function events() {
        $.buttonPlayAgain.addEventListener("click", openQueue);
        $.buttonRanking.addEventListener("click", openRanking);
    }
    function openQueue() {
        Alloy.createController("roomQueue", {
            categoryId: match.category
        });
    }
    function openRanking() {
        Alloy.createController("ranking", {
            categoryId: match.category
        });
    }
    function matches() {
        Alloy.Globals.Cloud.Objects.query({
            classname: "matches",
            where: {
                id: matchId
            }
        }, function(e) {
            if (e.success) {
                match = e.matches[0];
                events();
                var userA = match.user_a;
                var userB = match.user_b;
                pointsA = match.points_a;
                pointsB = match.points_b;
                var myUserId = Titanium.App.Properties.getString("userId");
                matchResultString = userA == myUserId && pointsA > pointsB || userB == myUserId && pointsB > pointsA ? "venci!!!" : "perdi";
                setUserInfo(userA, "a", pointsA);
                setUserInfo(userB, "b", pointsB);
                if (pointsA != pointsB) if (pointsA > pointsB) {
                    $.addClass($.imageProfileA, "imageProfile imageProfileYouResult borderGreenGame");
                    $.addClass($.imageProfileB, "imageProfile imageProfileYouResult borderRedGame");
                    $.trophyA.visible = true;
                } else {
                    $.addClass($.imageProfileB, "imageProfile imageProfileYouResult borderGreenGame");
                    $.addClass($.imageProfileA, "imageProfile imageProfileYouResult borderRedGame");
                    $.trophyB.visible = true;
                } else {
                    $.addClass($.imageProfileA, "imageProfile imageProfileYouResult borderRedGame");
                    $.addClass($.imageProfileB, "imageProfile imageProfileYouResult borderRedGame");
                }
            } else alert("Houve um erro para pegar os dados da partida");
        });
    }
    function setUserInfo(userId, side, points) {
        Alloy.Globals.Cloud.Users.show({
            user_id: userId
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                var name = user.id == Titanium.App.Properties.getString("userId") ? "Você" : user.first_name;
                user.id != Titanium.App.Properties.getString("userId") && (fighterName = user.first_name + " " + user.last_name);
                if ("a" == side) {
                    $.nameUserA.text = name;
                    $.pointsA.text = points;
                    Alloy.Globals.loadPhoto($.imageProfileA, "image", user.custom_fields.profile_image);
                } else {
                    $.nameUserB.text = name;
                    $.pointsB.text = points;
                    Alloy.Globals.loadPhoto($.imageProfileB, "image", user.custom_fields.profile_image);
                }
            }
        });
    }
    function shareFacebook() {
        var data = {
            link: "http://www.fatoz.com.br/",
            name: "Fatoz Game",
            message: "Acabei de disputar uma partida contra" + fighterName + " e " + matchResultString,
            caption: "Fatoz Game",
            picture: "http://developer.appcelerator.com/assets/img/DEV_titmobile_image.png",
            description: ""
        };
        Alloy.Globals.Facebook.dialog("feed", data, function() {});
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gameResult";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sidebar = require("xp.ui").createWindow({
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.__alloyId37 = require("xp.ui").createWindow({
        role: "centerWindow",
        title: "Resultado final",
        id: "__alloyId37"
    });
    $.__views.scrollView = Ti.UI.createScrollView({
        backgroundColor: "#383738",
        top: Alloy.Globals.marginTopWindow,
        layout: "vertical",
        id: "scrollView"
    });
    $.__views.__alloyId37.add($.__views.scrollView);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 280,
        top: 45,
        layout: "vertical",
        id: "__alloyId38"
    });
    $.__views.scrollView.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "absolute",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.imageProfileA = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        id: "imageProfileA"
    });
    $.__views.__alloyId40.add($.__views.imageProfileA);
    $.__views.trophyA = Ti.UI.createView({
        height: 28,
        backgroundImage: "/images/trophy.png",
        width: 25,
        left: 50,
        top: 34,
        zIndex: 2,
        bottom: 0,
        id: "trophyA",
        visible: "false"
    });
    $.__views.__alloyId40.add($.__views.trophyA);
    $.__views.__alloyId41 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 119,
        layout: "vertical",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.nameUserA = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        id: "nameUserA"
    });
    $.__views.__alloyId41.add($.__views.nameUserA);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        text: "vs",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.nameUserB = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        id: "nameUserB"
    });
    $.__views.__alloyId41.add($.__views.nameUserB);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "absolute",
        id: "__alloyId43"
    });
    $.__views.__alloyId39.add($.__views.__alloyId43);
    $.__views.imageProfileB = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        id: "imageProfileB"
    });
    $.__views.__alloyId43.add($.__views.imageProfileB);
    $.__views.trophyB = Ti.UI.createView({
        height: 28,
        backgroundImage: "/images/trophy.png",
        width: 25,
        left: 50,
        top: 34,
        zIndex: 2,
        bottom: 0,
        id: "trophyB",
        visible: "false"
    });
    $.__views.__alloyId43.add($.__views.trophyB);
    $.__views.__alloyId44 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 25,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId44"
    });
    $.__views.__alloyId38.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 65,
        layout: "vertical",
        left: 0,
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.pointsA = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "pointsA"
    });
    $.__views.__alloyId45.add($.__views.pointsA);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "points",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 65,
        layout: "vertical",
        right: 10,
        id: "__alloyId47"
    });
    $.__views.__alloyId44.add($.__views.__alloyId47);
    $.__views.pointsB = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "pointsB"
    });
    $.__views.__alloyId47.add($.__views.pointsB);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "points",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: 77,
        width: Titanium.UI.FILL,
        id: "__alloyId49"
    });
    $.__views.__alloyId38.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId50"
    });
    $.__views.__alloyId38.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createButton({
        height: 30,
        borderRadius: 15,
        backgroundGradient: {
            type: "linear",
            colors: [ "#49b2d3", "#3ca5c6" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: true
        },
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        color: "#ffffff",
        backgroundImage: "/images/background-blue-transparent.png",
        borderColor: "#37538e",
        borderWidth: 1,
        image: "/images/icon-facebook.png",
        width: Titanium.UI.FILL,
        bottom: 15,
        title: "Compartilhar Resultado",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    shareFacebook ? $.__views.__alloyId51.addEventListener("click", shareFacebook) : __defers["$.__views.__alloyId51!click!shareFacebook"] = true;
    $.__views.__alloyId52 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId52"
    });
    $.__views.__alloyId50.add($.__views.__alloyId52);
    $.__views.buttonRanking = Ti.UI.createButton({
        backgroundImage: "/images/background-btn-more.png",
        height: 30,
        borderRadius: 15,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        borderColor: "white",
        borderWidth: 1,
        color: "#ffffff",
        width: 132,
        bottom: 15,
        right: 10,
        titleid: "button_ranking",
        id: "buttonRanking"
    });
    $.__views.__alloyId52.add($.__views.buttonRanking);
    $.__views.buttonPlayAgain = Ti.UI.createButton({
        backgroundImage: "/images/background-btn-more.png",
        height: 30,
        borderRadius: 15,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        borderColor: "white",
        borderWidth: 1,
        color: "#ffffff",
        width: 132,
        bottom: 15,
        titleid: "button_play_again",
        id: "buttonPlayAgain"
    });
    $.__views.__alloyId52.add($.__views.buttonPlayAgain);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "https://1f0b6fd33fa8afdb54e5479c5a17447732b25d68.cloudapp.appcelerator.com/banner?platform=android&unitId=ca-app-pub-1202817906596777/9714576843",
        background: "red",
        width: "320",
        height: "50",
        bottom: "0",
        zIndex: "300"
    });
    $.__views.__alloyId37.add($.__views.webview);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId37 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Alloy.Globals.drawer($.sidebar, $.drawer, "Resultado final", init);
    var matchId = args.matchId;
    var pointsA;
    var pointsB;
    var match;
    var fighterName = "";
    var matchResultString = "";
    __defers["$.__views.__alloyId51!click!shareFacebook"] && $.__views.__alloyId51.addEventListener("click", shareFacebook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;