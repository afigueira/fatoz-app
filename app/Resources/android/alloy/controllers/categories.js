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
    }
    function getCategories(element, param) {
        Cloud.Objects.query(param, function(e) {
            if (e.success) {
                var total = e.categories.length;
                for (var i = 0; total > i; i++) {
                    var row = Titanium.UI.createView({
                        height: Titanium.UI.SIZE,
                        title: e.categories[i].title,
                        categories_id: e.categories[i].id
                    });
                    var category = Titanium.UI.createView();
                    $.addClass(category, "category");
                    var backgroundCategory = Titanium.UI.createImageView({
                        width: Titanium.UI.FILL,
                        height: 220,
                        background: e.categories[i].background,
                        backgroundImage: "https://s3-us-west-1.amazonaws.com/storage.cloud.appcelerator.com/Sg2e4ptGlzUPVVvGfWUotUGeq72dkPeH/photos/da/61/5456cede7c874208ad0006b1/bg_entretenimento_square_75.jpg"
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
                    var btnRanking = Titanium.UI.createButton({
                        titleid: "ranking",
                        categories_id: e.categories[i].id
                    });
                    $.addClass(btnRanking, "btnWhite btnRanking");
                    var widthUiSize = Titanium.UI.createView();
                    $.addClass(widthUiSize, "widthUiSize");
                    widthUiSize.add(btnNewMatch);
                    widthUiSize.add(btnRanking);
                    insideScrollable.add(widthUiSize);
                    var insideScrollable2 = Titanium.UI.createView();
                    $.addClass(insideScrollable2, "insideScrollable");
                    var webView = Titanium.UI.createWebView({
                        url: "https://1f0b6fd33fa8afdb54e5479c5a17447732b25d68.cloudapp.appcelerator.com/piechart",
                        scalesPageToFit: true
                    });
                    insideScrollable2.add(webView);
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
                    category.add(backgroundCategory);
                    category.add(containerTitleCategory);
                    category.add(arrowDown);
                    descriptionCategory.text = e.categories[i].description;
                    category.add(descriptionCategory);
                    category.add(actionsCategory);
                    var toggle = Titanium.UI.createView({
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 200,
                        layout: "absolute",
                        height: 89,
                        closed: true
                    });
                    $.addClass(toggle, "toggle");
                    row.add(category);
                    row.add(toggle);
                    element.add(row);
                }
                setBackgrounds(element.children, element.children.length, 0);
                setIcons(element.children, element.children.length, 0);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
        element.addEventListener("click", function(e) {
            if (e.source.classes) {
                e.source.classes.indexOf("btnNewMatch") > -1 && Alloy.createController("roomQueue", {
                    categoryId: e.source.id
                });
                e.source.classes && e.source.classes.indexOf("btnRanking") > -1 && Alloy.createController("ranking", {
                    categoryId: e.source.categories_id
                });
                if (e.source.classes.indexOf("toggle") > -1) if (e.row.children[0].closed) {
                    e.row.children[0].closed = false;
                    e.row.children[0].height = 220;
                    e.row.height = 220;
                } else {
                    e.row.children[0].closed = true;
                    e.row.children[0].height = 89;
                    e.row.height = 89;
                }
            }
        });
    }
    function setBackgrounds(element, length, a) {
        var backgroundImage;
        var image;
        for (var i = a; length > i; i++) {
            image = element[i].children[0].children[0];
            backgroundImage = image.background;
            Cloud.Photos.show({
                photo_id: backgroundImage
            }, function(e) {
                if (e.success) {
                    var photo = e.photos[0];
                    var urlImage = photo.urls.original;
                    console.log("imagens: ", photo.urls);
                    image.image = urlImage;
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
            icon = element[i].children[0].children[1].children[0].children[0].children[0];
            iconImage = icon.icon;
            Cloud.Photos.show({
                photo_id: iconImage
            }, function(e) {
                if (e.success) {
                    var photo = e.photos[0];
                    var urlIcon = photo.urls.original;
                    icon.image = urlIcon;
                    element.shift();
                    setIcons(element, length, i);
                }
            });
            break;
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
    $.__views.sidebar = require("xp.ui").createWindow({
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.__alloyId0 = require("xp.ui").createWindow({
        role: "centerWindow",
        id: "__alloyId0"
    });
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.allCategories = Ti.UI.createScrollView({
        layout: "vertical",
        width: Titanium.UI.SIZE,
        id: "allCategories"
    });
    $.__views.__alloyId2.add($.__views.allCategories);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;