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
        getCategories($.popular, {
            classname: "categories",
            page: 1,
            per_page: 10,
            where: {
                is_popular: 1
            }
        }, true);
        getCategories($.recent, {
            classname: "categories",
            page: 1,
            per_page: 10,
            where: {
                is_recent: 1
            }
        }, false);
        navigation();
        ranking();
        banner();
        $.leftMenu.addEventListener("click", $.drawer.toggleLeftWindow);
    }
    function banner() {
        Alloy.Globals.showBanner($.window, "home", "bottom");
    }
    function tabNavigation(e) {
        if (e && e.source) {
            for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
            for (var i = 0, j = $.contentTabs.children.length; j > i; i++) $.contentTabs.children[i].visible = false;
            var contentTabsIndex = e.source.contentTabsIndex;
            $.contentTabs.children[contentTabsIndex].visible = true;
            $.tabs.children[contentTabsIndex].children[1].visible = true;
        }
    }
    function navigation() {
        for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
        for (var i = 0, j = $.contentTabs.children.length; j > i; i++) $.contentTabs.children[i].visible = false;
        $.contentTabs.children[0].visible = true;
        $.tabs.children[0].children[1].visible = true;
    }
    function createRowCategories(obj, container) {
        var rows = [];
        for (var i = 0, j = obj.length; j > i; i++) {
            var category = Titanium.UI.createView();
            $.addClass(category, "category");
            var iconCategory = Titanium.UI.createImageView({
                width: 32,
                height: 32
            });
            $.addClass(iconCategory, "iconCategory");
            var titleCategory = Titanium.UI.createLabel({
                text: obj[i].title
            });
            $.addClass(titleCategory, "fontWhite proximaNovaRegular titleCategory");
            var descriptionCategory = Titanium.UI.createLabel({
                text: obj[i].description
            });
            $.addClass(descriptionCategory, "fontWhite proximaNovaRegular descriptionCategory");
            var btnNewMatch = Titanium.UI.createButton({
                titleid: "new_match",
                id: obj[i].id
            });
            $.addClass(btnNewMatch, "radiusLarge green fontWhite proximaNovaRegular btnNewMatch");
            var btnRanking = Titanium.UI.createButton({
                titleid: "ranking",
                id: obj[i].id
            });
            $.addClass(btnRanking, "btnWhite btnRanking");
            category.add(iconCategory);
            category.add(titleCategory);
            category.add(descriptionCategory);
            category.add(btnNewMatch);
            category.add(btnRanking);
            Alloy.Globals.loadPhoto(iconCategory, "image", obj[i].icon);
            Alloy.Globals.loadPhoto(category, "backgroundImage", obj[i].background);
            rows.push(category);
        }
        rows = Alloy.Globals.arrayRand(rows);
        container.views = rows;
    }
    function getCategories(element, obj) {
        Alloy.Globals.Cloud.Objects.query(obj, function(e) {
            e.success ? createRowCategories(e.categories, element) : alert("Houve um erro para carregar as categorias");
        });
    }
    function ranking() {
        Alloy.Globals.loadPhoto($.btnRanking, "image", Alloy.CFG.banner_home);
        $.btnRanking.addEventListener("click", function() {
            Alloy.createController("ranking");
            $.destroy();
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
    $.__views.window = require("xp.ui").createWindow({
        role: "centerWindow",
        title: "Início",
        id: "window"
    });
    $.__views.__alloyId51 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        top: Alloy.Globals.marginTopWindow,
        id: "__alloyId51"
    });
    $.__views.window.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: "280",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.containerLabelHighlight = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 30,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "containerLabelHighlight"
    });
    $.__views.__alloyId54.add($.__views.containerLabelHighlight);
    $.__views.btnRanking = Ti.UI.createImageView({
        image: "",
        id: "btnRanking",
        height: "70"
    });
    $.__views.containerLabelHighlight.add($.__views.btnRanking);
    $.__views.categories = Ti.UI.createView({
        height: 390,
        borderRadius: 4,
        layout: "absolute",
        width: 280,
        top: 20,
        bottom: 20,
        backgroundColor: "white",
        id: "categories"
    });
    $.__views.__alloyId52.add($.__views.categories);
    $.__views.tabs = Ti.UI.createView({
        height: 46,
        top: 0,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.categories.add($.__views.tabs);
    $.__views.popularTab = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: "50%",
        id: "popularTab",
        contentTabsIndex: "0"
    });
    $.__views.tabs.add($.__views.popularTab);
    tabNavigation ? $.__views.popularTab.addEventListener("click", tabNavigation) : __defers["$.__views.popularTab!click!tabNavigation"] = true;
    $.__views.__alloyId55 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "popular",
        id: "__alloyId55"
    });
    $.__views.popularTab.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        left: 10,
        right: 10,
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId56"
    });
    $.__views.popularTab.add($.__views.__alloyId56);
    $.__views.recentTab = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: "49%",
        id: "recentTab",
        contentTabsIndex: "1"
    });
    $.__views.tabs.add($.__views.recentTab);
    tabNavigation ? $.__views.recentTab.addEventListener("click", tabNavigation) : __defers["$.__views.recentTab!click!tabNavigation"] = true;
    $.__views.__alloyId57 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "text_new",
        id: "__alloyId57"
    });
    $.__views.recentTab.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        left: 10,
        right: 10,
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId58"
    });
    $.__views.recentTab.add($.__views.__alloyId58);
    $.__views.contentTabs = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 46,
        id: "contentTabs"
    });
    $.__views.categories.add($.__views.contentTabs);
    var __alloyId59 = [];
    $.__views.popular = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: 344,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 30,
        overlayEnabled: true,
        views: __alloyId59,
        id: "popular"
    });
    $.__views.contentTabs.add($.__views.popular);
    var __alloyId60 = [];
    $.__views.recent = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: 344,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 30,
        overlayEnabled: true,
        views: __alloyId60,
        id: "recent"
    });
    $.__views.contentTabs.add($.__views.recent);
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
    Alloy.Globals.drawer($.sidebar, $.drawer, "Início", init);
    $.categories.addEventListener("click", function(e) {
        if (e && e.source && e.source.classes) {
            e.source.classes.indexOf("btnNewMatch") > -1 && Alloy.createController("roomQueue", {
                categoryId: e.source.id
            });
            e.source.classes.indexOf("btnRanking") > -1 && Alloy.createController("ranking", {
                categoryId: e.source.id
            });
        }
    });
    __defers["$.__views.popularTab!click!tabNavigation"] && $.__views.popularTab.addEventListener("click", tabNavigation);
    __defers["$.__views.recentTab!click!tabNavigation"] && $.__views.recentTab.addEventListener("click", tabNavigation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;