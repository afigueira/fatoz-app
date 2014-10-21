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
    $.__views.__alloyId118 = Ti.UI.createView({
        role: "centerWindow",
        id: "__alloyId118"
    });
    $.__views.__alloyId119 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createView({
        layout: "absolute",
        width: "280",
        height: Titanium.UI.SIZE,
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.containerLabelHighlight = Ti.UI.createView({
        top: 30,
        layout: "horizontal",
        height: Titanium.UI.SIZE,
        width: Titanium.UI.SIZE,
        id: "containerLabelHighlight"
    });
    $.__views.__alloyId122.add($.__views.containerLabelHighlight);
    $.__views.__alloyId123 = Ti.UI.createImageView({
        image: "/images/icon-highlights.png",
        id: "__alloyId123"
    });
    $.__views.containerLabelHighlight.add($.__views.__alloyId123);
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
    $.__views.__alloyId122.add($.__views.labelSeeCategories);
    $.__views.arrowSeeCategories = Ti.UI.createImageView({
        top: 30,
        right: 0,
        layout: "absolute",
        image: "/images/arrow-see-more-categories-home.png",
        id: "arrowSeeCategories"
    });
    $.__views.__alloyId121.add($.__views.arrowSeeCategories);
    $.__views.categories = Ti.UI.createView({
        borderRadius: 4,
        layout: "vertical",
        width: 280,
        top: 20,
        height: 390,
        backgroundColor: "white",
        id: "categories"
    });
    $.__views.__alloyId120.add($.__views.categories);
    $.__views.tabs = Ti.UI.createView({
        top: 0,
        left: 10,
        height: 46,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.categories.add($.__views.tabs);
    $.__views.popularTab = Ti.UI.createView({
        touchEnabled: true,
        height: 46,
        width: 87,
        id: "popularTab"
    });
    $.__views.tabs.add($.__views.popularTab);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "popular",
        id: "__alloyId124"
    });
    $.__views.popularTab.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId125"
    });
    $.__views.popularTab.add($.__views.__alloyId125);
    $.__views.recentTab = Ti.UI.createView({
        touchEnabled: true,
        height: 46,
        width: 87,
        id: "recentTab"
    });
    $.__views.tabs.add($.__views.recentTab);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "text_new",
        id: "__alloyId126"
    });
    $.__views.recentTab.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId127"
    });
    $.__views.recentTab.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
        touchEnabled: true,
        height: 46,
        width: 87,
        id: "__alloyId128"
    });
    $.__views.tabs.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "recent",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId130"
    });
    $.__views.__alloyId128.add($.__views.__alloyId130);
    $.__views.contentTabs = Ti.UI.createView({
        id: "contentTabs"
    });
    $.__views.categories.add($.__views.contentTabs);
    var __alloyId131 = [];
    $.__views.popular = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId131,
        id: "popular"
    });
    $.__views.contentTabs.add($.__views.popular);
    var __alloyId132 = [];
    $.__views.__alloyId133 = Ti.UI.createView({
        backgroundImage: "/images/background-home-categories-soccer.jpg",
        id: "__alloyId133"
    });
    __alloyId132.push($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createImageView({
        top: 64,
        image: "/images/icon-home-category-football.png",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.titleCategory = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 24,
            fontWeight: "bold"
        },
        top: 108,
        id: "titleCategory"
    });
    $.__views.__alloyId133.add($.__views.titleCategory);
    $.__views.descriptionCategory = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 139,
        id: "descriptionCategory"
    });
    $.__views.__alloyId133.add($.__views.descriptionCategory);
    $.__views.__alloyId135 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        backgroundColor: "#08ad4d",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 213,
        width: 230,
        height: 33,
        titleid: "new_match",
        id: "__alloyId135"
    });
    $.__views.__alloyId133.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createButton({
        backgroundImage: "/images/background-btn-more.png",
        height: 30,
        borderRadius: 15,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        borderColor: "white",
        borderWidth: 1,
        color: "#ffffff",
        top: 255,
        left: 25,
        width: 110,
        titleid: "challenge",
        id: "__alloyId136"
    });
    $.__views.__alloyId133.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createButton({
        backgroundImage: "/images/background-btn-more.png",
        height: 30,
        borderRadius: 15,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        borderColor: "white",
        borderWidth: 1,
        color: "#ffffff",
        top: 255,
        right: 25,
        width: 110,
        titleid: "ranking",
        id: "__alloyId137"
    });
    $.__views.__alloyId133.add($.__views.__alloyId137);
    $.__views.recent = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId132,
        id: "recent"
    });
    $.__views.contentTabs.add($.__views.recent);
    $.__views.__alloyId138 = Ti.UI.createView({
        width: Titanium.UI.FILL,
        height: 20,
        top: 485,
        id: "__alloyId138"
    });
    $.__views.__alloyId120.add($.__views.__alloyId138);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId118 ],
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
                    titleid: "new_match",
                    id: e.categories[i].id
                });
                $.addClass(btnNewMatch, "radiusLarge green fontWhite proximaNovaRegular btnNewMatch");
                var btnChallenge = Titanium.UI.createButton({
                    titleid: "challenge"
                });
                $.addClass(btnChallenge, "btnWhite btnChallenge");
                var btnRanking = Titanium.UI.createButton({
                    titleid: "ranking",
                    id: e.categories[i].id
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
        if (e.source.classes) {
            e.source.classes.indexOf("btnNewMatch") > -1 && Alloy.createController("roomQueue", {
                categoryId: e.source.id
            });
            e.source.classes.indexOf("btnRanking") > -1 && Alloy.createController("ranking", {
                categoryId: e.source.id
            });
        }
    });
    $.containerLabelHighlight.addEventListener("click", function() {
        alert("containerLabelHighlight");
    });
    for (var i = 0, j = $.contentTabs.children.length; j > i; i++) {
        var children = $.contentTabs.children[i];
        children.visible = false;
    }
    $.tabs.addEventListener("click", function(e) {
        for (var i = 0, j = $.contentTabs.children.length; j > i; i++) {
            var children = $.contentTabs.children[i];
            children.visible = false;
        }
        "popularTab" == e.source.id && ($.popular.visible = true);
        "recentTab" == e.source.id && ($.recent.visible = true);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;