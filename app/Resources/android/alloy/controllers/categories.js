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
        allCategories();
    }
    function allCategories() {
        Cloud.Objects.query({
            classname: "categories",
            page: 1,
            per_page: 10
        }, function(e) {
            if (e.success) {
                var total = e.categories.length;
                for (var i = 0; total > i; i++) {
                    var row = Titanium.UI.createTableViewRow({
                        index: i
                    });
                    var category = Titanium.UI.createView({
                        closed: true
                    });
                    $.addClass(category, "category");
                    var backgroundCategory = Titanium.UI.createImageView({
                        width: 320,
                        height: 220,
                        image: "/images/background-categories-soccer.jpg"
                    });
                    $.addClass(backgroundCategory, "backgroundCategory");
                    var containerTitleCategory = Titanium.UI.createView();
                    $.addClass(containerTitleCategory, "containerTitleCategory");
                    var iconCategory = Titanium.UI.createImageView({
                        image: "/images/icon-category.png"
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
                    $.listCategories.appendRow(row);
                }
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
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
        id: "__alloyId2"
    });
    $.__views.tabs.add($.__views.__alloyId2);
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
        id: "__alloyId5"
    });
    $.__views.tabs.add($.__views.__alloyId5);
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
        id: "__alloyId8"
    });
    $.__views.tabs.add($.__views.__alloyId8);
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
    $.__views.__alloyId11 = Ti.UI.createView({
        height: 46,
        width: 72,
        touchEnabled: true,
        id: "__alloyId11"
    });
    $.__views.tabs.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "suggested",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.containerSearch = Ti.UI.createView({
        backgroundColor: "#2e2e2e",
        height: 60,
        width: Titanium.UI.FILL,
        id: "containerSearch"
    });
    $.__views.__alloyId1.add($.__views.containerSearch);
    $.__views.search = Ti.UI.createTextField({
        borderRadius: 14,
        color: "#888888",
        tintColor: "#888888",
        backgroundColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        height: 30,
        width: Titanium.UI.FILL,
        left: 10,
        right: 10,
        id: "search",
        hintText: "Pesquisar"
    });
    $.__views.containerSearch.add($.__views.search);
    var __alloyId14 = [];
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        teste: "foi",
        id: "__alloyId15"
    });
    __alloyId14.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        height: 89,
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createImageView({
        left: 0,
        top: 0,
        zIndex: 0,
        image: "/images/background-categories-soccer.jpg",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        top: 25,
        id: "__alloyId20"
    });
    $.__views.__alloyId16.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "absolute",
        width: Titanium.UI.FILL,
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createImageView({
        image: "/images/icon-category.png",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ProximaNova-Regular"
        },
        left: 15,
        top: 3,
        color: "white",
        tintColor: "white",
        textid: "category_title",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        right: 20,
        top: 40,
        image: "/images/arrow-down.png",
        id: "__alloyId25"
    });
    $.__views.__alloyId16.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontSize: 12,
            fontFamily: "ProximaNova-Regular"
        },
        top: 50,
        textid: "category_description",
        id: "__alloyId26"
    });
    $.__views.__alloyId16.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundImage: "/images/background-black-transparent.png",
        height: 130,
        top: 90,
        id: "__alloyId27"
    });
    $.__views.__alloyId16.add($.__views.__alloyId27);
    var __alloyId29 = [];
    $.__views.__alloyId30 = Ti.UI.createView({
        id: "__alloyId30"
    });
    __alloyId29.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        width: Titanium.UI.SIZE,
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createButton({
        borderRadius: 14,
        color: "white",
        tintColor: "white",
        top: 15,
        width: 240,
        height: 33,
        font: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "ProximaNova-Regular"
        },
        backgroundColor: "#08ad4d",
        titleid: "new_match",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createButton({
        top: 58,
        left: 0,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        backgroundImage: "/images/background-btn-more.png",
        height: 30,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        color: "#ffffff",
        titleid: "challenge",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createButton({
        top: 58,
        right: 0,
        width: 110,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        backgroundImage: "/images/background-btn-more.png",
        height: 30,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        color: "#ffffff",
        titleid: "ranking",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        id: "__alloyId35"
    });
    __alloyId29.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        text: "Statistics",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId28 = Ti.UI.createScrollableView({
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL,
        top: 0,
        left: 0,
        showPagingControl: true,
        pagingControlColor: "transparent",
        pagingControlHeight: 40,
        overlayEnabled: true,
        views: __alloyId29,
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.listCategories = Ti.UI.createTableView({
        data: __alloyId14,
        id: "listCategories"
    });
    $.__views.__alloyId1.add($.__views.listCategories);
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
    $.listCategories.addEventListener("click", function(e) {
        e.source.classes && e.source.classes.indexOf("btnNewMatch") > -1 && Alloy.createController("roomQueue", {
            categoryId: e.source.id
        });
        if (e.row.children[0].closed) {
            e.row.children[0].closed = false;
            e.row.height = 220;
            e.row.children[0].height = 220;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;