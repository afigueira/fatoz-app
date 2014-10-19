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
    this.__controllerPath = "roomQueue";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.roomQueue = Ti.UI.createWindow({
        id: "roomQueue"
    });
    $.__views.roomQueue && $.addTopLevelView($.__views.roomQueue);
    $.__views.__alloyId258 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId258"
    });
    $.__views.roomQueue.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: 231,
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId260"
    });
    $.__views.__alloyId259.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId261"
    });
    $.__views.__alloyId260.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        height: Titanium.UI.SIZE,
        left: 74,
        top: 10,
        text: "Raul Claudino",
        id: "__alloyId262"
    });
    $.__views.__alloyId260.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14
        },
        height: Titanium.UI.SIZE,
        left: 74,
        top: 35,
        text: "Rio de Janeiro, RJ",
        id: "__alloyId263"
    });
    $.__views.__alloyId260.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId264"
    });
    $.__views.__alloyId258.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        top: 50,
        text: "Procurando jogador...",
        id: "__alloyId265"
    });
    $.__views.__alloyId264.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createButton({
        height: 30,
        borderRadius: 15,
        backgroundGradient: {
            type: "linear",
            colors: [ "#da3c30", "#cd3023" ],
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
        bottom: 50,
        top: 20,
        title: "Cancelar",
        id: "__alloyId266"
    });
    $.__views.__alloyId264.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: 231,
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId267"
    });
    $.__views.__alloyId258.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId268"
    });
    $.__views.__alloyId267.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        height: Titanium.UI.SIZE,
        left: 74,
        top: 10,
        text: "Raul Claudino",
        id: "__alloyId270"
    });
    $.__views.__alloyId268.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14
        },
        height: Titanium.UI.SIZE,
        left: 74,
        top: 35,
        text: "Rio de Janeiro, RJ",
        id: "__alloyId271"
    });
    $.__views.__alloyId268.add($.__views.__alloyId271);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.roomQueue.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;