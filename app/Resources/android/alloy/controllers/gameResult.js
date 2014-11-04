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
    function matches() {
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
                pointsA = match.points_a;
                pointsB = match.points_b;
                setUserInfo(userA, "a", pointsA);
                setUserInfo(userB, "b", pointsB);
                pointsA > pointsB ? $.trophyA.visible = true : $.trophyB.visible = true;
                console.log(match);
                console.log("pointsA", pointsA);
                console.log("pointsB", pointsB);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function setUserInfo(userId, side, points) {
        Cloud.Users.show({
            user_id: userId
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                var name = user.id == Titanium.App.Properties.getString("userId") ? "Você" : user.first_name;
                user.id == Titanium.App.Properties.getString("userId") && (myUserSide = side);
                if ("a" == side) {
                    $.nameUserA.text = name;
                    $.matchPoints.text = points;
                } else {
                    $.nameUserB.text = name;
                    $.matchPoints.text = points;
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
    $.__views.__alloyId55 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        role: "centerWindow",
        id: "__alloyId55"
    });
    $.__views.__alloyId56 = Ti.UI.createScrollView({
        backgroundColor: "#383738",
        layout: "vertical",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 280,
        top: 45,
        layout: "vertical",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "absolute",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.imageProfileA = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        borderColor: "#8dc400",
        id: "imageProfileA",
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
    });
    $.__views.__alloyId59.add($.__views.imageProfileA);
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
    $.__views.__alloyId59.add($.__views.trophyA);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 119,
        layout: "vertical",
        id: "__alloyId60"
    });
    $.__views.__alloyId58.add($.__views.__alloyId60);
    $.__views.nameUserA = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        id: "nameUserA"
    });
    $.__views.__alloyId60.add($.__views.nameUserA);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        text: "vs",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.nameUserB = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        id: "nameUserB"
    });
    $.__views.__alloyId60.add($.__views.nameUserB);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "absolute",
        id: "__alloyId62"
    });
    $.__views.__alloyId58.add($.__views.__alloyId62);
    $.__views.imageProfileB = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        borderColor: "#bf2527",
        id: "imageProfileB",
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
    });
    $.__views.__alloyId62.add($.__views.imageProfileB);
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
    $.__views.__alloyId62.add($.__views.trophyB);
    $.__views.__alloyId63 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 45,
        layout: "horizontal",
        width: Titanium.UI.FILL,
        id: "__alloyId63"
    });
    $.__views.__alloyId57.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 69,
        layout: "vertical",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.matchPoints = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "matchPoints"
    });
    $.__views.__alloyId64.add($.__views.matchPoints);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "match_points",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        height: 31,
        width: 1,
        backgroundColor: "#ffffff",
        id: "__alloyId66"
    });
    $.__views.__alloyId63.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 69,
        layout: "vertical",
        id: "__alloyId67"
    });
    $.__views.__alloyId63.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "620",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "final_bonus",
        id: "__alloyId69"
    });
    $.__views.__alloyId67.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        height: 31,
        width: 1,
        backgroundColor: "#ffffff",
        id: "__alloyId70"
    });
    $.__views.__alloyId63.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 69,
        layout: "vertical",
        id: "__alloyId71"
    });
    $.__views.__alloyId63.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "720",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "bonus_victory",
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        height: 31,
        width: 1,
        backgroundColor: "#ffffff",
        id: "__alloyId74"
    });
    $.__views.__alloyId63.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 69,
        layout: "vertical",
        id: "__alloyId75"
    });
    $.__views.__alloyId63.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "820",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "total_points",
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        height: 77,
        width: Titanium.UI.FILL,
        id: "__alloyId78"
    });
    $.__views.__alloyId57.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId79"
    });
    $.__views.__alloyId57.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createButton({
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
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId81"
    });
    $.__views.__alloyId79.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createButton({
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
        titleid: "button_rematch",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createButton({
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
        id: "__alloyId83"
    });
    $.__views.__alloyId81.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId84"
    });
    $.__views.__alloyId79.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createButton({
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
        titleid: "button_challenge",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createButton({
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
        titleid: "button_ranking",
        id: "__alloyId86"
    });
    $.__views.__alloyId84.add($.__views.__alloyId86);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId55 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Alloy.Globals.drawer($.sidebar, $.drawer, "Resultado da Partida", init());
    var myUserSide;
    var matchId = args.matchId;
    var pointsA;
    var pointsB;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;