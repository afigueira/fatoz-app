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
    $.__views.sidebar = Ti.UI.createScrollView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#c42e24",
        id: "sidebar"
    });
    $.__views.sidebar && $.addTopLevelView($.__views.sidebar);
    $.__views.home = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        top: 57,
        id: "home"
    });
    $.__views.sidebar.add($.__views.home);
    $.__views.__alloyId83 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId83"
    });
    $.__views.home.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-home.png",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_home",
        id: "__alloyId85"
    });
    $.__views.__alloyId83.add($.__views.__alloyId85);
    $.__views.profile = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "profile"
    });
    $.__views.sidebar.add($.__views.profile);
    $.__views.__alloyId86 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId86"
    });
    $.__views.profile.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-profile.png",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_profile",
        id: "__alloyId88"
    });
    $.__views.__alloyId86.add($.__views.__alloyId88);
    $.__views.categories = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "categories"
    });
    $.__views.sidebar.add($.__views.categories);
    $.__views.__alloyId89 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId89"
    });
    $.__views.categories.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-categories.png",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_categories",
        id: "__alloyId91"
    });
    $.__views.__alloyId89.add($.__views.__alloyId91);
    $.__views.achievements = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "achievements"
    });
    $.__views.sidebar.add($.__views.achievements);
    $.__views.__alloyId92 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId92"
    });
    $.__views.achievements.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-achievements.png",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_achievements",
        id: "__alloyId94"
    });
    $.__views.__alloyId92.add($.__views.__alloyId94);
    $.__views.settings = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "settings"
    });
    $.__views.sidebar.add($.__views.settings);
    $.__views.__alloyId95 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId95"
    });
    $.__views.settings.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-settings.png",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_settings",
        id: "__alloyId97"
    });
    $.__views.__alloyId95.add($.__views.__alloyId97);
    $.__views.exit = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        top: 33,
        bottom: 57,
        id: "exit"
    });
    $.__views.sidebar.add($.__views.exit);
    $.__views.__alloyId98 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId98"
    });
    $.__views.exit.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-exit.png",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_exit",
        id: "__alloyId100"
    });
    $.__views.__alloyId98.add($.__views.__alloyId100);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.addEventListener("click", function() {
        Alloy.createController("home");
    });
    $.profile.addEventListener("click", function() {
        Alloy.createController("profile");
    });
    $.achievements.addEventListener("click", function() {
        Alloy.createController("profile", {
            scrollToView: 3
        });
    });
    $.categories.addEventListener("click", function() {
        Alloy.createController("categories");
    });
    $.settings.addEventListener("click", function() {
        Alloy.createController("settings");
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
                Alloy.Globals.Facebook.logout();
                Alloy.Globals.Cloud.Users.logout(function(e) {
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