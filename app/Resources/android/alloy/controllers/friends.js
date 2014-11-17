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
    this.__controllerPath = "friends";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.__alloyId5 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        top: Alloy.Globals.marginTopWindow,
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.window.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#f0f0f0",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.containerSearch = Ti.UI.createView({
        backgroundColor: "#888888",
        height: 60,
        width: Titanium.UI.FILL,
        id: "containerSearch"
    });
    $.__views.__alloyId6.add($.__views.containerSearch);
    $.__views.search = Ti.UI.createTextField({
        borderRadius: 14,
        color: "#888888",
        tintColor: "#888888",
        backgroundColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        height: 30,
        width: Titanium.UI.FILL,
        left: 10,
        right: 10,
        id: "search",
        hintText: "Pesquisar"
    });
    $.__views.containerSearch.add($.__views.search);
    var __alloyId8 = [];
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId9"
    });
    __alloyId8.push($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createImageView({
        left: 10,
        width: 45,
        height: 45,
        borderRadius: 23,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 20
        },
        left: 65,
        color: "#383838",
        text: "Tomas Lau",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createButton({
<<<<<<< HEAD
=======
        right: 15,
>>>>>>> 1704dda9bcaccf085e32f1407e8a863fd3a82f9e
        height: 30,
        borderRadius: 15,
        backgroundGradient: {
            type: "linear",
            colors: [ "#e67235", "#d96528" ],
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
        right: 15,
        title: "ACEITAR",
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        height: 1,
        bottom: 0,
        id: "__alloyId13"
    });
    $.__views.__alloyId9.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId14"
    });
    __alloyId8.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createImageView({
        left: 10,
        width: 45,
        height: 45,
        borderRadius: 23,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 20
        },
        left: 65,
        color: "#383838",
        text: "Tomas Lau",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createButton({
<<<<<<< HEAD
=======
        right: 15,
>>>>>>> 1704dda9bcaccf085e32f1407e8a863fd3a82f9e
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
        right: 15,
        title: "JOGAR",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        height: 1,
        bottom: 0,
        id: "__alloyId18"
    });
    $.__views.__alloyId14.add($.__views.__alloyId18);
    $.__views.__alloyId7 = Ti.UI.createTableView({
        data: __alloyId8,
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.friends.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;