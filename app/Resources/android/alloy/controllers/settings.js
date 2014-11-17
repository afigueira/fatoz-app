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
        showUser();
        banner();
        $.leftMenu.addEventListener("click", $.drawer.toggleLeftWindow);
    }
    function banner() {
        Alloy.Globals.showBanner($.window, "settings", "bottom");
    }
    function showUser() {
        Alloy.Globals.Cloud.Users.showMe(function(e) {
            if (e.success) {
                var user = e.users[0];
                $.firstName.value = user.first_name;
                $.lastName.value = user.last_name;
                $.email.value = user.email;
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function updateUser(obj) {
        Alloy.Globals.Cloud.Users.update(obj, function(e) {
            if (e.success) {
                alert("Dados salvos com sucesso.");
                Ti.App.Properties.setString("userName", e.users[0].first_name + " " + e.users[0].last_name);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.sidebar = require("xp.ui").createWindow({
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.window = require("xp.ui").createWindow({
        role: "centerWindow",
        title: "Definições",
        id: "window"
    });
    $.__views.__alloyId84 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        top: Alloy.Globals.marginTopWindow,
        id: "__alloyId84"
    });
    $.__views.window.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        bottom: "30",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.btnFacebook = Ti.UI.createView({
        borderRadius: 4,
        backgroundColor: Alloy.Globals.constants.FACEBOOK_BUTTON_COLOR,
        height: 35,
        width: 265,
        id: "btnFacebook",
        top: "20"
    });
    $.__views.__alloyId85.add($.__views.btnFacebook);
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
        textid: "button_facebook_integrate",
        id: "labelBtnFacebook"
    });
    $.__views.btnFacebook.add($.__views.labelBtnFacebook);
    $.__views.firstName = Ti.UI.createTextField({
        width: 265,
        height: 40,
        top: 20,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        id: "firstName",
        hintText: L("first_name")
    });
    $.__views.__alloyId85.add($.__views.firstName);
    $.__views.lastName = Ti.UI.createTextField({
        width: 265,
        height: 40,
        top: 20,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        id: "lastName",
        hintText: L("last_name")
    });
    $.__views.__alloyId85.add($.__views.lastName);
    $.__views.email = Ti.UI.createTextField({
        width: 265,
        height: 40,
        top: 20,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        id: "email",
        hintText: L("email")
    });
    $.__views.__alloyId85.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        width: 265,
        height: 40,
        top: 20,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        id: "password",
        passwordMask: "true",
        hintText: L("password")
    });
    $.__views.__alloyId85.add($.__views.password);
    $.__views.submit = Ti.UI.createButton({
        borderRadius: 4,
        color: "red",
        tintColor: "red",
        backgroundColor: "white",
        width: 265,
        top: 30,
        id: "submit",
        title: "Salvar"
    });
    $.__views.__alloyId85.add($.__views.submit);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.window ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.drawer($.sidebar, $.drawer, "Definições", init);
    $.submit.addEventListener("click", function() {
        if ($.firstName.value && $.lastName.value && $.email.value) {
            var obj = {
                email: $.email.value,
                first_name: $.firstName.value,
                last_name: $.lastName.value
            };
            if ($.password.value) {
                obj.password = $.password.value;
                obj.password_confirmation = $.password.value;
            }
            updateUser(obj);
        } else alert("Preencha os campos vazios.");
    });
    $.btnFacebook.addEventListener("click", function() {
        console.log("btn facebook clicked");
        console.log(Alloy.Globals.Facebook);
        Alloy.Globals.Facebook.authorize();
    });
    Titanium.App.addEventListener("facebook.updated", function() {
        alert("Conta linkada com sucesso.");
    });
    Titanium.App.addEventListener("facebook.login", function(e) {
        e.success ? Alloy.Globals.Cloud.SocialIntegrations.externalAccountLink({
            type: "facebook",
            token: Alloy.Globals.Facebook.accessToken
        }, function(e) {
            e.success && Alloy.Globals.updateFacebookInfos();
        }) : alert("Houve um erro para linkar sua conta do Facebook");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;