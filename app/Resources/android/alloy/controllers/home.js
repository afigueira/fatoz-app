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
    this.__controllerPath = "home";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId119 = [];
    $.__views.__alloyId121 = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "__alloyId121"
    });
    $.__views.__alloyId123 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "home",
        id: "__alloyId123"
    });
    $.__views.__alloyId121.titleControl = $.__views.__alloyId123;
    $.__views.__alloyId124 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId124"
    });
    $.__views.__alloyId121.add($.__views.__alloyId124);
    $.__views.labelHighlight = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: 30,
        textid: "highlights",
        id: "labelHighlight"
    });
    $.__views.__alloyId124.add($.__views.labelHighlight);
    $.__views.labelSeeCategories = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 60,
        textid: "see_categories",
        id: "labelSeeCategories"
    });
    $.__views.__alloyId124.add($.__views.labelSeeCategories);
    $.__views.arrowSeeCategories = Ti.UI.createImageView({
        top: 30,
        right: 30,
        image: "/images/arrow-see-more-categories-home.png",
        id: "arrowSeeCategories"
    });
    $.__views.__alloyId124.add($.__views.arrowSeeCategories);
    $.__views.categories = Ti.UI.createView({
        borderRadius: 4,
        top: 95,
        width: 280,
        height: 390,
        backgroundColor: "white",
        id: "categories"
    });
    $.__views.__alloyId124.add($.__views.categories);
    $.__views.tabs = Ti.UI.createView({
        top: 0,
        left: 10,
        height: 46,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.categories.add($.__views.tabs);
    $.__views.__alloyId125 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId125"
    });
    $.__views.tabs.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "popular",
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        id: "__alloyId127"
    });
    $.__views.__alloyId125.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId128"
    });
    $.__views.tabs.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "text_new",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId130"
    });
    $.__views.__alloyId128.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId131"
    });
    $.__views.tabs.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "recent",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    var __alloyId134 = [];
    $.__views.soccer = Ti.UI.createView({
        backgroundImage: "/images/background-home-categories-soccer.jpg",
        id: "soccer"
    });
    __alloyId134.push($.__views.soccer);
    $.__views.__alloyId135 = Ti.UI.createImageView({
        top: 64,
        image: "/images/icon-home-category-football.png",
        id: "__alloyId135"
    });
    $.__views.soccer.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        top: 108,
        textid: "sport",
        id: "__alloyId136"
    });
    $.__views.soccer.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 139,
        textid: "sport_description",
        id: "__alloyId137"
    });
    $.__views.soccer.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        backgroundColor: "#08ad4d",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 213,
        width: 230,
        height: 33,
        titleid: "new_match",
        id: "__alloyId138"
    });
    $.__views.soccer.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 255,
        left: 25,
        width: 110,
        titleid: "challenge",
        id: "__alloyId139"
    });
    $.__views.soccer.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 255,
        right: 25,
        width: 110,
        titleid: "ranking",
        id: "__alloyId140"
    });
    $.__views.soccer.add($.__views.__alloyId140);
    $.__views.popular = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 46,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId134,
        id: "popular"
    });
    $.__views.categories.add($.__views.popular);
    $.__views.__alloyId141 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 20,
        top: 485,
        id: "__alloyId141"
    });
    $.__views.__alloyId124.add($.__views.__alloyId141);
    $.__views.__alloyId120 = Ti.UI.createTab({
        window: $.__views.__alloyId121,
        titleid: "home",
        id: "__alloyId120"
    });
    __alloyId119.push($.__views.__alloyId120);
    $.__views.home = Ti.UI.createTabGroup({
        tabs: __alloyId119,
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;