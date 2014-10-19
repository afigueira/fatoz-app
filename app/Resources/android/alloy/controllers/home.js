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
    this.__controllerPath = "home";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.sidebar = require("xp.ui").createWindow({
        backgroundColor: "white",
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.__alloyId123 = Ti.UI.createView({
        role: "centerWindow",
        id: "__alloyId123"
    });
    $.__views.__alloyId124 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
        layout: "absolute",
        width: "280",
        height: Titanium.UI.SIZE,
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.containerLabelHighlight = Ti.UI.createView({
        top: 30,
        layout: "horizontal",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "containerLabelHighlight"
    });
    $.__views.__alloyId127.add($.__views.containerLabelHighlight);
    $.__views.__alloyId128 = Ti.UI.createImageView({
        image: "/images/icon-highlights.png",
        id: "__alloyId128"
    });
    $.__views.containerLabelHighlight.add($.__views.__alloyId128);
    $.__views.labelHighlight = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 0,
        textid: "highlights",
        id: "labelHighlight"
    });
    $.__views.containerLabelHighlight.add($.__views.labelHighlight);
    $.__views.labelSeeCategories = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 15,
        width: Titanium.UI.FILL,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        textid: "see_categories",
        id: "labelSeeCategories"
    });
    $.__views.__alloyId127.add($.__views.labelSeeCategories);
    $.__views.arrowSeeCategories = Ti.UI.createImageView({
        top: 30,
        right: 0,
        layout: "absolute",
        image: "/images/arrow-see-more-categories-home.png",
        id: "arrowSeeCategories"
    });
    $.__views.__alloyId126.add($.__views.arrowSeeCategories);
    $.__views.categories = Ti.UI.createView({
        borderRadius: 4,
        top: 20,
        width: 280,
        height: 390,
        backgroundColor: "white",
        id: "categories"
    });
    $.__views.__alloyId125.add($.__views.categories);
    $.__views.tabs = Ti.UI.createView({
        top: 0,
        left: 10,
        height: 46,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.categories.add($.__views.tabs);
    $.__views.__alloyId129 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId129"
    });
    $.__views.tabs.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "popular",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        id: "__alloyId131"
    });
    $.__views.__alloyId129.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId132"
    });
    $.__views.tabs.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "text_new",
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId134"
    });
    $.__views.__alloyId132.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        height: 46,
        width: 87,
        id: "__alloyId135"
    });
    $.__views.tabs.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "recent",
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId137"
    });
    $.__views.__alloyId135.add($.__views.__alloyId137);
    var __alloyId138 = [];
    $.__views.popular = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 46,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId138,
        id: "popular"
    });
    $.__views.categories.add($.__views.popular);
    $.__views.__alloyId139 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 20,
        top: 485,
        id: "__alloyId139"
    });
    $.__views.__alloyId125.add($.__views.__alloyId139);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId123 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Cloud = require("ti.cloud");
    require("alloy").Globals.drawer($.sidebar, $.drawer, "Início");
    Cloud.Objects.query({
        classname: "categories",
        page: 1,
        per_page: 10,
        where: {
            is_popular: 1
        }
    }, function(e) {
        if (e.success) {
            var views = [];
            for (var i = 0, j = e.categories.length; j > i; i++) {
                var category = Titanium.UI.createView();
                $.addClass(category, "category soccer");
                var iconCategory = Titanium.UI.createImageView({
                    image: "/images/icon-home-category-football.png"
                });
                $.addClass(iconCategory, "iconCategory");
                var titleCategory = Titanium.UI.createLabel({
                    text: e.categories[i].title
                });
                $.addClass(titleCategory, "fontWhite proximaNovaRegular titleCategory");
                var descriptionCategory = Titanium.UI.createLabel({
                    text: e.categories[i].description
                });
                $.addClass(descriptionCategory, "fontWhite proximaNovaRegular descriptionCategory");
                var btnNewMatch = Titanium.UI.createButton({
                    titleid: "new_match"
                });
                $.addClass(btnNewMatch, "radiusLarge green fontWhite proximaNovaRegular btnNewMatch");
                var btnChallenge = Titanium.UI.createButton({
                    titleid: "challenge"
                });
                $.addClass(btnChallenge, "btnWhite btnChallenge");
                var btnRanking = Titanium.UI.createButton({
                    titleid: "ranking"
                });
                $.addClass(btnRanking, "btnWhite btnRanking");
                category.add(iconCategory);
                category.add(titleCategory);
                category.add(descriptionCategory);
                category.add(btnNewMatch);
                category.add(btnChallenge);
                category.add(btnRanking);
                views[i] = category;
            }
            $.popular.views = views;
        } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
    $.categories.addEventListener("click", function(e) {
        e.source.classes.indexOf("btnNewMatch") > -1 ? alert(":D") : alert(":()");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;