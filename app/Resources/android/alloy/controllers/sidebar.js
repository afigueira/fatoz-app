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
        height: 50,
        backgroundSelectedColor: "#90241a",
        top: 57,
        id: "home"
    });
    $.__views.sidebar.add($.__views.home);
    $.__views.__alloyId210 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId210"
    });
    $.__views.home.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-home.png",
        id: "__alloyId211"
    });
    $.__views.__alloyId210.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_home",
        id: "__alloyId212"
    });
    $.__views.__alloyId210.add($.__views.__alloyId212);
    $.__views.profile = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "profile"
    });
    $.__views.sidebar.add($.__views.profile);
    $.__views.__alloyId213 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId213"
    });
    $.__views.profile.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-profile.png",
        id: "__alloyId214"
    });
    $.__views.__alloyId213.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_profile",
        id: "__alloyId215"
    });
    $.__views.__alloyId213.add($.__views.__alloyId215);
    $.__views.categories = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "categories"
    });
    $.__views.sidebar.add($.__views.categories);
    $.__views.__alloyId216 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId216"
    });
    $.__views.categories.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-categories.png",
        id: "__alloyId217"
    });
    $.__views.__alloyId216.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_categories",
        id: "__alloyId218"
    });
    $.__views.__alloyId216.add($.__views.__alloyId218);
    $.__views.statistics = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "statistics"
    });
    $.__views.sidebar.add($.__views.statistics);
    $.__views.__alloyId219 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId219"
    });
    $.__views.statistics.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-statistics.png",
        id: "__alloyId220"
    });
    $.__views.__alloyId219.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_statistics",
        id: "__alloyId221"
    });
    $.__views.__alloyId219.add($.__views.__alloyId221);
    $.__views.achievements = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "achievements"
    });
    $.__views.sidebar.add($.__views.achievements);
    $.__views.__alloyId222 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId222"
    });
    $.__views.achievements.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-achievements.png",
        id: "__alloyId223"
    });
    $.__views.__alloyId222.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_achievements",
        id: "__alloyId224"
    });
    $.__views.__alloyId222.add($.__views.__alloyId224);
    $.__views.settings = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        id: "settings"
    });
    $.__views.sidebar.add($.__views.settings);
    $.__views.__alloyId225 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId225"
    });
    $.__views.settings.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-settings.png",
        id: "__alloyId226"
    });
    $.__views.__alloyId225.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_settings",
        id: "__alloyId227"
    });
    $.__views.__alloyId225.add($.__views.__alloyId227);
    $.__views.exit = Ti.UI.createView({
        height: 50,
        backgroundSelectedColor: "#90241a",
        top: 33,
        bottom: 57,
        id: "exit"
    });
    $.__views.sidebar.add($.__views.exit);
    $.__views.__alloyId228 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId228"
    });
    $.__views.exit.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createImageView({
        left: 25,
        image: "/images/icon-exit.png",
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14,
            fontWeight: "bold"
        },
        color: "#ffffff",
        left: 25,
        textid: "button_exit",
        id: "__alloyId230"
    });
    $.__views.__alloyId228.add($.__views.__alloyId230);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.addEventListener("click", function() {
        Alloy.createController("home");
    });
    $.profile.addEventListener("click", function() {
        Alloy.createController("profile");
    });
    $.statistics.addEventListener("click", function() {
        Alloy.createController("profile", {
            scrollToView: 0
        });
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