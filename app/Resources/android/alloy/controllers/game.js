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
    $.__views.__alloyId55 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "you",
        id: "__alloyId55"
    });
    $.__views.__alloyId53.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "69",
        backgroundColor: "lime",
        id: "__alloyId56"
    });
    $.__views.__alloyId52.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 125,
        layout: "vertical",
        id: "__alloyId57"
    });
    $.__views.__alloyId52.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "290",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "Tomas",
        id: "__alloyId59"
    });
    $.__views.__alloyId57.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        borderColor: "#0e0e0e",
        backgroundColor: "#0e0e0e",
        borderWidth: 1,
        id: "__alloyId60"
    });
    $.__views.__alloyId49.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
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
        id: "__alloyId61"
    });
    $.__views.__alloyId49.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId62"
    });
    $.__views.__alloyId49.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 4,
        right: 4,
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 175,
        zIndex: 1,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId67"
    });
    $.__views.__alloyId65.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        right: 5,
        id: "__alloyId69"
    });
    $.__views.__alloyId64.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        height: 150,
        borderRadius: 3,
        bottom: 30,
        width: 228,
        backgroundColor: "#ffffff",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createImageView({
        image: "/images/trophy.png",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        text: "No céu tem pão?",
        id: "__alloyId72"
    });
    $.__views.__alloyId70.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId73"
    });
    $.__views.__alloyId69.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createButton({
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
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createButton({
        width: 107,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        backgroundColor: "#e42e24",
        borderRadius: 3,
        bottom: 10,
        title: "Apple Computer inc.",
        id: "__alloyId76"
    });
    $.__views.__alloyId74.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId77"
    });
    $.__views.__alloyId73.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createButton({
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
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createButton({
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
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 4,
        right: 4,
        id: "__alloyId80"
    });
    $.__views.__alloyId64.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 175,
        zIndex: 1,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId82"
    });
    $.__views.__alloyId80.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.game.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;