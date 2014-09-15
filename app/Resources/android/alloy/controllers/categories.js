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
        backgroundColor: "rgba(0, 0, 0, 0.7)",
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
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        top: 58,
        left: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        titleid: "challenge",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        borderColor: "white",
        borderWidth: 1,
        top: 58,
        right: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        backgroundColor: "rgba(255, 255, 255, 0.3)",
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
    $.__views.__alloyId34 = Ti.UI.createView({
        height: 220,
        id: "__alloyId34"
    });
    $.__views.__alloyId5.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createImageView({
        left: 0,
        top: 0,
        zIndex: 0,
        width: "320",
        height: "220",
        image: "/images/background-categories-soccer.jpg",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 25,
        id: "__alloyId36"
    });
    $.__views.__alloyId34.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        image: "/images/icon-category.png",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 16,
            fontFamily: "ProximaNova-Regular"
        },
        left: 15,
        top: 3,
        textid: "category_title",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createImageView({
        right: 20,
        top: 40,
        image: "/images/arrow-down.png",
        id: "__alloyId39"
    });
    $.__views.__alloyId34.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 12,
            fontFamily: "ProximaNova-Regular"
        },
        top: 50,
        textid: "category_description",
        id: "__alloyId40"
    });
    $.__views.__alloyId34.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        height: 130,
        top: 90,
        id: "__alloyId41"
    });
    $.__views.__alloyId34.add($.__views.__alloyId41);
    var __alloyId43 = [];
    $.__views.__alloyId44 = Ti.UI.createView({
        id: "__alloyId44"
    });
    __alloyId43.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createButton({
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
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        top: 58,
        left: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        titleid: "challenge",
        id: "__alloyId46"
    });
    $.__views.__alloyId44.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        borderColor: "white",
        borderWidth: 1,
        top: 58,
        right: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        titleid: "ranking",
        id: "__alloyId47"
    });
    $.__views.__alloyId44.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        id: "__alloyId48"
    });
    __alloyId43.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        text: "Statistics",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId42 = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId43,
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: 220,
        id: "__alloyId50"
    });
    $.__views.__alloyId5.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createImageView({
        left: 0,
        top: 0,
        zIndex: 0,
        width: "320",
        height: "220",
        image: "/images/background-categories-soccer.jpg",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 25,
        id: "__alloyId52"
    });
    $.__views.__alloyId50.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createImageView({
        image: "/images/icon-category.png",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 16,
            fontFamily: "ProximaNova-Regular"
        },
        left: 15,
        top: 3,
        textid: "category_title",
        id: "__alloyId54"
    });
    $.__views.__alloyId52.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createImageView({
        right: 20,
        top: 40,
        image: "/images/arrow-down.png",
        id: "__alloyId55"
    });
    $.__views.__alloyId50.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 12,
            fontFamily: "ProximaNova-Regular"
        },
        top: 50,
        textid: "category_description",
        id: "__alloyId56"
    });
    $.__views.__alloyId50.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        height: 130,
        top: 90,
        id: "__alloyId57"
    });
    $.__views.__alloyId50.add($.__views.__alloyId57);
    var __alloyId59 = [];
    $.__views.__alloyId60 = Ti.UI.createView({
        id: "__alloyId60"
    });
    __alloyId59.push($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createButton({
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
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        top: 58,
        left: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        titleid: "challenge",
        id: "__alloyId62"
    });
    $.__views.__alloyId60.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        borderColor: "white",
        borderWidth: 1,
        top: 58,
        right: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        titleid: "ranking",
        id: "__alloyId63"
    });
    $.__views.__alloyId60.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        id: "__alloyId64"
    });
    __alloyId59.push($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        text: "Statistics",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId58 = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId59,
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId66 = Ti.UI.createView({
        height: 220,
        id: "__alloyId66"
    });
    $.__views.__alloyId5.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createImageView({
        left: 0,
        top: 0,
        zIndex: 0,
        width: "320",
        height: "220",
        image: "/images/background-categories-soccer.jpg",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 25,
        id: "__alloyId68"
    });
    $.__views.__alloyId66.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createImageView({
        image: "/images/icon-category.png",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 16,
            fontFamily: "ProximaNova-Regular"
        },
        left: 15,
        top: 3,
        textid: "category_title",
        id: "__alloyId70"
    });
    $.__views.__alloyId68.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createImageView({
        right: 20,
        top: 40,
        image: "/images/arrow-down.png",
        id: "__alloyId71"
    });
    $.__views.__alloyId66.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 12,
            fontFamily: "ProximaNova-Regular"
        },
        top: 50,
        textid: "category_description",
        id: "__alloyId72"
    });
    $.__views.__alloyId66.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        height: 130,
        top: 90,
        id: "__alloyId73"
    });
    $.__views.__alloyId66.add($.__views.__alloyId73);
    var __alloyId75 = [];
    $.__views.__alloyId76 = Ti.UI.createView({
        id: "__alloyId76"
    });
    __alloyId75.push($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createButton({
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
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        top: 58,
        left: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        titleid: "challenge",
        id: "__alloyId78"
    });
    $.__views.__alloyId76.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        borderColor: "white",
        borderWidth: 1,
        top: 58,
        right: 40,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        titleid: "ranking",
        id: "__alloyId79"
    });
    $.__views.__alloyId76.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        id: "__alloyId80"
    });
    __alloyId75.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        text: "Statistics",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId74 = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId75,
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
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