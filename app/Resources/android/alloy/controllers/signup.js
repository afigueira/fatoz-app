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
    var __alloyId249 = [];
    $.__views.__alloyId251 = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "__alloyId251"
    });
    $.__views.back = Ti.UI.createButton({
        image: "/images/button-back.png",
        id: "back"
    });
    $.__views.__alloyId251.leftNavButton = $.__views.back;
    $.__views.__alloyId254 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "signup",
        id: "__alloyId254"
    });
    $.__views.__alloyId251.titleControl = $.__views.__alloyId254;
    $.__views.__alloyId255 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId255"
    });
    $.__views.__alloyId251.add($.__views.__alloyId255);
    $.__views.logo = Ti.UI.createImageView({
        top: 33,
        image: "/images/logo-signup.png",
        id: "logo"
    });
    $.__views.__alloyId255.add($.__views.logo);
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
    $.__views.__alloyId255.add($.__views.firstName);
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
    $.__views.__alloyId255.add($.__views.lastName);
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
    $.__views.__alloyId255.add($.__views.email);
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
    $.__views.__alloyId255.add($.__views.password);
    $.__views.states = Ti.UI.createButton({
        id: "states",
        text: "estados"
    });
    $.__views.__alloyId255.add($.__views.states);
    $.__views.cities = Ti.UI.createPicker({
        left: 28,
        right: 28,
        top: 15,
        backgroundColor: "#d32d21",
        id: "cities",
        width: Titanium.UI.FILL
    });
    $.__views.__alloyId255.add($.__views.cities);
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
    $.__views.__alloyId255.add($.__views.terms);
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
    $.__views.__alloyId255.add($.__views.submit);
    $.__views.footer = Ti.UI.createView({
        backgroundColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        height: 75,
        top: 40,
        width: Titanium.UI.FILL,
        id: "footer"
    });
    $.__views.__alloyId255.add($.__views.footer);
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
    $.__views.__alloyId250 = Ti.UI.createTab({
        window: $.__views.__alloyId251,
        titleid: "signup",
        id: "__alloyId250"
    });
    __alloyId249.push($.__views.__alloyId250);
    $.__views.signup = Ti.UI.createTabGroup({
        tabs: __alloyId249,
        id: "signup"
    });
    $.__views.signup && $.addTopLevelView($.__views.signup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    Cloud.Objects.query({
        classname: "states",
        page: 1,
        per_page: 27
    }, function(e) {
        e.success || alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
    $.states.addEventListener("click", function() {
        var win = Titanium.UI.createWindow();
        var listView = Ti.UI.createListView({
            id: "listStates"
        });
        var listSection = Ti.UI.createListSection();
        var sections = [];
        var dataSet = [];
        Cloud.Objects.query({
            classname: "states"
        }, function(e) {
            if (e.success) {
                for (var i = 0, j = e.states.length; j > i; i++) {
                    console.log(e.states[i].name);
                    dataSet.push({
                        properties: {
                            title: e.states[i].name,
                            states_id: e.states[i].states_id,
                            hasDetail: true,
                            onClick: "teste"
                        }
                    });
                }
                listSection.setItems(dataSet);
                sections.push(listSection);
                listView.sections = sections;
                win.add(listView);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
        win.open();
    });
    $.submit.addEventListener("click", function() {
        Cloud.Users.create({
            email: $.email.value,
            first_name: $.firstName.value,
            last_name: $.lastName.value,
            password: $.password.value,
            password_confirmation: $.password.value,
            cities_id: $.cities.getSelectedRow(0).title
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