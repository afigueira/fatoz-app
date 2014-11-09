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
        for (var i = 0, j = $.contentTabs.children.length; j > i; i++) $.contentTabs.children[i].visible = false;
        $.contentTabs.children[0].visible = true;
        $.tabs.children[0].children[1].visible = true;
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
    function getCategories(element, obj) {
        Alloy.Globals.Cloud.Objects.query(obj, function(e) {
            if (e.success) {
                var views = createRowCategories(e.categories);
                element.views = views;
                setBackgrounds(element.views, element.views.length, 0);
                setIcons(element.views, element.views.length, 0);
            } else alert("Houve um erro para carregar as categorias");
        });
    }
    function setBackgrounds(element, length, a) {
        var backgroundImage;
        var image;
        image = element[a];
        backgroundImage = image.background;
        Alloy.Globals.Cloud.Photos.show({
            photo_id: backgroundImage
        }, function(e) {
            if (e.success) {
                var photo = e.photos[0];
                var urlImage = photo.urls.original;
                image.backgroundImage = urlImage;
                length - 1 > a && setBackgrounds(element, length, ++a);
            }
        });
    }
    function setIcons(element, length, a) {
        var iconImage;
        var icon;
        icon = element[a].children[0];
        iconImage = icon.icon;
        Alloy.Globals.Cloud.Photos.show({
            photo_id: iconImage
        }, function(e) {
            if (e.success) {
                var photo = e.photos[0];
                var urlIcon = photo.urls.original;
                icon.image = urlIcon;
                length - 1 > a && setIcons(element, length, ++a);
            }
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
    $.__views.__alloyId53 = require("xp.ui").createWindow({
        role: "centerWindow",
        title: "Início",
        id: "__alloyId53"
    });
    $.__views.__alloyId54 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        top: Alloy.Globals.marginTopWindow,
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.goToCategories = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "absolute",
        width: "280",
        id: "goToCategories"
    });
    $.__views.__alloyId55.add($.__views.goToCategories);
    $.__views.__alloyId56 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId56"
    });
    $.__views.goToCategories.add($.__views.__alloyId56);
    $.__views.containerLabelHighlight = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 30,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "containerLabelHighlight"
    });
    $.__views.__alloyId56.add($.__views.containerLabelHighlight);
    $.__views.__alloyId57 = Ti.UI.createImageView({
        image: "/images/icon-highlights.png",
        id: "__alloyId57"
    });
    $.__views.containerLabelHighlight.add($.__views.__alloyId57);
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
    $.__views.__alloyId56.add($.__views.labelSeeCategories);
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
    $.__views.__alloyId55.add($.__views.categories);
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
    $.__views.__alloyId58 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "popular",
        id: "__alloyId58"
    });
    $.__views.popularTab.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        left: 10,
        right: 10,
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId59"
    });
    $.__views.popularTab.add($.__views.__alloyId59);
    $.__views.recentTab = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: "50%",
        id: "recentTab",
        contentTabsIndex: "1"
    });
    $.__views.tabs.add($.__views.recentTab);
    tabNavigation ? $.__views.recentTab.addEventListener("click", tabNavigation) : __defers["$.__views.recentTab!click!tabNavigation"] = true;
    $.__views.__alloyId60 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "text_new",
        id: "__alloyId60"
    });
    $.__views.recentTab.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        left: 10,
        right: 10,
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId61"
    });
    $.__views.recentTab.add($.__views.__alloyId61);
    $.__views.contentTabs = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        id: "contentTabs",
        top: "46"
    });
    $.__views.categories.add($.__views.contentTabs);
    var __alloyId62 = [];
    $.__views.popular = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: 344,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 30,
        overlayEnabled: true,
        views: __alloyId62,
        id: "popular"
    });
    $.__views.contentTabs.add($.__views.popular);
    var __alloyId63 = [];
    $.__views.recent = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: 344,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 30,
        overlayEnabled: true,
        views: __alloyId63,
        id: "recent"
    });
    $.__views.contentTabs.add($.__views.recent);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId53 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.drawer($.sidebar, $.drawer, "Início", init);
    $.categories.addEventListener("click", function(e) {
        if (e.source.classes) {
            if (e.source.classes.indexOf("btnNewMatch") > -1) {
                Alloy.createController("roomQueue", {
                    categoryId: e.source.id
                });
                $.destroy();
            }
            if (e.source.classes.indexOf("btnRanking") > -1) {
                Alloy.createController("ranking", {
                    categoryId: e.source.id
                });
                $.destroy();
            }
        }
    });
    $.goToCategories.addEventListener("click", function() {
        Alloy.createController("categories");
        $.destroy();
    });
    __defers["$.__views.popularTab!click!tabNavigation"] && $.__views.popularTab.addEventListener("click", tabNavigation);
    __defers["$.__views.recentTab!click!tabNavigation"] && $.__views.recentTab.addEventListener("click", tabNavigation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;