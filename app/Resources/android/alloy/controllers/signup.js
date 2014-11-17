function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function banner() {
        Alloy.Globals.showBanner($.window, "signup", "bottom");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.__alloyId104 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId104"
    });
    $.__views.window.add($.__views.__alloyId104);
    $.__views.logo = Ti.UI.createImageView({
        top: 33,
        image: "/images/logo-signup.png",
        id: "logo"
    });
    $.__views.__alloyId104.add($.__views.logo);
    $.__views.__alloyId105 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.firstName = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        top: 15,
        id: "firstName",
        hintText: L("first_name")
    });
    $.__views.__alloyId105.add($.__views.firstName);
    $.__views.__alloyId106 = Ti.UI.createImageView({
        image: "/images/icon-user.png",
        right: "40",
        top: "30",
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId107"
    });
    $.__views.__alloyId104.add($.__views.__alloyId107);
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
    $.__views.__alloyId107.add($.__views.email);
    $.__views.__alloyId108 = Ti.UI.createImageView({
        image: "/images/icon-email.png",
        right: "40",
        top: "30",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId109"
    });
    $.__views.__alloyId104.add($.__views.__alloyId109);
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
    $.__views.__alloyId109.add($.__views.password);
    $.__views.__alloyId110 = Ti.UI.createImageView({
        image: "/images/icon-key.png",
        right: "40",
        top: "30",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
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
    $.__views.__alloyId104.add($.__views.submit);
    $.__views.footer = Ti.UI.createView({
        backgroundColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        height: 75,
        top: 40,
        width: Titanium.UI.FILL,
        id: "footer"
    });
    $.__views.__alloyId104.add($.__views.footer);
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.submit.addEventListener("click", function() {
        var strName = $.firstName.value;
        strName = strName.split(" ");
        var firstName = strName.shift();
        var lastName = strName.join(" ");
        Alloy.Globals.Cloud.Users.create({
            email: $.email.value,
            first_name: firstName,
            last_name: lastName,
            password: $.password.value,
            password_confirmation: $.password.value,
            custom_fields: {
                profile_image: Alloy.CFG.default_image_avatar,
                cover_image: Alloy.CFG.default_image_cover
            }
        }, function(e) {
            if (e.success) {
                Alloy.createController("home");
                alert("Cadastro realizado com sucesso.");
                Ti.App.Properties.setString("sessionId", Alloy.Globals.Cloud.sessionId);
                Ti.App.Properties.setString("userId", e.users[0].id);
                Ti.App.Properties.setString("userName", e.users[0].first_name + " " + e.users[0].last_name);
                Alloy.Globals.updateFacebookInfos();
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    });
    $.window.open();
    banner();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;