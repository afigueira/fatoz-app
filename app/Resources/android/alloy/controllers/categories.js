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
        getCategories($.allCategories, {
            classname: "categories",
            page: 1,
            per_page: 10
        });
        getCategories($.popularCategories, {
            classname: "categories",
            page: 1,
            per_page: 10,
            where: {
                is_popular: 1
            }
        });
        getCategories($.recentCategories, {
            classname: "categories",
            page: 1,
            per_page: 10,
            where: {
                is_recent: 1
            }
        });
        pagination();
    }
    function pagination() {
        $.contentTabs.addEventListener("scrollend", function(e) {
            for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
            $.tabs.children[e.currentPage].children[1].visible = true;
        });
    }
    function tabNavigation(e) {
        var contentTabsIndex = e.source.contentTabsIndex;
        $.contentTabs.scrollToView(Number(contentTabsIndex));
        for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
        $.tabs.children[contentTabsIndex].children[1].visible = true;
    }
    function getCategories(element, param) {
        Cloud.Objects.query(param, function(e) {
            if (e.success) {
                var total = e.categories.length;
                for (var i = 0; total > i; i++) {
                    var row = Titanium.UI.createTableViewRow({
                        title: e.categories[i].title
                    });
                    var category = Titanium.UI.createView({
                        closed: true
                    });
                    $.addClass(category, "category");
                    var backgroundCategory = Titanium.UI.createImageView({
                        width: 320,
                        height: 220,
                        background: e.categories[i].background
                    });
                    $.addClass(backgroundCategory, "backgroundCategory");
                    console.log("background", e.categories[i].background);
                    console.log("ID Categoria: ", e.categories[i].id);
                    console.log("Nome Categoria: ", e.categories[i].title);
                    var containerTitleCategory = Titanium.UI.createView();
                    $.addClass(containerTitleCategory, "containerTitleCategory");
                    var iconCategory = Titanium.UI.createImageView({
                        icon: e.categories[i].icon,
                        width: 16,
                        height: 16
                    });
                    var titleCategory = Titanium.UI.createLabel();
                    $.addClass(titleCategory, "titleCategory fontWhite proximaNovaRegular");
                    var arrowDown = Titanium.UI.createImageView({
                        image: "/images/arrow-down.png"
                    });
                    $.addClass(arrowDown, "arrowCategory");
                    var descriptionCategory = Titanium.UI.createLabel();
                    $.addClass(descriptionCategory, "descriptionCategory fontWhite proximaNovaRegular");
                    var actionsCategory = Titanium.UI.createView();
                    $.addClass(actionsCategory, "actionsCategory");
                    var insideScrollable = Titanium.UI.createView();
                    $.addClass(insideScrollable, "insideScrollable");
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
                        titleid: "ranking"
                    });
                    $.addClass(btnRanking, "btnWhite btnRanking");
                    var widthUiSize = Titanium.UI.createView();
                    $.addClass(widthUiSize, "widthUiSize");
                    widthUiSize.add(btnNewMatch);
                    widthUiSize.add(btnChallenge);
                    widthUiSize.add(btnRanking);
                    insideScrollable.add(widthUiSize);
                    var insideScrollable2 = Titanium.UI.createView();
                    $.addClass(insideScrollable2, "insideScrollable");
                    var Statistics = Titanium.UI.createLabel({
                        text: "estatisticas"
                    });
                    $.addClass(Statistics, "fontWhite");
                    insideScrollable2.add(Statistics);
                    var ScrollableView = Titanium.UI.createScrollableView({
                        views: [ insideScrollable, insideScrollable2 ]
                    });
                    actionsCategory.add(ScrollableView);
                    var layoutAbsolute = Titanium.UI.createView();
                    $.addClass(layoutAbsolute, "layoutAbsolute");
                    var layoutHorizontal = Titanium.UI.createView();
                    $.addClass(layoutHorizontal, "layoutHorizontal");
                    layoutHorizontal.add(iconCategory);
                    titleCategory.text = e.categories[i].title;
                    layoutHorizontal.add(titleCategory);
                    layoutAbsolute.add(layoutHorizontal);
                    containerTitleCategory.add(layoutAbsolute);
                    var layoutAbsolute = Titanium.UI.createView();
                    $.addClass(layoutAbsolute, "layoutAbsolute");
                    var layoutHorizontal = Titanium.UI.createView();
                    $.addClass(layoutHorizontal, "layoutHorizontal");
                    layoutHorizontal.add(backgroundCategory);
                    layoutAbsolute.add(layoutHorizontal);
                    category.add(layoutAbsolute);
                    category.add(containerTitleCategory);
                    category.add(arrowDown);
                    descriptionCategory.text = e.categories[i].description;
                    category.add(descriptionCategory);
                    category.add(actionsCategory);
                    row.add(category);
                    element.appendRow(row);
                }
                setImages(element);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function setImages(element) {
        var length = element.data[0].rows.length;
        var backgroundImage;
        var iconImage;
        var image;
        var icon;
        var queuedBackground = [];
        var queuedIcon = [];
        for (var i = 0; length > i; i++) {
            image = element.data[0].rows[i].children[0].children[0].children[0].children[0];
            backgroundImage = image.background;
            icon = element.data[0].rows[i].children[0].children[1].children[0].children[0].children[0];
            iconImage = icon.icon;
            if (backgroundImage) {
                queuedBackground.push(image);
                console.log("guarda index", i);
                Cloud.Photos.show({
                    photo_id: backgroundImage
                }, function(e) {
                    if (e.success) {
                        var photo = e.photos[0];
                        var urlImage = photo.urls.square_75;
                        console.log("imagens: ", photo.urls);
                        queuedBackground.shift().image = urlImage;
                        console.log("guarda index2", i);
                    }
                });
            }
            if (iconImage) {
                queuedIcon.push(icon);
                Cloud.Photos.query({
                    where: {
                        id: iconImage
                    }
                }, function(e) {
                    if (e.success) for (var i = 0; e.photos.length > i; i++) {
                        var photo = e.photos[i];
                        var urlIcon = photo.urls.square_75;
                        queuedIcon[0].image = urlIcon;
                        queuedIcon.shift();
                    }
                });
            }
            console.log("-------------------------------------------------------");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categories";
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
    $.__views.__alloyId0 = Ti.UI.createView({
        role: "centerWindow",
        id: "__alloyId0"
    });
    $.__views.__alloyId1 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.containerTabs = Ti.UI.createView({
        backgroundColor: "white",
        height: 46,
        left: 0,
        top: 0,
        width: Titanium.UI.FILL,
        id: "containerTabs"
    });
    $.__views.__alloyId1.add($.__views.containerTabs);
    $.__views.tabs = Ti.UI.createView({
        top: 0,
        left: 15,
        height: 46,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.containerTabs.add($.__views.tabs);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: 46,
        width: 72,
        touchEnabled: true,
        contentTabsIndex: "0",
        id: "__alloyId2"
    });
    $.__views.tabs.add($.__views.__alloyId2);
    tabNavigation ? $.__views.__alloyId2.addEventListener("click", tabNavigation) : __defers["$.__views.__alloyId2!click!tabNavigation"] = true;
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "all",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        height: 46,
        width: 72,
        touchEnabled: true,
        contentTabsIndex: "1",
        id: "__alloyId5"
    });
    $.__views.tabs.add($.__views.__alloyId5);
    tabNavigation ? $.__views.__alloyId5.addEventListener("click", tabNavigation) : __defers["$.__views.__alloyId5!click!tabNavigation"] = true;
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "popular",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: 46,
        width: 72,
        touchEnabled: true,
        contentTabsIndex: "2",
        id: "__alloyId8"
    });
    $.__views.tabs.add($.__views.__alloyId8);
    tabNavigation ? $.__views.__alloyId8.addEventListener("click", tabNavigation) : __defers["$.__views.__alloyId8!click!tabNavigation"] = true;
    $.__views.__alloyId9 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "text_new",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    var __alloyId11 = [];
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId12"
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.Android.createSearchView({
        backgroundColor: "#ffffff",
        id: "__alloyId13"
    });
    $.__views.allCategories = Ti.UI.createTableView({
        search: $.__views.__alloyId13,
        id: "allCategories"
    });
    $.__views.__alloyId12.add($.__views.allCategories);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId14"
    });
    __alloyId11.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.Android.createSearchView({
        backgroundColor: "#ffffff",
        id: "__alloyId15"
    });
    $.__views.popularCategories = Ti.UI.createTableView({
        search: $.__views.__alloyId15,
        id: "popularCategories"
    });
    $.__views.__alloyId14.add($.__views.popularCategories);
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId16"
    });
    __alloyId11.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.Android.createSearchView({
        backgroundColor: "#ffffff",
        id: "__alloyId17"
    });
    $.__views.recentCategories = Ti.UI.createTableView({
        search: $.__views.__alloyId17,
        id: "recentCategories"
    });
    $.__views.__alloyId16.add($.__views.recentCategories);
    $.__views.contentTabs = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId11,
        id: "contentTabs"
    });
    $.__views.__alloyId1.add($.__views.contentTabs);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId0 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("alloy").Globals.drawer($.sidebar, $.drawer, "Categorias", init());
    $.allCategories.addEventListener("click", function(e) {
        e.source.classes && e.source.classes.indexOf("btnNewMatch") > -1 && Alloy.createController("roomQueue", {
            categoryId: e.source.id
        });
        if (e.row.children[0].closed) {
            e.row.children[0].closed = false;
            e.row.height = 220;
            e.row.children[0].height = 220;
        }
    });
    __defers["$.__views.__alloyId2!click!tabNavigation"] && $.__views.__alloyId2.addEventListener("click", tabNavigation);
    __defers["$.__views.__alloyId5!click!tabNavigation"] && $.__views.__alloyId5.addEventListener("click", tabNavigation);
    __defers["$.__views.__alloyId8!click!tabNavigation"] && $.__views.__alloyId8.addEventListener("click", tabNavigation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;