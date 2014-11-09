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
        showMe();
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
                        $.trophy.visible = true;
                        $.profileTitleB.text = e.users[0].first_name + " " + e.users[0].last_name;
                        Cloud.Photos.show({
                            photo_id: e.users[0].custom_fields.profile_image
                        }, function(e) {
                            if (e.success) {
                                var photo = e.photos[0];
                                $.imageProfileB.image = photo.urls.original;
                            }
                        });
                        Cloud.Photos.show({
                            photo_id: e.users[0].custom_fields.cover_image
                        }, function(e) {
                            if (e.success) {
                                var photo = e.photos[0];
                                $.profileB.backgroundImage = photo.urls.original;
                            }
                        });
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
    function showMe() {
        $.profileTitleA.text = Ti.App.Properties.getString("userName");
        Cloud.Users.showMe(function(e) {
            if (e.success) {
                var user = e.users[0];
                Cloud.Photos.show({
                    photo_id: user.custom_fields.profile_image
                }, function(e) {
                    if (e.success) {
                        var photo = e.photos[0];
                        $.imageProfileA.image = photo.urls.original;
                    }
                });
                Cloud.Photos.show({
                    photo_id: user.custom_fields.cover_image
                }, function(e) {
                    if (e.success) {
                        var photo = e.photos[0];
                        $.coverA.backgroundImage = photo.urls.original;
                    }
                });
            }
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
    $.__views.__alloyId167 = Ti.UI.createView({
        role: "centerWindow",
        id: "__alloyId167"
    });
    $.__views.trophy = Ti.UI.createImageView({
        visible: "false",
        id: "trophy",
        image: "/images/icon-queue-trophy.png",
        top: "195",
        zIndex: "100"
    });
    $.__views.__alloyId167.add($.__views.trophy);
    $.__views.__alloyId168 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    $.__views.coverA = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: 231,
        id: "coverA"
    });
    $.__views.__alloyId168.add($.__views.coverA);
    $.__views.__alloyId169 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId169"
    });
    $.__views.coverA.add($.__views.__alloyId169);
    $.__views.imageProfileA = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        id: "imageProfileA"
    });
    $.__views.__alloyId169.add($.__views.imageProfileA);
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
    $.__views.__alloyId169.add($.__views.profileTitleA);
    $.__views.searchPlayer = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        backgroundColor: "#219fd2",
        id: "searchPlayer"
    });
    $.__views.__alloyId168.add($.__views.searchPlayer);
    $.__views.__alloyId170 = Ti.UI.createImageView({
        top: 20,
        image: "/images/img-queue.png",
        id: "__alloyId170"
    });
    $.__views.searchPlayer.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createLabel({
        top: 10,
        color: "#ffffff",
        text: "Procurando oponente ideal",
        id: "__alloyId171"
    });
    $.__views.searchPlayer.add($.__views.__alloyId171);
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
    $.__views.__alloyId168.add($.__views.profileB);
    $.__views.__alloyId172 = Ti.UI.createView({
        height: "2",
        backgroundColor: "#ffffff",
        top: "0",
        id: "__alloyId172"
    });
    $.__views.profileB.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createView({
        width: 250,
        height: Titanium.UI.SIZE,
        id: "__alloyId173"
    });
    $.__views.profileB.add($.__views.__alloyId173);
    $.__views.imageProfileB = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        id: "imageProfileB"
    });
    $.__views.__alloyId173.add($.__views.imageProfileB);
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
    $.__views.__alloyId173.add($.__views.profileTitleB);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId167 ],
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