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
    $.__views.__alloyId233 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-home.png",
        id: "__alloyId233"
    });
    $.__views.home.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_home",
        id: "__alloyId234"
    });
    $.__views.home.add($.__views.__alloyId234);
    $.__views.profile = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "profile"
    });
    $.__views.sidebar.add($.__views.profile);
    $.__views.__alloyId235 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-profile.png",
        id: "__alloyId235"
    });
    $.__views.profile.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_profile",
        id: "__alloyId236"
    });
    $.__views.profile.add($.__views.__alloyId236);
    $.__views.categories = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "categories"
    });
    $.__views.sidebar.add($.__views.categories);
    $.__views.__alloyId237 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-categories.png",
        id: "__alloyId237"
    });
    $.__views.categories.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_categories",
        id: "__alloyId238"
    });
    $.__views.categories.add($.__views.__alloyId238);
    $.__views.challenges = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "challenges"
    });
    $.__views.sidebar.add($.__views.challenges);
    $.__views.__alloyId239 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-challenges.png",
        id: "__alloyId239"
    });
    $.__views.challenges.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_challenges",
        id: "__alloyId240"
    });
    $.__views.challenges.add($.__views.__alloyId240);
    $.__views.statistics = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "statistics"
    });
    $.__views.sidebar.add($.__views.statistics);
    $.__views.__alloyId241 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-statistics.png",
        id: "__alloyId241"
    });
    $.__views.statistics.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_statistics",
        id: "__alloyId242"
    });
    $.__views.statistics.add($.__views.__alloyId242);
    $.__views.achievements = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "achievements"
    });
    $.__views.sidebar.add($.__views.achievements);
    $.__views.__alloyId243 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-achievements.png",
        id: "__alloyId243"
    });
    $.__views.achievements.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_achievements",
        id: "__alloyId244"
    });
    $.__views.achievements.add($.__views.__alloyId244);
    $.__views.settings = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 34,
        id: "settings"
    });
    $.__views.sidebar.add($.__views.settings);
    $.__views.__alloyId245 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-settings.png",
        id: "__alloyId245"
    });
    $.__views.settings.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_settings",
        id: "__alloyId246"
    });
    $.__views.settings.add($.__views.__alloyId246);
    $.__views.exit = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        bottom: 57,
        top: 33,
        id: "exit"
    });
    $.__views.sidebar.add($.__views.exit);
    $.__views.__alloyId247 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-exit.png",
        id: "__alloyId247"
    });
    $.__views.exit.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_exit",
        id: "__alloyId248"
    });
    $.__views.exit.add($.__views.__alloyId248);
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