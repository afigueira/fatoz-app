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
    this.__controllerPath = "sidebar";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.sidebar = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "sidebar"
    });
    $.__views.sidebar && $.addTopLevelView($.__views.sidebar);
    $.__views.__alloyId251 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        layout: "vertical",
        id: "__alloyId251"
    });
    $.__views.sidebar.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#c42e24",
        id: "__alloyId252"
    });
    $.__views.__alloyId251.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        top: 57,
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-home.png",
        id: "__alloyId254"
    });
    $.__views.__alloyId253.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_home",
        id: "__alloyId255"
    });
    $.__views.__alloyId253.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId256"
    });
    $.__views.__alloyId252.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-profile.png",
        id: "__alloyId257"
    });
    $.__views.__alloyId256.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_profile",
        id: "__alloyId258"
    });
    $.__views.__alloyId256.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId259"
    });
    $.__views.__alloyId252.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-categories.png",
        id: "__alloyId260"
    });
    $.__views.__alloyId259.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_categories",
        id: "__alloyId261"
    });
    $.__views.__alloyId259.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId262"
    });
    $.__views.__alloyId252.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-challenges.png",
        id: "__alloyId263"
    });
    $.__views.__alloyId262.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_challenges",
        id: "__alloyId264"
    });
    $.__views.__alloyId262.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId265"
    });
    $.__views.__alloyId252.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-statistics.png",
        id: "__alloyId266"
    });
    $.__views.__alloyId265.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_statistics",
        id: "__alloyId267"
    });
    $.__views.__alloyId265.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId268"
    });
    $.__views.__alloyId252.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-achievements.png",
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_achievements",
        id: "__alloyId270"
    });
    $.__views.__alloyId268.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId271"
    });
    $.__views.__alloyId252.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-settings.png",
        id: "__alloyId272"
    });
    $.__views.__alloyId271.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_settings",
        id: "__alloyId273"
    });
    $.__views.__alloyId271.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 57,
        top: 33,
        id: "__alloyId274"
    });
    $.__views.__alloyId252.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-exit.png",
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_exit",
        id: "__alloyId276"
    });
    $.__views.__alloyId274.add($.__views.__alloyId276);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sidebar.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;