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
    this.__controllerPath = "signup";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId105 = [];
    $.__views.__alloyId107 = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "__alloyId107"
    });
    $.__views.back = Ti.UI.createButton({
        image: "/images/button-back.png",
        id: "back"
    });
    $.__views.__alloyId107.leftNavButton = $.__views.back;
    $.__views.__alloyId110 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "signup",
        id: "__alloyId110"
    });
    $.__views.__alloyId107.titleControl = $.__views.__alloyId110;
    $.__views.__alloyId111 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId111"
    });
    $.__views.__alloyId107.add($.__views.__alloyId111);
    $.__views.logo = Ti.UI.createImageView({
        top: 33,
        image: "/images/logo-signup.png",
        id: "logo"
    });
    $.__views.__alloyId111.add($.__views.logo);
    $.__views.username = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        top: 33,
        id: "username",
        hintText: L("username")
    });
    $.__views.__alloyId111.add($.__views.username);
    $.__views.email = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        top: 15,
        id: "email",
        hintText: L("email")
    });
    $.__views.__alloyId111.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        top: 15,
        id: "password",
        passwordMask: "true",
        hintText: L("password")
    });
    $.__views.__alloyId111.add($.__views.password);
    $.__views.terms = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        top: 15,
        id: "terms",
        textid: "terms_signup"
    });
    $.__views.__alloyId111.add($.__views.terms);
    $.__views.submit = Ti.UI.createButton({
        borderRadius: 4,
        color: "red",
        tintColor: "red",
        backgroundColor: "white",
        top: 30,
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        id: "submit",
        titleid: "finish_signup"
    });
    $.__views.__alloyId111.add($.__views.submit);
    $.__views.footer = Ti.UI.createView({
        backgroundColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        height: 75,
        top: 40,
        width: Titanium.UI.FILL,
        id: "footer"
    });
    $.__views.__alloyId111.add($.__views.footer);
    $.__views.btnFacebook = Ti.UI.createView({
        borderRadius: 4,
        backgroundColor: Alloy.Globals.constants.FACEBOOK_BUTTON_COLOR,
        height: 35,
        width: 265,
        top: 20,
        id: "btnFacebook"
    });
    $.__views.footer.add($.__views.btnFacebook);
    $.__views.logoBtnFacebook = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "/images/logo-button-facebook.jpg",
        id: "logoBtnFacebook"
    });
    $.__views.btnFacebook.add($.__views.logoBtnFacebook);
    $.__views.labelBtnFacebook = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        width: Titanium.UI.FILL,
        textAlign: "center",
        left: 35,
        textid: "button_facebook_signup",
        id: "labelBtnFacebook"
    });
    $.__views.btnFacebook.add($.__views.labelBtnFacebook);
    $.__views.__alloyId106 = Ti.UI.createTab({
        window: $.__views.__alloyId107,
        titleid: "signup",
        id: "__alloyId106"
    });
    __alloyId105.push($.__views.__alloyId106);
    $.__views.signup = Ti.UI.createTabGroup({
        tabs: __alloyId105,
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.signup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;