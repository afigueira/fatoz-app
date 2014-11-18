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
    this.__controllerPath = "advertisement";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.advertisement = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "advertisement"
    });
    $.__views.advertisement && $.addTopLevelView($.__views.advertisement);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        backgroundImage: "/images/background-black-transparent.png",
        layout: "absolute",
        id: "__alloyId0"
    });
    $.__views.advertisement.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        layout: "vertical",
        width: Titanium.UI.FILL,
        backgroundColor: "#fafafa",
        borderRadius: 5,
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.close = Ti.UI.createButton({
        top: "3",
        right: "3",
        bottom: 15,
        width: "50",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        height: 30,
        borderRadius: "5",
        backgroundGradient: {
            type: "linear",
            colors: [ "#da3c30", "#cd3023" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: true
        },
        color: "#ffffff",
        id: "close",
        title: "X"
    });
    $.__views.__alloyId1.add($.__views.close);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.advertisement.open();
    $.close.addEventListener("click", function() {
        Alloy.createController("gameResult", args);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;