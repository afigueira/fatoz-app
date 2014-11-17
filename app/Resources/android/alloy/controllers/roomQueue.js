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
        banner();
    }
    function banner() {
        Alloy.Globals.showBanner($.window, "roomQueue", "bottom");
    }
    function socketCreatingMatch(e) {
        Alloy.Globals.Cloud.Users.query({
            page: 1,
            per_page: 1,
            where: {
                id: e.fighterId
            }
        }, function(e) {
            if (e.success) {
                $.addClass($.searchPlayer, "visibleFalse");
                $.profileB.visible = true;
                $.trophy.visible = true;
                $.profileTitleB.text = e.users[0].first_name + " " + e.users[0].last_name;
                Alloy.Globals.loadPhoto($.imageProfileB, "image", e.users[0].custom_fields.profile_image);
                Alloy.Globals.loadPhoto($.profileB, "backgroundImage", e.users[0].custom_fields.cover_image);
                fighterReceived = true;
                mountReceived && mountMatch();
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function socketMountMatch(e) {
        mountReceived = true;
        matchId = e.matchId;
        fighterReceived && mountMatch();
    }
    function joinRoom() {
        showMe();
        categoryId && Titanium.App.fireEvent("websocket.dispatchEvent", {
            event: "joinRoom",
            roomId: categoryId
        });
    }
    function mountMatch() {
        $.window.close();
        Alloy.createController("game", {
            matchId: matchId
        });
    }
    function showMe() {
        $.profileTitleA.text = Ti.App.Properties.getString("userName");
        Alloy.Globals.Cloud.Users.showMe(function(e) {
            if (e.success) {
                var user = e.users[0];
                Alloy.Globals.loadPhoto($.imageProfileA, "image", user.custom_fields.profile_image);
                Alloy.Globals.loadPhoto($.coverA, "backgroundImage", user.custom_fields.cover_image);
            }
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
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.__alloyId77 = Ti.UI.createScrollView({
        id: "__alloyId77"
    });
    $.__views.window.add($.__views.__alloyId77);
    $.__views.trophy = Ti.UI.createImageView({
        visible: "false",
        id: "trophy",
        image: "/images/icon-queue-trophy.png",
        top: "195",
        zIndex: "100"
    });
    $.__views.__alloyId77.add($.__views.trophy);
    $.__views.__alloyId78 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.coverA = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: 231,
        id: "coverA"
    });
    $.__views.__alloyId78.add($.__views.coverA);
    $.__views.__alloyId79 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId79"
    });
    $.__views.coverA.add($.__views.__alloyId79);
    $.__views.imageProfileA = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        left: 0,
        id: "imageProfileA"
    });
    $.__views.__alloyId79.add($.__views.imageProfileA);
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
    $.__views.__alloyId79.add($.__views.profileTitleA);
    $.__views.searchPlayer = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#219fd2",
        id: "searchPlayer"
    });
    $.__views.__alloyId78.add($.__views.searchPlayer);
    $.__views.__alloyId80 = Ti.UI.createImageView({
        top: 20,
        image: "/images/img-queue.png",
        id: "__alloyId80"
    });
    $.__views.searchPlayer.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        top: 10,
        color: "#ffffff",
        text: "Procurando oponente ideal",
        id: "__alloyId81"
    });
    $.__views.searchPlayer.add($.__views.__alloyId81);
    $.__views.cancelMatch = Ti.UI.createButton({
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
        bottom: 50,
        top: 20,
        width: 135,
        id: "cancelMatch",
        title: "Cancelar"
    });
    $.__views.searchPlayer.add($.__views.cancelMatch);
    $.__views.profileB = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: 231,
        id: "profileB",
        visible: "false"
    });
    $.__views.__alloyId78.add($.__views.profileB);
    $.__views.__alloyId82 = Ti.UI.createView({
        height: "2",
        backgroundColor: "#ffffff",
        top: "0",
        id: "__alloyId82"
    });
    $.__views.profileB.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId83"
    });
    $.__views.profileB.add($.__views.__alloyId83);
    $.__views.imageProfileB = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        left: 0,
        id: "imageProfileB"
    });
    $.__views.__alloyId83.add($.__views.imageProfileB);
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
    $.__views.__alloyId83.add($.__views.profileTitleB);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    categoryId = args.categoryId || "";
    var matchId;
    var mountReceived = false;
    var fighterReceived = false;
    $.cancelMatch.addEventListener("click", function() {
        Titanium.App.fireEvent("websocket.dispatchEvent", {
            event: "leaveRoom",
            roomId: categoryId
        });
        $.window.close();
        Alloy.createController("home");
    });
    Titanium.App.addEventListener("websocket.creatingMatch", socketCreatingMatch);
    Titanium.App.addEventListener("websocket.mountMatch", socketMountMatch);
    $.window.addEventListener("close", function() {
        Titanium.App.removeEventListener("websocket.creatingMatch", socketCreatingMatch);
        Titanium.App.removeEventListener("websocket.mountMatch", socketMountMatch);
        $.destroy();
        $.off();
    });
    init();
    $.window.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;