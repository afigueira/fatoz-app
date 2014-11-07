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
    }
    function showUser() {
        Cloud.Users.showMe(function(e) {
            if (e.success) {
                var user = e.users[0];
                $.firstName.value = user.first_name;
                $.lastName.value = user.last_name;
                $.email.value = user.email;
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function updateUser(obj) {
        Cloud.Users.update(obj, function(e) {
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
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.sidebar = require("xp.ui").createWindow({
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.__alloyId210 = Ti.UI.createView({
        role: "centerWindow",
        id: "__alloyId210"
    });
    $.__views.__alloyId211 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId211"
    });
    $.__views.__alloyId210.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        bottom: "30",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createView({
        height: 231,
        backgroundImage: "/images/background-categories-soccer.jpg",
        id: "__alloyId213"
    });
    $.__views.__alloyId212.add($.__views.__alloyId213);
    $.__views.editImageProfile = Ti.UI.createView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        id: "editImageProfile"
    });
    $.__views.__alloyId213.add($.__views.editImageProfile);
    $.__views.__alloyId214 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        backgroundImage: "/images/icon-user.png",
        id: "__alloyId214"
    });
    $.__views.editImageProfile.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        font: {
            fontSize: 10
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        height: 20,
        backgroundImage: "/images/background-black-transparent.png",
        width: Titanium.UI.FILL,
        bottom: 2,
        text: "EDITAR",
        id: "__alloyId215"
    });
    $.__views.editImageProfile.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
        font: {
            fontSize: 14
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#ffffff",
        height: 30,
        backgroundImage: "/images/background-black-transparent.png",
        width: Titanium.UI.FILL,
        bottom: 0,
        text: "EDITAR PAPEL DE PAREDE",
        id: "__alloyId216"
    });
    $.__views.__alloyId213.add($.__views.__alloyId216);
    $.__views.firstName = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        top: 20,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        id: "firstName",
        hintText: L("first_name")
    });
    $.__views.__alloyId212.add($.__views.firstName);
    $.__views.lastName = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        top: 20,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        id: "lastName",
        hintText: L("last_name")
    });
    $.__views.__alloyId212.add($.__views.lastName);
    $.__views.email = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        top: 20,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        id: "email",
        hintText: L("email")
    });
    $.__views.__alloyId212.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        width: Titanium.UI.FILL,
        height: 40,
        left: 28,
        right: 28,
        top: 20,
        borderRadius: 4,
        backgroundColor: "white",
        color: "#888888",
        tintColor: "#888888",
        id: "password",
        passwordMask: "true",
        hintText: L("password")
    });
    $.__views.__alloyId212.add($.__views.password);
    $.__views.submit = Ti.UI.createButton({
        borderRadius: 4,
        color: "red",
        tintColor: "red",
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        top: 30,
        left: 28,
        right: 28,
        id: "submit",
        title: "Salvar"
    });
    $.__views.__alloyId212.add($.__views.submit);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId210 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.drawer($.sidebar, $.drawer, "Definições", init());
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;