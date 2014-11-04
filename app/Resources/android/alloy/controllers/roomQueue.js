function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init() {
        joinRoom();
    }
    function joinRoom() {
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
                        $.addClass($.searchPlayer, "visibleFalse");
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
    }
    function mountMatch() {
        Alloy.createController("game", {
            matchId: matchId
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "roomQueue";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.sidebar = require("xp.ui").createWindow({
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.__alloyId195 = Ti.UI.createView({
        role: "centerWindow",
        id: "__alloyId195"
    });
    $.__views.__alloyId196 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId196"
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: 231,
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId198"
    });
    $.__views.__alloyId197.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
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
        top: 20,
        id: "profileTitleA"
    });
    $.__views.__alloyId198.add($.__views.profileTitleA);
    $.__views.searchPlayer = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "searchPlayer"
    });
    $.__views.__alloyId196.add($.__views.searchPlayer);
    $.__views.__alloyId200 = Ti.UI.createLabel({
        top: 50,
        text: "Procurando jogador...",
        id: "__alloyId200"
    });
    $.__views.searchPlayer.add($.__views.__alloyId200);
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
    $.__views.__alloyId196.add($.__views.profileB);
    $.__views.__alloyId201 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId201"
    });
    $.__views.profileB.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
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
        top: 20,
        id: "profileTitleB",
        text: "Raul Claudino"
    });
    $.__views.__alloyId201.add($.__views.profileTitleB);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId195 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    categoryId = args.categoryId || "";
    var matchId;
    var mountReceived = false;
    var fighterReceived = false;
    require("alloy").Globals.drawer($.sidebar, $.drawer, "Procurando...", init());
    $.cancelMatch.addEventListener("click", function() {
        Titanium.App.fireEvent("websocket.dispatchEvent", {
            event: "leaveRoom",
            roomId: categoryId
        });
        Alloy.createController("home");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;