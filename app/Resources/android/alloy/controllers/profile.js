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
        "undefined" != typeof args.scrollToView && tabNavigation({
            source: {
                contentTabsIndex: args.scrollToView
            }
        });
    }
    function tabNavigation(e) {
        var contentTabsIndex = e.source.contentTabsIndex;
        $.contentTabs.scrollToView(Number(contentTabsIndex));
        for (var i = 0, j = $.tabs.children.length; j > i; i++) $.tabs.children[i].children[1].visible = false;
        $.tabs.children[contentTabsIndex].children[1].visible = true;
    }
    function myInfos() {
        Cloud.Users.showMe(function(e) {
            if (e.success) {
                var user = e.users[0];
                $.userName.text = user.first_name + " " + user.last_name;
                Cloud.Objects.query({
                    classname: "cities",
                    page: 1,
                    per_page: 1,
                    where: {
                        id: user.cities_id
                    }
                }, function(e) {
                    if (e.success) {
                        var city = e.cities[0].name;
                        Cloud.Objects.query({
                            classname: "states",
                            page: 1,
                            per_page: 1,
                            where: {
                                states_id: e.cities[0].states_id
                            }
                        }, function(e) {
                            e.success ? $.cityState.text = city + ", " + e.states[0].name : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
                        });
                    } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
                });
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function achievements() {
        Cloud.Objects.query({
            classname: "categories"
        }, function(e) {
            if (e.success) {
                var categories = e.categories;
                console.log("categories ----->", e.categories);
                for (var i = 0, j = e.categories.length; j > i; i++) {
                    var rowConquer = Titanium.UI.createTableViewRow();
                    $.addClass(rowConquer, "rowConquer");
                    var imageConquer = Titanium.UI.createImageView({
                        image: "/images/conquer-master-of-chemistry.png"
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
                    $.conquer.appendRow(rowConquer);
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
            Cloud.Objects.query({
                classname: "achievements",
                where: {
                    categories_id: categoriesId,
                    users_id: Ti.App.Properties.getString("userId")
                }
            }, function(e) {
                if (e.success) {
                    var achievement = e.achievements[0];
                    label.text = achievement.points + " de " + pointsToBadge;
                    percentBar.width = 100 * achievement.points / pointsToBadge + "%";
                    percent.text = 100 * achievement.points / pointsToBadge + "%";
                    element.shift();
                    setPointsAchievements(element, length, i);
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
    var __defers = {};
    $.__views.sidebar = require("xp.ui").createWindow({
        role: "leftWindow",
        id: "sidebar"
    });
    $.__views.__alloyId91 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        role: "centerWindow",
        id: "__alloyId91"
    });
    $.__views.__alloyId92 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        layout: "vertical",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        height: 231,
        backgroundImage: "/images/background-categories-soccer.jpg",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 250,
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "/images/icon-user.png",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
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
    $.__views.__alloyId94.add($.__views.userName);
    $.__views.cityState = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14
        },
        height: Titanium.UI.SIZE,
        left: 74,
        top: 35,
        id: "cityState"
    });
    $.__views.__alloyId94.add($.__views.cityState);
    $.__views.__alloyId96 = Ti.UI.createView({
        height: 30,
        width: 250,
        top: 160,
        id: "__alloyId96"
    });
    $.__views.__alloyId93.add($.__views.__alloyId96);
    $.__views.settings = Ti.UI.createButton({
        color: "white",
        tintColor: "white",
        borderColor: "white",
        borderWidth: 1,
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        width: 50,
        height: 30,
        borderRadius: 15,
        image: "/images/icon-more.png",
        backgroundImage: "/images/background-btn-more.png",
        right: 10,
        id: "settings"
    });
    $.__views.__alloyId96.add($.__views.settings);
    $.__views.containerTabs = Ti.UI.createView({
        height: 46,
        backgroundColor: "white",
        left: 0,
        top: 0,
        width: Titanium.UI.FILL,
        id: "containerTabs"
    });
    $.__views.__alloyId92.add($.__views.containerTabs);
    $.__views.tabs = Ti.UI.createView({
        height: 46,
        top: 0,
        left: 15,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.containerTabs.add($.__views.tabs);
    $.__views.__alloyId97 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 72,
        contentTabsIndex: "0",
        id: "__alloyId97"
    });
    $.__views.tabs.add($.__views.__alloyId97);
    tabNavigation ? $.__views.__alloyId97.addEventListener("click", tabNavigation) : __defers["$.__views.__alloyId97!click!tabNavigation"] = true;
    $.__views.__alloyId98 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "statistics",
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId99"
    });
    $.__views.__alloyId97.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 72,
        contentTabsIndex: "1",
        id: "__alloyId100"
    });
    $.__views.tabs.add($.__views.__alloyId100);
    tabNavigation ? $.__views.__alloyId100.addEventListener("click", tabNavigation) : __defers["$.__views.__alloyId100!click!tabNavigation"] = true;
    $.__views.__alloyId101 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "friends",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId102"
    });
    $.__views.__alloyId100.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 72,
        contentTabsIndex: "2",
        id: "__alloyId103"
    });
    $.__views.tabs.add($.__views.__alloyId103);
    tabNavigation ? $.__views.__alloyId103.addEventListener("click", tabNavigation) : __defers["$.__views.__alloyId103!click!tabNavigation"] = true;
    $.__views.__alloyId104 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "rank",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId105"
    });
    $.__views.__alloyId103.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 72,
        contentTabsIndex: "3",
        id: "__alloyId106"
    });
    $.__views.tabs.add($.__views.__alloyId106);
    tabNavigation ? $.__views.__alloyId106.addEventListener("click", tabNavigation) : __defers["$.__views.__alloyId106!click!tabNavigation"] = true;
    $.__views.__alloyId107 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "conquer",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId108"
    });
    $.__views.__alloyId106.add($.__views.__alloyId108);
    var __alloyId109 = [];
    $.__views.__alloyId110 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId110"
    });
    __alloyId109.push($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        height: 184,
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createWebView({
        url: "https://1f0b6fd33fa8afdb54e5479c5a17447732b25d68.cloudapp.appcelerator.com/piechart",
        scalesPageToFit: "true",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        id: "__alloyId113"
    });
    $.__views.__alloyId110.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        height: 157,
        id: "__alloyId114"
    });
    $.__views.__alloyId110.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createWebView({
        url: "https://1f0b6fd33fa8afdb54e5479c5a17447732b25d68.cloudapp.appcelerator.com/piechart",
        scalesPageToFit: "true",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        id: "__alloyId116"
    });
    $.__views.__alloyId110.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        height: 200,
        backgroundColor: "#f0f0f0",
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId117"
    });
    $.__views.__alloyId110.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        height: "50%",
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        text: "684",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "opponents",
        id: "__alloyId122"
    });
    $.__views.__alloyId120.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId123"
    });
    $.__views.__alloyId118.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 30,
            fontWeight: "bold"
        },
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        text: "684",
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_points",
        id: "__alloyId127"
    });
    $.__views.__alloyId125.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "average_score",
        id: "__alloyId128"
    });
    $.__views.__alloyId124.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createView({
        height: "50%",
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId129"
    });
    $.__views.__alloyId117.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "0,8",
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_monday",
        id: "__alloyId134"
    });
    $.__views.__alloyId132.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "average_response_time",
        id: "__alloyId135"
    });
    $.__views.__alloyId131.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId136"
    });
    $.__views.__alloyId129.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "8",
        id: "__alloyId140"
    });
    $.__views.__alloyId139.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_hour",
        id: "__alloyId141"
    });
    $.__views.__alloyId139.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId142"
    });
    $.__views.__alloyId138.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "32",
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_minute",
        id: "__alloyId144"
    });
    $.__views.__alloyId142.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "total_play_time",
        id: "__alloyId145"
    });
    $.__views.__alloyId137.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#f0f0f0",
        id: "__alloyId146"
    });
    __alloyId109.push($.__views.__alloyId146);
    $.__views.containerSearch = Ti.UI.createView({
        height: 60,
        backgroundColor: "#888888",
        width: Titanium.UI.FILL,
        id: "containerSearch"
    });
    $.__views.__alloyId146.add($.__views.containerSearch);
    $.__views.__alloyId147 = Ti.UI.createImageView({
        image: "/images/icon-search.png",
        top: "0",
        left: "0",
        zIndex: "100",
        id: "__alloyId147"
    });
    $.__views.containerSearch.add($.__views.__alloyId147);
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
    var __alloyId149 = [];
    $.__views.__alloyId150 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId150"
    });
    __alloyId149.push($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createImageView({
        width: 45,
        height: 45,
        borderRadius: 23,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        backgroundImage: "/images/icon-user.png",
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 20
        },
        left: 65,
        color: "#383838",
        text: "Tomas Lau",
        id: "__alloyId152"
    });
    $.__views.__alloyId150.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId153"
    });
    $.__views.__alloyId150.add($.__views.__alloyId153);
    $.__views.__alloyId148 = Ti.UI.createTableView({
        data: __alloyId149,
        id: "__alloyId148"
    });
    $.__views.__alloyId146.add($.__views.__alloyId148);
    $.__views.__alloyId154 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#f0f0f0",
        id: "__alloyId154"
    });
    __alloyId109.push($.__views.__alloyId154);
    var __alloyId156 = [];
    $.__views.__alloyId157 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId157"
    });
    __alloyId156.push($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        width: 50,
        left: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#888888",
        text: "1.",
        id: "__alloyId158"
    });
    $.__views.__alloyId157.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createImageView({
        width: 29,
        height: 29,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 50,
        backgroundImage: "/images/icon-user.png",
        id: "__alloyId159"
    });
    $.__views.__alloyId157.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        left: 94,
        color: "#383838",
        text: "Rafael Costas",
        id: "__alloyId160"
    });
    $.__views.__alloyId157.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        right: 20,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId161"
    });
    $.__views.__alloyId157.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#666666",
        textid: "abbreviation_points",
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#e33124",
        text: "12.156",
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId164"
    });
    $.__views.__alloyId157.add($.__views.__alloyId164);
    $.__views.__alloyId155 = Ti.UI.createTableView({
        data: __alloyId156,
        id: "__alloyId155"
    });
    $.__views.__alloyId154.add($.__views.__alloyId155);
    $.__views.__alloyId165 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#f0f0f0",
        id: "__alloyId165"
    });
    __alloyId109.push($.__views.__alloyId165);
    $.__views.conquer = Ti.UI.createTableView({
        id: "conquer"
    });
    $.__views.__alloyId165.add($.__views.conquer);
    $.__views.contentTabs = Ti.UI.createScrollableView({
        views: __alloyId109,
        id: "contentTabs"
    });
    $.__views.__alloyId92.add($.__views.contentTabs);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId91 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    require("alloy").Globals.drawer($.sidebar, $.drawer, "Perfil", init());
    $.settings.addEventListener("click", function() {
        Alloy.createController("settings");
    });
    __defers["$.__views.__alloyId97!click!tabNavigation"] && $.__views.__alloyId97.addEventListener("click", tabNavigation);
    __defers["$.__views.__alloyId100!click!tabNavigation"] && $.__views.__alloyId100.addEventListener("click", tabNavigation);
    __defers["$.__views.__alloyId103!click!tabNavigation"] && $.__views.__alloyId103.addEventListener("click", tabNavigation);
    __defers["$.__views.__alloyId106!click!tabNavigation"] && $.__views.__alloyId106.addEventListener("click", tabNavigation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;