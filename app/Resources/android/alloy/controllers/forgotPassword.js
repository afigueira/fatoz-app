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
    this.__controllerPath = "forgotPassword";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.forgotPassword = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        left: 0,
        top: 115,
        id: "forgotPassword"
    });
    $.__views.forgotPassword && $.addTopLevelView($.__views.forgotPassword);
    $.__views.logo = Ti.UI.createImageView({
        top: 55,
        image: "/images/logo-login.png",
        id: "logo"
    });
    $.__views.forgotPassword.add($.__views.logo);
    $.__views.form = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 237,
        left: 28,
        right: 28,
        id: "form"
    });
    $.__views.forgotPassword.add($.__views.form);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId18"
    });
    $.__views.form.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
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
    $.__views.__alloyId19.add($.__views.email);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        image: "/images/icon-user.png",
        right: "52",
        top: "15",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.submit = Ti.UI.createButton({
        borderRadius: 4,
        backgroundColor: "white",
        height: 40,
        right: 0,
        width: 32,
        top: 0,
        image: "/images/icon-lock.png",
        id: "submit"
    });
    $.__views.form.add($.__views.submit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.forgotPassword.open();
    $.submit.addEventListener("click", function() {
        var email = $.email.value;
        email && Cloud.Users.requestResetPassword({
            email: email
        }, function(e) {
            e.success ? alert("Success: Reset Request Sent") : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;