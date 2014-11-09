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
        Cloud.Objects.query({
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
        Cloud.Users.show({
            user_id: userId
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                var name = user.id == Titanium.App.Properties.getString("userId") ? "Você" : user.first_name;
                if ("a" == side) {
                    $.nameUserA.text = name;
                    $.pointsA.text = points;
                } else {
                    $.nameUserB.text = name;
                    $.pointsB.text = points;
                }
            }
        });
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
    $.__views.sidebar = require("xp.ui").createWindow({
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.__alloyId52 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        role: "centerWindow",
        id: "__alloyId52"
    });
    $.__views.scrollView = Ti.UI.createScrollView({
        backgroundColor: "#383738",
        layout: "vertical",
        id: "scrollView"
    });
    $.__views.__alloyId52.add($.__views.scrollView);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 280,
        top: 45,
        layout: "vertical",
        id: "__alloyId53"
    });
    $.__views.scrollView.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "absolute",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.imageProfileA = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        id: "imageProfileA",
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
    });
    $.__views.__alloyId55.add($.__views.imageProfileA);
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
    $.__views.__alloyId55.add($.__views.trophyA);
    $.__views.__alloyId56 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 119,
        layout: "vertical",
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.nameUserA = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        id: "nameUserA"
    });
    $.__views.__alloyId56.add($.__views.nameUserA);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        text: "vs",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.nameUserB = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        id: "nameUserB"
    });
    $.__views.__alloyId56.add($.__views.nameUserB);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "absolute",
        id: "__alloyId58"
    });
    $.__views.__alloyId54.add($.__views.__alloyId58);
    $.__views.imageProfileB = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        id: "imageProfileB",
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
    });
    $.__views.__alloyId58.add($.__views.imageProfileB);
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
    $.__views.__alloyId58.add($.__views.trophyB);
    $.__views.__alloyId59 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 25,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId59"
    });
    $.__views.__alloyId53.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 65,
        layout: "vertical",
        left: 0,
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.pointsA = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "pointsA"
    });
    $.__views.__alloyId60.add($.__views.pointsA);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "points",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 65,
        layout: "vertical",
        right: 10,
        id: "__alloyId62"
    });
    $.__views.__alloyId59.add($.__views.__alloyId62);
    $.__views.pointsB = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "pointsB"
    });
    $.__views.__alloyId62.add($.__views.pointsB);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "points",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: 77,
        width: Titanium.UI.FILL,
        id: "__alloyId64"
    });
    $.__views.__alloyId53.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId65"
    });
    $.__views.__alloyId53.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createButton({
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
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId67"
    });
    $.__views.__alloyId65.add($.__views.__alloyId67);
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
    $.__views.__alloyId67.add($.__views.buttonRanking);
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
    $.__views.__alloyId67.add($.__views.buttonPlayAgain);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId52 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Alloy.Globals.drawer($.sidebar, $.drawer, "Resultado da Partida", init());
    var matchId = args.matchId;
    var pointsA;
    var pointsB;
    var match;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;