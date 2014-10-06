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
    $.__views.__alloyId82 = Ti.UI.createScrollView({
        backgroundColor: "#383738",
        layout: "vertical",
        id: "__alloyId82"
    });
    $.__views.game.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createView({
        height: 70,
        width: Titanium.UI.FILL,
        backgroundColor: "#222222",
        layout: "horizontal",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 125,
        layout: "vertical",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        font: {
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "290",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "you",
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "69",
        backgroundColor: "lime",
        id: "__alloyId90"
    });
    $.__views.__alloyId86.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 125,
        layout: "vertical",
        id: "__alloyId91"
    });
    $.__views.__alloyId86.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        font: {
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "290",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "Tomas",
        id: "__alloyId93"
    });
    $.__views.__alloyId91.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        borderColor: "#0e0e0e",
        borderWidth: 1,
        id: "__alloyId94"
    });
    $.__views.__alloyId83.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: 42,
        bottom: 42,
        color: "#ffffff",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        text: "A Qual das seguintes marcas pertence a logo abaixo?",
        id: "__alloyId95"
    });
    $.__views.__alloyId83.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId96"
    });
    $.__views.__alloyId83.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 10,
        right: 10,
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 175,
        zIndex: 1,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId101"
    });
    $.__views.__alloyId99.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId103"
    });
    $.__views.__alloyId98.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createView({
        height: 150,
        borderRadius: 3,
        bottom: 30,
        width: 228,
        backgroundColor: "#ffffff",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createImageView({
        image: "/images/trophy.png",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        text: "No céu tem pão?",
        id: "__alloyId106"
    });
    $.__views.__alloyId104.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId107"
    });
    $.__views.__alloyId103.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createButton({
        width: 107,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        right: 10,
        title: "Apple",
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createButton({
        width: 107,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#e42e24",
        borderRadius: 3,
        bottom: 10,
        title: "Apple Computer inc.",
        id: "__alloyId110"
    });
    $.__views.__alloyId108.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId111"
    });
    $.__views.__alloyId107.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createButton({
        width: 107,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        right: 10,
        title: "Apple",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createButton({
        width: 107,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        title: "Apple Computer inc.",
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
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
        id: "__alloyId114"
    });
    $.__views.__alloyId103.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId115"
    });
    $.__views.__alloyId103.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 40
        },
        color: "#ffffff",
        height: Titanium.UI.SIZE,
        textid: "round",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 40
        },
        color: "#ffffff",
        height: Titanium.UI.SIZE,
        text: " 5",
        id: "__alloyId117"
    });
    $.__views.__alloyId115.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 10,
        right: 10,
        id: "__alloyId118"
    });
    $.__views.__alloyId98.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 175,
        zIndex: 1,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId120"
    });
    $.__views.__alloyId118.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.game.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;