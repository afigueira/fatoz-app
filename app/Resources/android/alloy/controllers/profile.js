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
        myInfos();
        achievements();
        banner();
    }
    function banner() {
        Alloy.Globals.showBanner($.window, "profile", "bottom");
    }
    function myInfos() {
        Alloy.Globals.Cloud.Users.showMe(function(e) {
            if (e.success) {
                var user = e.users[0];
                $.userName.text = user.first_name + " " + user.last_name;
                $.profilePhoto.image = user.custom_fields.profile_image;
                $.coverPhoto.image = user.custom_fields.cover_image;
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function achievements() {
        Alloy.Globals.Cloud.Objects.query({
            classname: "categories"
        }, function(e) {
            if (e.success) {
                var categories = e.categories;
                console.log("categories ----->", e.categories);
                for (var i = 0, j = e.categories.length; j > i; i++) {
                    var rowConquer = Titanium.UI.createView();
                    $.addClass(rowConquer, "rowConquer");
                    var imageConquer = Titanium.UI.createImageView({
                        image: categories[i].badge
                    });
                    $.addClass(imageConquer, "imageConquer");
                    var rightContentConquer = Titanium.UI.createView();
                    $.addClass(rightContentConquer, "rightContentConquer");
                    var conquerTitle = Titanium.UI.createLabel({
                        text: categories[i].title
                    });
                    $.addClass(conquerTitle, "conquerTitle proximaNovaRegular");
                    console.log(categories[i].id + " ELEMENTO -------->", conquerTitle);
                    var layoutHorizontal = Titanium.UI.createView();
                    $.addClass(layoutHorizontal, "layoutHorizontal left0");
                    var numberConquer = Titanium.UI.createLabel({
                        text: "0 de " + categories[i].points_to_badge,
                        points_to_badge: categories[i].points_to_badge,
                        categories_id: categories[i].id
                    });
                    $.addClass(numberConquer, "numberConquer proximaNovaRegular");
                    var ptConquer = Titanium.UI.createLabel({
                        text: "Pontos"
                    });
                    $.addClass(ptConquer, "ptConquer proximaNovaRegular");
                    var percentConquer = Titanium.UI.createView();
                    $.addClass(percentConquer, "percentConquer");
                    var percentNumber = Titanium.UI.createLabel({
                        text: "0%"
                    });
                    $.addClass(percentNumber, "percentNumber");
                    var progressBar = Titanium.UI.createView();
                    $.addClass(progressBar, "progressBar");
                    var percentBar = Titanium.UI.createView({
                        width: 0
                    });
                    $.addClass(percentBar, "percentBar");
                    var borderGrayConquer = Titanium.UI.createView();
                    $.addClass(borderGrayConquer, "borderGray borderGrayConquer");
                    rowConquer.add(imageConquer);
                    rightContentConquer.add(conquerTitle);
                    layoutHorizontal.add(numberConquer);
                    layoutHorizontal.add(ptConquer);
                    rightContentConquer.add(layoutHorizontal);
                    percentConquer.add(percentNumber);
                    progressBar.add(percentBar);
                    percentConquer.add(progressBar);
                    rightContentConquer.add(percentConquer);
                    rowConquer.add(rightContentConquer);
                    rowConquer.add(borderGrayConquer);
                    $.conquer.add(rowConquer);
                }
                setPointsAchievements($.conquer.data[0].rows, $.conquer.data[0].rows.length, 0);
            }
        });
    }
    function setPointsAchievements(element, length, a) {
        var label;
        var pointsToBadge;
        var categoriesId;
        for (var i = a; length > i; i++) {
            label = element[i].children[1].children[1].children[0];
            var percentBar = element[i].children[1].children[2].children[1].children[0];
            var percent = element[i].children[1].children[2].children[0];
            pointsToBadge = label.points_to_badge;
            categoriesId = label.categories_id;
            Alloy.Globals.Cloud.Objects.query({
                classname: "achievements",
                where: {
                    categories_id: categoriesId,
                    users_id: Ti.App.Properties.getString("userId")
                }
            }, function(e) {
                if (e.success) {
                    var achievement = e.achievements[0];
                    if (achievement) {
                        label.text = achievement.points + " de " + pointsToBadge;
                        var pct = 100 * achievement.points / pointsToBadge;
                        pct = pct > 100 ? 100 : pct;
                        percentBar.width = pct + "%";
                        percent.text = pct + "%";
                        element.shift();
                        setPointsAchievements(element, length, i);
                    }
                }
            });
            break;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
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
    $.__views.window = require("xp.ui").createWindow({
        role: "centerWindow",
        title: "Perfil",
        id: "window"
    });
    $.__views.__alloyId70 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        top: Alloy.Globals.marginTopWindow,
        layout: "vertical",
        id: "__alloyId70"
    });
    $.__views.window.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        height: 231,
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.coverPhoto = Ti.UI.createImageView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        layout: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        id: "coverPhoto"
    });
    $.__views.__alloyId71.add($.__views.coverPhoto);
    $.__views.__alloyId72 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 250,
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.profilePhoto = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 32,
        left: 0,
        id: "profilePhoto"
    });
    $.__views.__alloyId72.add($.__views.profilePhoto);
    $.__views.userName = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        height: Titanium.UI.SIZE,
        left: 74,
        top: 10,
        id: "userName"
    });
    $.__views.__alloyId72.add($.__views.userName);
    $.__views.contentTabs = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        id: "contentTabs"
    });
    $.__views.__alloyId70.add($.__views.contentTabs);
    $.__views.__alloyId73 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#f0f0f0",
        id: "__alloyId73"
    });
    $.__views.contentTabs.add($.__views.__alloyId73);
    $.__views.conquer = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "conquer"
    });
    $.__views.__alloyId73.add($.__views.conquer);
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
    arguments[0] || {};
    Alloy.Globals.drawer($.sidebar, $.leftMenu, $.drawer, "Perfil", init);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;