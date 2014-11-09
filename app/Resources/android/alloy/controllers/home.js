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
    }
    function tabNavigation(e) {
        for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
        for (var i = 0, j = $.contentTabs.children.length; j > i; i++) $.contentTabs.children[i].visible = false;
        var contentTabsIndex = e.source.contentTabsIndex;
        $.contentTabs.children[contentTabsIndex].visible = true;
        $.tabs.children[contentTabsIndex].children[1].visible = true;
        mountNavigationBoll($.contentTabs.children[contentTabsIndex].views.length);
    }
    function navigation() {
        for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
        for (var i = 0, j = $.contentTabs.children.length; j > i; i++) {
            $.contentTabs.children[i].visible = false;
            elementScrollend($.contentTabs.children[i]);
        }
        $.contentTabs.children[0].visible = true;
        $.tabs.children[0].children[1].visible = true;
    }
    function elementScrollend(element) {
        element.addEventListener("scrollend", function(e) {
            for (var a = 0, k = $.paginationBall.children.length; k > a; a++) $.removeClass($.paginationBall.children[a], "selectedBall");
            $.addClass($.paginationBall.children[e.currentPage], "itemBall selectedBall");
        });
    }
    function mountNavigationBoll(length) {
        $.paginationBall.visible = false;
        while ($.paginationBall.children.length > 0) $.paginationBall.remove($.paginationBall.children[0]);
        for (var a = 0; length > a; a++) {
            var itemBall = Titanium.UI.createImageView();
            $.addClass(itemBall, "itemBall");
            $.paginationBall.add(itemBall);
        }
        $.addClass($.paginationBall.children[0], "itemBall selectedBall");
        $.paginationBall.visible = true;
    }
    function createRowCategories(obj) {
        var views = [];
        for (var i = 0, j = obj.length; j > i; i++) {
            var category = Titanium.UI.createView({
                background: obj[i].background
            });
            $.addClass(category, "category");
            var iconCategory = Titanium.UI.createImageView({
                icon: obj[i].icon,
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
            views[i] = category;
        }
        return views;
    }
    function getCategories(element, obj, isFirst) {
        Cloud.Objects.query(obj, function(e) {
            if (e.success) {
                var views = createRowCategories(e.categories);
                element.views = views;
                setBackgrounds(element.views, element.views.length, 0);
                setIcons(element.views, element.views.length, 0);
                isFirst && mountNavigationBoll(views.length);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function setBackgrounds(element, length, a) {
        var backgroundImage;
        var image;
        for (var i = a; length > i; i++) {
            image = element[i];
            backgroundImage = image.background;
            Cloud.Photos.show({
                photo_id: backgroundImage
            }, function(e) {
                if (e.success) {
                    var photo = e.photos[0];
                    var urlImage = photo.urls.original;
                    image.backgroundImage = urlImage;
                    element.shift();
                    setBackgrounds(element, length, i);
                }
            });
            break;
        }
    }
    function setIcons(element, length, a) {
        var iconImage;
        var icon;
        for (var i = a; length > i; i++) {
            icon = element[i].children[0];
            iconImage = icon.icon;
            Cloud.Photos.show({
                photo_id: iconImage
            }, function(e) {
                if (e.success) {
                    var photo = e.photos[0];
                    var urlIcon = photo.urls.large_1024;
                    icon.image = urlIcon;
                    element.shift();
                    setIcons(element, length, i);
                }
            });
            break;
        }
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
    $.__views.__alloyId68 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        role: "centerWindow",
        id: "__alloyId68"
    });
    $.__views.__alloyId69 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.goToCategories = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: "280",
        id: "goToCategories"
    });
    $.__views.__alloyId70.add($.__views.goToCategories);
    $.__views.__alloyId71 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId71"
    });
    $.__views.goToCategories.add($.__views.__alloyId71);
    $.__views.containerLabelHighlight = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 30,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "containerLabelHighlight"
    });
    $.__views.__alloyId71.add($.__views.containerLabelHighlight);
    $.__views.__alloyId72 = Ti.UI.createImageView({
        image: "/images/icon-highlights.png",
        id: "__alloyId72"
    });
    $.__views.containerLabelHighlight.add($.__views.__alloyId72);
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
    $.__views.__alloyId71.add($.__views.labelSeeCategories);
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
        bottom: 20,
        backgroundColor: "white",
        id: "categories"
    });
    $.__views.__alloyId70.add($.__views.categories);
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
        width: "50%",
        id: "popularTab",
        contentTabsIndex: "0"
    });
    $.__views.tabs.add($.__views.popularTab);
    tabNavigation ? $.__views.popularTab.addEventListener("click", tabNavigation) : __defers["$.__views.popularTab!click!tabNavigation"] = true;
    $.__views.__alloyId73 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "popular",
        id: "__alloyId73"
    });
    $.__views.popularTab.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId74"
    });
    $.__views.popularTab.add($.__views.__alloyId74);
    $.__views.recentTab = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: "50%",
        id: "recentTab",
        contentTabsIndex: "1"
    });
    $.__views.tabs.add($.__views.recentTab);
    tabNavigation ? $.__views.recentTab.addEventListener("click", tabNavigation) : __defers["$.__views.recentTab!click!tabNavigation"] = true;
    $.__views.__alloyId75 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "text_new",
        id: "__alloyId75"
    });
    $.__views.recentTab.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId76"
    });
    $.__views.recentTab.add($.__views.__alloyId76);
    $.__views.contentTabs = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        id: "contentTabs",
        top: "46"
    });
    $.__views.categories.add($.__views.contentTabs);
    var __alloyId77 = [];
    $.__views.popular = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId77,
        id: "popular",
        totalChildren: "0"
    });
    $.__views.contentTabs.add($.__views.popular);
    var __alloyId78 = [];
    $.__views.recent = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId78,
        id: "recent",
        totalChildren: "0"
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
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId68 ],
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