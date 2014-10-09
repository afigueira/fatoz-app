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
    var __alloyId127 = [];
    $.__views.__alloyId129 = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "__alloyId129"
    });
    $.__views.__alloyId131 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "home",
        id: "__alloyId131"
    });
    $.__views.__alloyId129.titleControl = $.__views.__alloyId131;
    $.__views.__alloyId132 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId132"
    });
    $.__views.__alloyId129.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        layout: "absolute",
        width: "280",
        height: Titanium.UI.SIZE,
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.containerLabelHighlight = Ti.UI.createView({
        top: 30,
        layout: "horizontal",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "containerLabelHighlight"
    });
    $.__views.__alloyId135.add($.__views.containerLabelHighlight);
    $.__views.__alloyId136 = Ti.UI.createImageView({
        image: "/images/icon-highlights.png",
        id: "__alloyId136"
    });
    $.__views.containerLabelHighlight.add($.__views.__alloyId136);
    $.__views.labelHighlight = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 0,
        textid: "highlights",
        id: "labelHighlight"
    });
    $.__views.containerLabelHighlight.add($.__views.labelHighlight);
    $.__views.labelSeeCategories = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 15,
        width: Titanium.UI.FILL,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "see_categories",
        id: "labelSeeCategories"
    });
    $.__views.__alloyId135.add($.__views.labelSeeCategories);
    $.__views.arrowSeeCategories = Ti.UI.createImageView({
        top: 30,
        right: 0,
        layout: "absolute",
        image: "/images/arrow-see-more-categories-home.png",
        id: "arrowSeeCategories"
    });
    $.__views.__alloyId134.add($.__views.arrowSeeCategories);
    $.__views.categories = Ti.UI.createView({
        borderRadius: 4,
        top: 20,
        width: 280,
        height: 390,
        backgroundColor: "white",
        id: "categories"
    });
    $.__views.__alloyId133.add($.__views.categories);
    $.__views.tabs = Ti.UI.createView({
        top: 0,
        left: 10,
        height: 46,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.categories.add($.__views.tabs);
    $.__views.__alloyId137 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId137"
    });
    $.__views.tabs.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "popular",
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        id: "__alloyId139"
    });
    $.__views.__alloyId137.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId140"
    });
    $.__views.tabs.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "text_new",
        id: "__alloyId141"
    });
    $.__views.__alloyId140.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId142"
    });
    $.__views.__alloyId140.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId143"
    });
    $.__views.tabs.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "recent",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId145"
    });
    $.__views.__alloyId143.add($.__views.__alloyId145);
    var __alloyId146 = [];
    $.__views.soccer = Ti.UI.createView({
        backgroundImage: "/images/background-home-categories-soccer.jpg",
        id: "soccer"
    });
    __alloyId146.push($.__views.soccer);
    $.__views.__alloyId147 = Ti.UI.createImageView({
        top: 64,
        image: "/images/icon-home-category-football.png",
        id: "__alloyId147"
    });
    $.__views.soccer.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        top: 108,
        textid: "sport",
        id: "__alloyId148"
    });
    $.__views.soccer.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 139,
        textid: "sport_description",
        id: "__alloyId149"
    });
    $.__views.soccer.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createButton({
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
        id: "__alloyId150"
    });
    $.__views.soccer.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createButton({
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
        top: 255,
        left: 25,
        width: 110,
        titleid: "challenge",
        id: "__alloyId151"
    });
    $.__views.soccer.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createButton({
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
        top: 255,
        right: 25,
        width: 110,
        titleid: "ranking",
        id: "__alloyId152"
    });
    $.__views.soccer.add($.__views.__alloyId152);
    $.__views.popular = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 46,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId146,
        id: "popular"
    });
    $.__views.categories.add($.__views.popular);
    $.__views.__alloyId153 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 20,
        top: 485,
        id: "__alloyId153"
    });
    $.__views.__alloyId133.add($.__views.__alloyId153);
    $.__views.__alloyId128 = Ti.UI.createTab({
        window: $.__views.__alloyId129,
        titleid: "home",
        id: "__alloyId128"
    });
    __alloyId127.push($.__views.__alloyId128);
    $.__views.home = Ti.UI.createTabGroup({
        tabs: __alloyId127,
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