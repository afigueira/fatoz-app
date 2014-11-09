function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function login(e) {
        if (e.success) {
            Ti.App.Properties.setString("sessionId", Cloud.sessionId);
            Ti.App.Properties.setString("userId", e.users[0].id);
            Ti.App.Properties.setString("userName", e.users[0].first_name + " " + e.users[0].last_name);
            Alloy.createController(createController);
        } else alert("Houve um erro para efetuar seu login");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId84 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId84"
    });
    $.__views.login.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.logo = Ti.UI.createImageView({
        top: 55,
        image: "/images/logo-login.png",
        id: "logo"
    });
    $.__views.__alloyId85.add($.__views.logo);
    $.__views.form = Ti.UI.createView({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        top: 32,
        left: 28,
        right: 28,
        id: "form"
    });
    $.__views.__alloyId85.add($.__views.form);
    $.__views.__alloyId86 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId86"
    });
    $.__views.form.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.email = Ti.UI.createTextField({
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        top: 0,
        left: 0,
        height: 40,
        width: Titanium.UI.FILL,
        right: 40,
        id: "email",
        hintText: L("email")
    });
    $.__views.__alloyId87.add($.__views.email);
    $.__views.__alloyId88 = Ti.UI.createImageView({
        image: "/images/icon-key.png",
        right: "52",
        top: "15",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId89"
    });
    $.__views.__alloyId86.add($.__views.__alloyId89);
    $.__views.password = Ti.UI.createTextField({
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        top: 8,
        left: 0,
        height: 40,
        width: Titanium.UI.FILL,
        right: 40,
        id: "password",
        passwordMask: "true",
        hintText: L("password")
    });
    $.__views.__alloyId89.add($.__views.password);
    $.__views.__alloyId90 = Ti.UI.createImageView({
        image: "/images/icon-user.png",
        right: "52",
        top: "23",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.submit = Ti.UI.createButton({
        borderRadius: 4,
        backgroundColor: "white",
        height: 88,
        right: 0,
        width: 32,
        top: 30,
        image: "/images/icon-lock.png",
        id: "submit"
    });
    $.__views.form.add($.__views.submit);
    $.__views.forgotPassword = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        left: 0,
        top: 130,
        id: "forgotPassword",
        textid: "forgotpassword"
    });
    $.__views.form.add($.__views.forgotPassword);
    $.__views.btnFacebook = Ti.UI.createView({
        borderRadius: 4,
        backgroundColor: Alloy.Globals.constants.FACEBOOK_BUTTON_COLOR,
        height: 35,
        width: 265,
        top: 42,
        bottom: 42,
        id: "btnFacebook"
    });
    $.__views.__alloyId85.add($.__views.btnFacebook);
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
        textid: "button_facebook_login",
        id: "labelBtnFacebook"
    });
    $.__views.btnFacebook.add($.__views.labelBtnFacebook);
    $.__views.footer = Ti.UI.createView({
        backgroundColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        height: 75,
        bottom: 0,
        width: Titanium.UI.FILL,
        id: "footer"
    });
    $.__views.__alloyId85.add($.__views.footer);
    $.__views.signup = Ti.UI.createButton({
        borderRadius: 4,
        color: "white",
        tintColor: "white",
        backgroundColor: "#ff7026",
        height: 35,
        width: 200,
        id: "signup",
        titleid: "button_signup"
    });
    $.__views.footer.add($.__views.signup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Cloud = require("ti.cloud");
    var createController = "home";
    $.submit.addEventListener("click", function() {
        Cloud.Users.login({
            login: $.email.value,
            password: $.password.value
        }, function(e) {
            login(e);
        });
    });
    $.btnFacebook.addEventListener("click", function() {
        console.log("btn facebook clicked");
        console.log(Alloy.Globals.Facebook);
        Alloy.Globals.Facebook.authorize();
    });
    $.signup.addEventListener("click", function() {
        console.log("signup");
        Alloy.createController("signup");
    });
    $.forgotPassword.addEventListener("click", function() {
        Alloy.createController("forgotPassword");
    });
    Titanium.App.addEventListener("facebook.login", function(e) {
        e.success ? Cloud.SocialIntegrations.externalAccountLogin({
            type: "facebook",
            token: Alloy.Globals.Facebook.accessToken
        }, function(e) {
            login(e);
        }) : alert("Houve um erro para efetuar seu login");
    });
    $.login.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;