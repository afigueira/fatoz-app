function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function mountMatch() {
        Alloy.createController("game", {
            matchId: matchId
        });
    }
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
    $.__views.__alloyId257 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId257"
    });
    $.__views.roomQueue.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: 231,
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId258"
    });
    $.__views.__alloyId257.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId260"
    });
    $.__views.__alloyId259.add($.__views.__alloyId260);
    $.__views.profileTitleA = Ti.UI.createLabel({
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
        id: "profileTitleA"
    });
    $.__views.__alloyId259.add($.__views.profileTitleA);
    $.__views.searchPlayer = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "searchPlayer"
    });
    $.__views.__alloyId257.add($.__views.searchPlayer);
    $.__views.__alloyId261 = Ti.UI.createLabel({
        top: 50,
        text: "Procurando jogador...",
        id: "__alloyId261"
    });
    $.__views.searchPlayer.add($.__views.__alloyId261);
    $.__views.cancelMatch = Ti.UI.createButton({
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
        id: "cancelMatch",
        title: "Cancelar"
    });
    $.__views.searchPlayer.add($.__views.cancelMatch);
    $.__views.profileB = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: 231,
        id: "profileB",
        visible: "false",
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg"
    });
    $.__views.__alloyId257.add($.__views.profileB);
    $.__views.__alloyId262 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId262"
    });
    $.__views.profileB.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId263"
    });
    $.__views.__alloyId262.add($.__views.__alloyId263);
    $.__views.profileTitleB = Ti.UI.createLabel({
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
        id: "profileTitleB",
        text: "Raul Claudino"
    });
    $.__views.__alloyId262.add($.__views.profileTitleB);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    categoryId = args.categoryId || "";
    var matchId;
    var mountReceived = false;
    var fighterReceived = false;
    $.profileTitleA.text = Ti.App.Properties.getString("userName");
    if (categoryId) {
        Titanium.App.fireEvent("websocket.dispatchEvent", {
            event: "joinRoom",
            roomId: categoryId
        });
        Titanium.App.addEventListener("websocket.creatingMatch", function(e) {
            Cloud.Users.query({
                page: 1,
                per_page: 1,
                where: {
                    id: e.fighterId
                }
            }, function(e) {
                if (e.success) {
                    $.searchPlayer.visible = false;
                    $.profileB.visible = true;
                    $.profileTitleB.text = e.users[0].first_name + " " + e.users[0].last_name;
                    fighterReceived = true;
                    mountReceived && mountMatch();
                } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
            });
        });
        Titanium.App.addEventListener("websocket.mountMatch", function(e) {
            mountReceived = true;
            matchId = e.matchId;
            fighterReceived && mountMatch();
        });
    }
    $.cancelMatch.addEventListener("click", function() {
        Titanium.App.fireEvent("websocket.dispatchEvent", {
            event: "leaveRoom",
            roomId: categoryId
        });
        Alloy.createController("home");
    });
    $.roomQueue.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;