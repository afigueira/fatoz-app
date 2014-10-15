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
    var __alloyId302 = [];
    $.__views.__alloyId304 = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "__alloyId304"
    });
    $.__views.back = Ti.UI.createButton({
        image: "/images/button-back.png",
        id: "back"
    });
    $.__views.__alloyId304.leftNavButton = $.__views.back;
    $.__views.__alloyId307 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "signup",
        id: "__alloyId307"
    });
    $.__views.__alloyId304.titleControl = $.__views.__alloyId307;
    $.__views.__alloyId308 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId308"
    });
    $.__views.__alloyId304.add($.__views.__alloyId308);
    $.__views.logo = Ti.UI.createImageView({
        top: 33,
        image: "/images/logo-signup.png",
        id: "logo"
    });
    $.__views.__alloyId308.add($.__views.logo);
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
    $.__views.__alloyId308.add($.__views.firstName);
    $.__views.lastName = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        top: 15,
        id: "lastName",
        hintText: L("last_name")
    });
    $.__views.__alloyId308.add($.__views.lastName);
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
    $.__views.__alloyId308.add($.__views.email);
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
    $.__views.__alloyId308.add($.__views.password);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "50",
        selectionIndicator: "true"
    });
    $.__views.__alloyId308.add($.__views.picker);
    var __alloyId309 = [];
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    __alloyId309.push($.__views.column1);
    $.__views.__alloyId310 = Ti.UI.createPickerRow({
        id: "__alloyId310"
    });
    $.__views.column1.addRow($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createLabel({
        text: "Bananas",
        color: "red",
        textAlign: "left",
        width: "126",
        id: "__alloyId311"
    });
    $.__views.__alloyId310.add($.__views.__alloyId311);
    $.__views.__alloyId312 = Ti.UI.createPickerRow({
        id: "__alloyId312"
    });
    $.__views.column1.addRow($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createLabel({
        text: "Strawberries",
        color: "red",
        textAlign: "left",
        width: "126",
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createPickerRow({
        id: "__alloyId314"
    });
    $.__views.column1.addRow($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
        text: "Mangos",
        color: "red",
        textAlign: "left",
        width: "126",
        id: "__alloyId315"
    });
    $.__views.__alloyId314.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createPickerRow({
        id: "__alloyId316"
    });
    $.__views.column1.addRow($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createLabel({
        text: "Grapes",
        color: "red",
        textAlign: "left",
        width: "126",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.column2 = Ti.UI.createPickerColumn({
        id: "column2"
    });
    __alloyId309.push($.__views.column2);
    $.__views.__alloyId318 = Ti.UI.createPickerRow({
        title: "red",
        id: "__alloyId318"
    });
    $.__views.column2.addRow($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createPickerRow({
        title: "green",
        id: "__alloyId319"
    });
    $.__views.column2.addRow($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createPickerRow({
        title: "blue",
        id: "__alloyId320"
    });
    $.__views.column2.addRow($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createPickerRow({
        title: "orange",
        id: "__alloyId321"
    });
    $.__views.column2.addRow($.__views.__alloyId321);
    $.__views.picker.add(__alloyId309);
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
    $.__views.__alloyId308.add($.__views.terms);
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
    $.__views.__alloyId308.add($.__views.submit);
    $.__views.footer = Ti.UI.createView({
        backgroundColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        height: 75,
        top: 40,
        width: Titanium.UI.FILL,
        id: "footer"
    });
    $.__views.__alloyId308.add($.__views.footer);
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
    $.__views.__alloyId303 = Ti.UI.createTab({
        window: $.__views.__alloyId304,
        titleid: "signup",
        id: "__alloyId303"
    });
    __alloyId302.push($.__views.__alloyId303);
    $.__views.signup = Ti.UI.createTabGroup({
        tabs: __alloyId302,
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    $.submit.addEventListener("click", function() {
        Cloud.Users.create({
            email: $.email.value,
            first_name: $.firstName.value,
            last_name: $.lastName.value,
            password: $.password.value,
            password_confirmation: $.password.value
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                alert("Success:\nid: " + user.id + "\n" + "sessionId: " + Cloud.sessionId + "\n" + "first name: " + user.first_name + "\n" + "last name: " + user.last_name);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    });
    $.signup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;