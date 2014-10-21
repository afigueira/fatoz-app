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
    this.__controllerPath = "sidebar";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.sidebar = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#c42e24",
        id: "sidebar"
    });
    $.__views.sidebar && $.addTopLevelView($.__views.sidebar);
    $.__views.home = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        top: 57,
        id: "home"
    });
    $.__views.sidebar.add($.__views.home);
    $.__views.__alloyId264 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-home.png",
        id: "__alloyId264"
    });
    $.__views.home.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_home",
        id: "__alloyId265"
    });
    $.__views.home.add($.__views.__alloyId265);
    $.__views.profile = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "profile"
    });
    $.__views.sidebar.add($.__views.profile);
    $.__views.__alloyId266 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-profile.png",
        id: "__alloyId266"
    });
    $.__views.profile.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_profile",
        id: "__alloyId267"
    });
    $.__views.profile.add($.__views.__alloyId267);
    $.__views.categories = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "categories"
    });
    $.__views.sidebar.add($.__views.categories);
    $.__views.__alloyId268 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-categories.png",
        id: "__alloyId268"
    });
    $.__views.categories.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_categories",
        id: "__alloyId269"
    });
    $.__views.categories.add($.__views.__alloyId269);
    $.__views.challenges = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "challenges"
    });
    $.__views.sidebar.add($.__views.challenges);
    $.__views.__alloyId270 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-challenges.png",
        id: "__alloyId270"
    });
    $.__views.challenges.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_challenges",
        id: "__alloyId271"
    });
    $.__views.challenges.add($.__views.__alloyId271);
    $.__views.statistics = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "statistics"
    });
    $.__views.sidebar.add($.__views.statistics);
    $.__views.__alloyId272 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-statistics.png",
        id: "__alloyId272"
    });
    $.__views.statistics.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_statistics",
        id: "__alloyId273"
    });
    $.__views.statistics.add($.__views.__alloyId273);
    $.__views.achievements = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "achievements"
    });
    $.__views.sidebar.add($.__views.achievements);
    $.__views.__alloyId274 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-achievements.png",
        id: "__alloyId274"
    });
    $.__views.achievements.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_achievements",
        id: "__alloyId275"
    });
    $.__views.achievements.add($.__views.__alloyId275);
    $.__views.settings = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "settings"
    });
    $.__views.sidebar.add($.__views.settings);
    $.__views.__alloyId276 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-settings.png",
        id: "__alloyId276"
    });
    $.__views.settings.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_settings",
        id: "__alloyId277"
    });
    $.__views.settings.add($.__views.__alloyId277);
    $.__views.exit = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 57,
        top: 33,
        id: "exit"
    });
    $.__views.sidebar.add($.__views.exit);
    $.__views.__alloyId278 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-exit.png",
        id: "__alloyId278"
    });
    $.__views.exit.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_exit",
        id: "__alloyId279"
    });
    $.__views.exit.add($.__views.__alloyId279);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.addEventListener("click", function() {
        Alloy.createController("home");
    });
    $.profile.addEventListener("click", function() {
        Alloy.createController("profile");
    });
    $.categories.addEventListener("click", function() {
        Alloy.createController("categories");
    });
    $.exit.addEventListener("click", function() {
        var alertWindow = Titanium.UI.createAlertDialog({
            title: "Sair",
            message: "Deseja sair agora?",
            cancel: 1,
            buttonNames: [ "Sair", "Cancelar" ]
        });
        alertWindow.addEventListener("click", function(e) {
            switch (e.index) {
              case 0:
                Cloud.Users.logout(function(e) {
                    if (e.success) {
                        Alloy.createController("login");
                        Ti.App.Properties.removeProperty("sessionId");
                        Ti.App.Properties.removeProperty("userId");
                        Ti.App.Properties.removeProperty("userName");
                    }
                });
            }
        });
        alertWindow.show();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;