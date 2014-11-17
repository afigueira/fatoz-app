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
            Alloy.createController(createController);
            Ti.App.Properties.setString("sessionId", Alloy.Globals.Cloud.sessionId);
            Ti.App.Properties.setString("userId", e.users[0].id);
            Ti.App.Properties.setString("userName", e.users[0].first_name + " " + e.users[0].last_name);
            Alloy.Globals.updateFacebookInfos();
            $.window.close();
        } else alert("Houve um erro para efetuar seu login");
    }
    function banner() {
        Alloy.Globals.showBanner($.window, "login", "bottom");
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
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.__alloyId66 = Ti.UI.createScrollView({
        id: "__alloyId66"
    });
    $.__views.window.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        layout: "vertical",
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.logo = Ti.UI.createImageView({
        top: 55,
        image: "/images/logo-login.png",
        id: "logo"
    });
    $.__views.__alloyId67.add($.__views.logo);
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
    $.__views.__alloyId67.add($.__views.form);
    $.__views.__alloyId68 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId68"
    });
    $.__views.form.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
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
    $.__views.__alloyId69.add($.__views.email);
    $.__views.__alloyId70 = Ti.UI.createImageView({
        image: "/images/icon-key.png",
        right: "52",
        top: "15",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId71"
    });
    $.__views.__alloyId68.add($.__views.__alloyId71);
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
    $.__views.__alloyId71.add($.__views.password);
    $.__views.__alloyId72 = Ti.UI.createImageView({
        image: "/images/icon-user.png",
        right: "52",
        top: "23",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
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
    $.__views.__alloyId67.add($.__views.btnFacebook);
    $.__views.logoBtnFacebook = Ti.UI.createImageView({
        top: 0,
        left: 0,
        image: "/images/logo-button-facebook.jpg",
        id: "logoBtnFacebook",
        height: Titanium.UI.FILL
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
    $.__views.__alloyId67.add($.__views.footer);
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
    var createController = "home";
    $.submit.addEventListener("click", function() {
        Alloy.Globals.Cloud.Users.login({
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
        Alloy.createController("signup");
        $.window.close();
    });
    $.forgotPassword.addEventListener("click", function() {
        Alloy.createController("forgotPassword");
        $.window.close();
    });
    Titanium.App.addEventListener("facebook.login", function(e) {
        e.success ? Alloy.Globals.Cloud.SocialIntegrations.externalAccountLogin({
            type: "facebook",
            token: Alloy.Globals.Facebook.accessToken
        }, function(e) {
            login(e);
        }) : alert("Houve um erro para efetuar seu login");
    });
    $.window.addEventListener("close", function() {
        $.destroy();
        $.off();
    });
    $.window.open();
    banner();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;