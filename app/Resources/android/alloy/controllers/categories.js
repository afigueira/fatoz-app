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
    this.__controllerPath = "categories";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "__alloyId2"
    });
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "categories",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.titleControl = $.__views.__alloyId4;
    $.__views.__alloyId5 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId5"
    });
    $.__views.__alloyId2.add($.__views.__alloyId5);
    $.__views.containerTabs = Ti.UI.createView({
        backgroundColor: "white",
        height: 46,
        left: 0,
        top: 0,
        width: Titanium.UI.FILL,
        id: "containerTabs"
    });
    $.__views.__alloyId5.add($.__views.containerTabs);
    $.__views.tabs = Ti.UI.createView({
        top: 0,
        left: 15,
        height: 46,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.containerTabs.add($.__views.tabs);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId6"
    });
    $.__views.tabs.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "all",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId9"
    });
    $.__views.tabs.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "popular",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId12"
    });
    $.__views.tabs.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "text_new",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId15"
    });
    $.__views.tabs.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "suggested",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.containerSearch = Ti.UI.createView({
        backgroundColor: "#2e2e2e",
        height: 60,
        width: Titanium.UI.FILL,
        id: "containerSearch"
    });
    $.__views.__alloyId5.add($.__views.containerSearch);
    $.__views.search = Ti.UI.createTextField({
        borderRadius: 14,
        color: "#888888",
        tintColor: "#888888",
        backgroundColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        height: 30,
        width: 280,
        id: "search",
        hintText: "Pesquisar"
    });
    $.__views.containerSearch.add($.__views.search);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: 220,
        id: "__alloyId18"
    });
    $.__views.__alloyId5.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createImageView({
        left: 0,
        top: 0,
        zIndex: 0,
        width: "320",
        height: "220",
        image: "/images/background-categories-soccer.jpg",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 25,
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        image: "/images/icon-category.png",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 16,
            fontFamily: "ProximaNova-Regular"
        },
        left: 15,
        top: 3,
        textid: "category_title",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createImageView({
        right: 20,
        top: 40,
        image: "/images/arrow-down.png",
        id: "__alloyId23"
    });
    $.__views.__alloyId18.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 12,
            fontFamily: "ProximaNova-Regular"
        },
        top: 50,
        textid: "category_description",
        id: "__alloyId24"
    });
    $.__views.__alloyId18.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        backgroundImage: "/images/background-black-transparent.png",
        height: 130,
        top: 90,
        id: "__alloyId25"
    });
    $.__views.__alloyId18.add($.__views.__alloyId25);
    var __alloyId27 = [];
    $.__views.__alloyId28 = Ti.UI.createView({
        id: "__alloyId28"
    });
    __alloyId27.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        backgroundColor: "#08ad4d",
        top: 15,
        width: 240,
        height: 33,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        titleid: "new_match",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createButton({
        top: 58,
        left: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        backgroundImage: "/images/background-btn-more.png",
        height: 30,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        color: "#ffffff",
        titleid: "challenge",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createButton({
        top: 58,
        right: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        backgroundImage: "/images/background-btn-more.png",
        height: 30,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        color: "#ffffff",
        titleid: "ranking",
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        id: "__alloyId32"
    });
    __alloyId27.push($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        text: "Statistics",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId26 = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId27,
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        titleid: "categories",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.categories = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "categories"
    });
    $.__views.categories && $.addTopLevelView($.__views.categories);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.categories.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;