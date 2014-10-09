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
    $.__views.__alloyId273 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        layout: "vertical",
        id: "__alloyId273"
    });
    $.__views.sidebar.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#c42e24",
        id: "__alloyId274"
    });
    $.__views.__alloyId273.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        top: 57,
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-home.png",
        id: "__alloyId276"
    });
    $.__views.__alloyId275.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_home",
        id: "__alloyId277"
    });
    $.__views.__alloyId275.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId278"
    });
    $.__views.__alloyId274.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-profile.png",
        id: "__alloyId279"
    });
    $.__views.__alloyId278.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_profile",
        id: "__alloyId280"
    });
    $.__views.__alloyId278.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId281"
    });
    $.__views.__alloyId274.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-categories.png",
        id: "__alloyId282"
    });
    $.__views.__alloyId281.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_categories",
        id: "__alloyId283"
    });
    $.__views.__alloyId281.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId284"
    });
    $.__views.__alloyId274.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-challenges.png",
        id: "__alloyId285"
    });
    $.__views.__alloyId284.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_challenges",
        id: "__alloyId286"
    });
    $.__views.__alloyId284.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId287"
    });
    $.__views.__alloyId274.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-statistics.png",
        id: "__alloyId288"
    });
    $.__views.__alloyId287.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_statistics",
        id: "__alloyId289"
    });
    $.__views.__alloyId287.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId290"
    });
    $.__views.__alloyId274.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-achievements.png",
        id: "__alloyId291"
    });
    $.__views.__alloyId290.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_achievements",
        id: "__alloyId292"
    });
    $.__views.__alloyId290.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "__alloyId293"
    });
    $.__views.__alloyId274.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-settings.png",
        id: "__alloyId294"
    });
    $.__views.__alloyId293.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_settings",
        id: "__alloyId295"
    });
    $.__views.__alloyId293.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 57,
        top: 33,
        id: "__alloyId296"
    });
    $.__views.__alloyId274.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-exit.png",
        id: "__alloyId297"
    });
    $.__views.__alloyId296.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_exit",
        id: "__alloyId298"
    });
    $.__views.__alloyId296.add($.__views.__alloyId298);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.sidebar.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;