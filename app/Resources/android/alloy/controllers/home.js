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
        Cloud = require("ti.cloud");
        is_popular();
        navigation();
    }
    function tabNavigation(e) {
        for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
        for (var i = 0, j = $.contentTabs.children.length; j > i; i++) $.contentTabs.children[i].visible = false;
        var contentTabsIndex = e.source.contentTabsIndex;
        $.contentTabs.children[contentTabsIndex].visible = true;
        $.tabs.children[contentTabsIndex].children[1].visible = true;
    }
    function navigation() {
        for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
        for (var i = 0, j = $.contentTabs.children.length; j > i; i++) {
            $.contentTabs.children[i].visible = false;
            (function(element) {
                element.addEventListener("scrollend", function(e) {
                    for (var a = 0, k = $.paginationBall.children.length; k > a; a++) {
                        $.removeClass($.paginationBall.children[a], "selectedBall");
                        console.log("-------------------");
                    }
                    $.addClass($.paginationBall.children[e.currentPage], "itemBall selectedBall");
                });
            })($.contentTabs.children[i]);
        }
        $.contentTabs.children[0].visible = true;
        $.tabs.children[0].children[1].visible = true;
    }
    function mountNavigationBoll(length) {
        for (var a = 0; length > a; a++) {
            var itemBall = Titanium.UI.createImageView();
            $.addClass(itemBall, "itemBall");
            $.paginationBall.add(itemBall);
        }
    }
    function is_popular() {
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
                mountNavigationBoll(views.length);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sidebar = require("xp.ui").createWindow({
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.__alloyId114 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        role: "centerWindow",
        id: "__alloyId114"
    });
    $.__views.__alloyId115 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.goToCategories = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: "280",
        id: "goToCategories"
    });
    $.__views.__alloyId115.add($.__views.goToCategories);
    $.__views.__alloyId116 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId116"
    });
    $.__views.goToCategories.add($.__views.__alloyId116);
    $.__views.containerLabelHighlight = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 30,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "containerLabelHighlight"
    });
    $.__views.__alloyId116.add($.__views.containerLabelHighlight);
    $.__views.__alloyId117 = Ti.UI.createImageView({
        image: "/images/icon-highlights.png",
        id: "__alloyId117"
    });
    $.__views.containerLabelHighlight.add($.__views.__alloyId117);
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
    $.__views.__alloyId116.add($.__views.labelSeeCategories);
    $.__views.arrowSeeCategories = Ti.UI.createImageView({
        top: 30,
        right: 0,
        layout: "absolute",
        image: "/images/arrow-see-more-categories-home.png",
        id: "arrowSeeCategories"
    });
    $.__views.goToCategories.add($.__views.arrowSeeCategories);
    $.__views.categories = Ti.UI.createView({
        height: 390,
        borderRadius: 4,
        layout: "absolute",
        width: 280,
        top: 20,
        backgroundColor: "white",
        id: "categories"
    });
    $.__views.__alloyId115.add($.__views.categories);
    $.__views.tabs = Ti.UI.createView({
        height: 46,
        top: 0,
        left: 10,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.categories.add($.__views.tabs);
    $.__views.popularTab = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 87,
        id: "popularTab",
        contentTabsIndex: "0"
    });
    $.__views.tabs.add($.__views.popularTab);
    tabNavigation ? $.__views.popularTab.addEventListener("click", tabNavigation) : __defers["$.__views.popularTab!click!tabNavigation"] = true;
    $.__views.__alloyId118 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "popular",
        id: "__alloyId118"
    });
    $.__views.popularTab.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId119"
    });
    $.__views.popularTab.add($.__views.__alloyId119);
    $.__views.recentTab = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 87,
        id: "recentTab",
        contentTabsIndex: "1"
    });
    $.__views.tabs.add($.__views.recentTab);
    tabNavigation ? $.__views.recentTab.addEventListener("click", tabNavigation) : __defers["$.__views.recentTab!click!tabNavigation"] = true;
    $.__views.__alloyId120 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "text_new",
        id: "__alloyId120"
    });
    $.__views.recentTab.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId121"
    });
    $.__views.recentTab.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 87,
        id: "__alloyId122"
    });
    $.__views.tabs.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "recent",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId124"
    });
    $.__views.__alloyId122.add($.__views.__alloyId124);
    $.__views.contentTabs = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        id: "contentTabs",
        top: "46"
    });
    $.__views.categories.add($.__views.contentTabs);
    var __alloyId125 = [];
    $.__views.popular = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId125,
        id: "popular"
    });
    $.__views.contentTabs.add($.__views.popular);
    var __alloyId126 = [];
    $.__views.__alloyId127 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        backgroundImage: "/images/background-home-categories-soccer.jpg",
        id: "__alloyId127"
    });
    __alloyId126.push($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createImageView({
        top: 64,
        image: "/images/icon-home-category-football.png",
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
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
    $.__views.__alloyId127.add($.__views.titleCategory);
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
    $.__views.__alloyId127.add($.__views.descriptionCategory);
    $.__views.__alloyId129 = Ti.UI.createButton({
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
        id: "__alloyId129"
    });
    $.__views.__alloyId127.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createButton({
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
        id: "__alloyId130"
    });
    $.__views.__alloyId127.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createButton({
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
        id: "__alloyId131"
    });
    $.__views.__alloyId127.add($.__views.__alloyId131);
    $.__views.recent = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId126,
        id: "recent"
    });
    $.__views.contentTabs.add($.__views.recent);
    $.__views.paginationBall = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        bottom: 15,
        id: "paginationBall"
    });
    $.__views.categories.add($.__views.paginationBall);
    $.__views.__alloyId132 = Ti.UI.createView({
        height: 20,
        width: Titanium.UI.FILL,
        top: 485,
        id: "__alloyId132"
    });
    $.__views.__alloyId115.add($.__views.__alloyId132);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId114 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.drawer($.sidebar, $.drawer, "Início", init());
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
    $.goToCategories.addEventListener("click", function() {
        Alloy.createController("categories");
    });
    __defers["$.__views.popularTab!click!tabNavigation"] && $.__views.popularTab.addEventListener("click", tabNavigation);
    __defers["$.__views.recentTab!click!tabNavigation"] && $.__views.recentTab.addEventListener("click", tabNavigation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;