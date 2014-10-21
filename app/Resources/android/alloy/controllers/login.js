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
        } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
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
    $.__views.logo = Ti.UI.createImageView({
        top: 55,
        image: "/images/logo-login.png",
        id: "logo"
    });
    $.__views.login.add($.__views.logo);
    $.__views.form = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 237,
        left: 28,
        right: 28,
        id: "form"
    });
    $.__views.login.add($.__views.form);
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
    $.__views.form.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        top: 48,
        left: 0,
        height: 40,
        width: Titanium.UI.FILL,
        right: 40,
        id: "password",
        passwordMask: "true",
        hintText: L("password")
    });
    $.__views.form.add($.__views.password);
    $.__views.submit = Ti.UI.createView({
        borderRadius: 4,
        backgroundColor: "white",
        height: 88,
        right: 0,
        width: 32,
        top: 0,
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
        top: 100,
        id: "forgotPassword",
        textid: "forgotpassword"
    });
    $.__views.form.add($.__views.forgotPassword);
    $.__views.btnFacebook = Ti.UI.createView({
        borderRadius: 4,
        backgroundColor: Alloy.Globals.constants.FACEBOOK_BUTTON_COLOR,
        height: 35,
        width: 265,
        bottom: 95,
        id: "btnFacebook"
    });
    $.__views.login.add($.__views.btnFacebook);
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
    $.__views.login.add($.__views.footer);
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
        Alloy.Globals.Facebook.authorize();
    });
    $.signup.addEventListener("click", function() {
        Alloy.createController("signup");
    });
    Titanium.App.addEventListener("facebook.login", function(e) {
        e.success ? Cloud.SocialIntegrations.externalAccountLogin({
            type: "facebook",
            token: Alloy.Globals.Facebook.accessToken
        }, function(e) {
            login(e);
        }) : alert(e.error);
    });
    $.login.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;