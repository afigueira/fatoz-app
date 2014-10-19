function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getUserInfo(userId, side) {
        Cloud.Users.show({
            user_id: userId
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                var name = user.id == Titanium.App.Properties.getString("userId") ? "Você" : user.first_name;
                "a" == side ? $.nameScoreA.text = name : $.nameScoreB.text = name;
                userReady++;
                2 == userReady && Titanium.App.fireEvent("websocket.dispatchEvent", {
                    event: "userReady",
                    matchId: args.matchId
                });
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "game";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.game = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "game"
    });
    $.__views.game && $.addTopLevelView($.__views.game);
    $.__views.__alloyId48 = Ti.UI.createScrollView({
        backgroundColor: "#383738",
        layout: "vertical",
        id: "__alloyId48"
    });
    $.__views.game.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: 70,
        width: Titanium.UI.FILL,
        backgroundColor: "#222222",
        layout: "horizontal",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 125,
        layout: "vertical",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "290",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.nameScoreA = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "nameScoreA"
    });
    $.__views.__alloyId53.add($.__views.nameScoreA);
    $.__views.__alloyId55 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "69",
        backgroundColor: "lime",
        id: "__alloyId55"
    });
    $.__views.__alloyId52.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 125,
        layout: "vertical",
        id: "__alloyId56"
    });
    $.__views.__alloyId52.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        text: "290",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.nameScoreB = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ff7026",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "nameScoreB"
    });
    $.__views.__alloyId56.add($.__views.nameScoreB);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        borderColor: "#0e0e0e",
        backgroundColor: "#0e0e0e",
        borderWidth: 1,
        id: "__alloyId58"
    });
    $.__views.__alloyId49.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        top: 42,
        bottom: 42,
        color: "#ffffff",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        text: "A Qual das seguintes marcas pertence a logo abaixo?",
        id: "__alloyId59"
    });
    $.__views.__alloyId49.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId60"
    });
    $.__views.__alloyId49.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 4,
        right: 4,
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 175,
        zIndex: 1,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId65"
    });
    $.__views.__alloyId63.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        left: 5,
        right: 5,
        id: "__alloyId67"
    });
    $.__views.__alloyId62.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createButton({
        width: 228,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        title: "Apple",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createButton({
        width: 107,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        title: "Apple Computer inc.",
        id: "__alloyId71"
    });
    $.__views.__alloyId69.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createButton({
        width: 228,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        title: "Apple Computer inc.",
        id: "__alloyId72"
    });
    $.__views.__alloyId69.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createButton({
        width: 228,
        height: 70,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#383838",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        bottom: 10,
        title: "Apple Computer inc.",
        id: "__alloyId73"
    });
    $.__views.__alloyId69.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        top: 0,
        left: 4,
        right: 4,
        id: "__alloyId74"
    });
    $.__views.__alloyId62.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createImageView({
        borderWidth: 2,
        borderColor: "#ffffff",
        width: 29,
        height: 29,
        borderRadius: 15,
        bottom: 175,
        zIndex: 1,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        height: 325,
        width: 21,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1e1e1e",
        backgroundColor: "#1e1e1e",
        id: "__alloyId76"
    });
    $.__views.__alloyId74.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        height: 200,
        width: Titanium.UI.FILL,
        backgroundColor: "#41b6da",
        bottom: 0,
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var userReady = 0;
    Cloud.Objects.query({
        classname: "matches",
        where: {
            id: args.matchId
        }
    }, function(e) {
        if (e.success) {
            var match = e.matches[0];
            var userA = match.user_a;
            var userB = match.user_b;
            getUserInfo(userA, "a");
            getUserInfo(userB, "b");
        } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
    $.game.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;