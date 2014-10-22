function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gameResult";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.gameResult = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "gameResult"
    });
    $.__views.gameResult && $.addTopLevelView($.__views.gameResult);
    $.__views.__alloyId75 = Ti.UI.createScrollView({
        backgroundColor: "#383738",
        layout: "vertical",
        id: "__alloyId75"
    });
    $.__views.gameResult.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 280,
        top: 45,
        layout: "vertical",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "absolute",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        borderColor: "#8dc400",
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        height: 28,
        backgroundImage: "/images/trophy.png",
        width: 25,
        left: 50,
        top: 34,
        zIndex: 2,
        bottom: 0,
        id: "__alloyId80"
    });
    $.__views.__alloyId78.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 119,
        layout: "vertical",
        id: "__alloyId81"
    });
    $.__views.__alloyId77.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        textid: "you",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        text: "vs",
        id: "__alloyId83"
    });
    $.__views.__alloyId81.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        text: "Tomas",
        id: "__alloyId84"
    });
    $.__views.__alloyId81.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "absolute",
        id: "__alloyId85"
    });
    $.__views.__alloyId77.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        borderColor: "#bf2527",
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 45,
        layout: "horizontal",
        width: Titanium.UI.FILL,
        id: "__alloyId87"
    });
    $.__views.__alloyId76.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 69,
        layout: "vertical",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "320",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "match_points",
        id: "__alloyId90"
    });
    $.__views.__alloyId88.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        height: 31,
        width: 1,
        backgroundColor: "#ffffff",
        id: "__alloyId91"
    });
    $.__views.__alloyId87.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 69,
        layout: "vertical",
        id: "__alloyId92"
    });
    $.__views.__alloyId87.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "620",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "final_bonus",
        id: "__alloyId94"
    });
    $.__views.__alloyId92.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView({
        height: 31,
        width: 1,
        backgroundColor: "#ffffff",
        id: "__alloyId95"
    });
    $.__views.__alloyId87.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 69,
        layout: "vertical",
        id: "__alloyId96"
    });
    $.__views.__alloyId87.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "720",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ffffff",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "bonus_victory",
        id: "__alloyId98"
    });
    $.__views.__alloyId96.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        height: 31,
        width: 1,
        backgroundColor: "#ffffff",
        id: "__alloyId99"
    });
    $.__views.__alloyId87.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 69,
        layout: "vertical",
        id: "__alloyId100"
    });
    $.__views.__alloyId87.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "820",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "total_points",
        id: "__alloyId102"
    });
    $.__views.__alloyId100.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        height: 77,
        width: Titanium.UI.FILL,
        id: "__alloyId103"
    });
    $.__views.__alloyId76.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId104"
    });
    $.__views.__alloyId76.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createButton({
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
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId106"
    });
    $.__views.__alloyId104.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createButton({
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
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createButton({
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
        id: "__alloyId108"
    });
    $.__views.__alloyId106.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId109"
    });
    $.__views.__alloyId104.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createButton({
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
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createButton({
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
        id: "__alloyId111"
    });
    $.__views.__alloyId109.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        backgroundImage: "/images/background-black-transparent.png",
        layout: "absolute",
        id: "__alloyId112"
    });
    $.__views.gameResult.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        backgroundColor: "#fafafa",
        borderRadius: 5,
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 15,
        width: Titanium.UI.FILL,
        color: "#666666",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "Você está lendo um pop up?",
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId115"
    });
    $.__views.__alloyId113.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createButton({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        height: 30,
        borderRadius: 15,
        backgroundGradient: {
            type: "linear",
            colors: [ "#49b2d3", "#3ca5c6" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: true
        },
        color: "#ffffff",
        top: 15,
        left: 15,
        right: 15,
        bottom: 15,
        width: 100,
        title: "Sim",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createButton({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        height: 30,
        borderRadius: 15,
        backgroundGradient: {
            type: "linear",
            colors: [ "#da3c30", "#cd3023" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: true
        },
        color: "#ffffff",
        top: 15,
        right: 15,
        bottom: 15,
        width: 100,
        title: "Não",
        id: "__alloyId117"
    });
    $.__views.__alloyId115.add($.__views.__alloyId117);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.gameResult.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;