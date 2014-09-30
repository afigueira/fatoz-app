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
    this.__controllerPath = "profile";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.profile = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.__alloyId231 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        layout: "vertical",
        id: "__alloyId231"
    });
    $.__views.profile.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        height: 231,
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId232"
    });
    $.__views.__alloyId231.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 250,
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createLabel({
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
        textid: "user_name",
        id: "__alloyId235"
    });
    $.__views.__alloyId233.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 14
        },
        height: Titanium.UI.SIZE,
        left: 74,
        top: 35,
        textid: "city_state",
        id: "__alloyId236"
    });
    $.__views.__alloyId233.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createView({
        height: 30,
        width: 250,
        top: 160,
        id: "__alloyId237"
    });
    $.__views.__alloyId232.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createButton({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        width: 100,
        height: 30,
        borderRadius: 15,
        backgroundGradient: {
            type: "linear",
            colors: [ "#49b2d3", "#3ca5c6" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: true
        },
        image: "/images/icon-follow.png",
        left: 74,
        titleid: "btn_follow",
        id: "__alloyId238"
    });
    $.__views.__alloyId237.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createButton({
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
        id: "__alloyId239"
    });
    $.__views.__alloyId237.add($.__views.__alloyId239);
    $.__views.containerTabs = Ti.UI.createView({
        height: 46,
        backgroundColor: "white",
        left: 0,
        top: 0,
        width: Titanium.UI.FILL,
        id: "containerTabs"
    });
    $.__views.__alloyId231.add($.__views.containerTabs);
    $.__views.tabs = Ti.UI.createView({
        height: 46,
        top: 0,
        left: 15,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.containerTabs.add($.__views.tabs);
    $.__views.__alloyId240 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId240"
    });
    $.__views.tabs.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "statistics",
        id: "__alloyId241"
    });
    $.__views.__alloyId240.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        id: "__alloyId242"
    });
    $.__views.__alloyId240.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId243"
    });
    $.__views.tabs.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "friends",
        id: "__alloyId244"
    });
    $.__views.__alloyId243.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId245"
    });
    $.__views.__alloyId243.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId246"
    });
    $.__views.tabs.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "rank",
        id: "__alloyId247"
    });
    $.__views.__alloyId246.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId248"
    });
    $.__views.__alloyId246.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId249"
    });
    $.__views.tabs.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "conquer",
        id: "__alloyId250"
    });
    $.__views.__alloyId249.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId251"
    });
    $.__views.__alloyId249.add($.__views.__alloyId251);
    var __alloyId253 = [];
    $.__views.__alloyId254 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId254"
    });
    __alloyId253.push($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createView({
        height: 184,
        id: "__alloyId255"
    });
    $.__views.__alloyId254.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createLabel({
        text: "Grafico 1",
        id: "__alloyId256"
    });
    $.__views.__alloyId255.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        borderWidth: 1,
        id: "__alloyId257"
    });
    $.__views.__alloyId254.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createView({
        height: 157,
        id: "__alloyId258"
    });
    $.__views.__alloyId254.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createLabel({
        text: "Grafico 2",
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        borderWidth: 1,
        id: "__alloyId260"
    });
    $.__views.__alloyId254.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createView({
        height: 200,
        backgroundColor: "#f0f0f0",
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId261"
    });
    $.__views.__alloyId254.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createView({
        height: "50%",
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId262"
    });
    $.__views.__alloyId261.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId263"
    });
    $.__views.__alloyId262.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: "25",
        id: "__alloyId264"
    });
    $.__views.__alloyId263.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
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
        id: "__alloyId265"
    });
    $.__views.__alloyId264.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "opponents",
        id: "__alloyId266"
    });
    $.__views.__alloyId264.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId267"
    });
    $.__views.__alloyId262.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: "25",
        id: "__alloyId268"
    });
    $.__views.__alloyId267.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createLabel({
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
        id: "__alloyId270"
    });
    $.__views.__alloyId269.add($.__views.__alloyId270);
    $.__views.__alloyId271 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_points",
        id: "__alloyId271"
    });
    $.__views.__alloyId269.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "average_score",
        id: "__alloyId272"
    });
    $.__views.__alloyId268.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createView({
        height: "50%",
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId273"
    });
    $.__views.__alloyId261.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId274"
    });
    $.__views.__alloyId273.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: "25",
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId276"
    });
    $.__views.__alloyId275.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "0,8",
        id: "__alloyId277"
    });
    $.__views.__alloyId276.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_monday",
        id: "__alloyId278"
    });
    $.__views.__alloyId276.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "average_response_time",
        id: "__alloyId279"
    });
    $.__views.__alloyId275.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId280"
    });
    $.__views.__alloyId273.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: "25",
        id: "__alloyId281"
    });
    $.__views.__alloyId280.add($.__views.__alloyId281);
    $.__views.__alloyId282 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId282"
    });
    $.__views.__alloyId281.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId283"
    });
    $.__views.__alloyId282.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "8",
        id: "__alloyId284"
    });
    $.__views.__alloyId283.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_hour",
        id: "__alloyId285"
    });
    $.__views.__alloyId283.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId286"
    });
    $.__views.__alloyId282.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "32",
        id: "__alloyId287"
    });
    $.__views.__alloyId286.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_minute",
        id: "__alloyId288"
    });
    $.__views.__alloyId286.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "total_play_time",
        id: "__alloyId289"
    });
    $.__views.__alloyId281.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId290"
    });
    __alloyId253.push($.__views.__alloyId290);
    $.__views.containerSearch = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        backgroundColor: "#2e2e2e",
        id: "containerSearch"
    });
    $.__views.__alloyId290.add($.__views.containerSearch);
    $.__views.search = Ti.UI.createTextField({
        borderRadius: 14,
        color: "#888888",
        tintColor: "#888888",
        backgroundColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        id: "search",
        hintText: "Pesquisar"
    });
    $.__views.containerSearch.add($.__views.search);
    var __alloyId291 = [];
    $.__views.__alloyId292 = Ti.UI.createTableViewRow({
        id: "__alloyId292"
    });
    __alloyId291.push($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        top: 10,
        bottom: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId293"
    });
    $.__views.__alloyId292.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createLabel({
        left: 94,
        text: "Rafael Costa",
        id: "__alloyId294"
    });
    $.__views.__alloyId292.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createTableViewRow({
        id: "__alloyId295"
    });
    __alloyId291.push($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        top: 10,
        bottom: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createLabel({
        left: 94,
        text: "Rafael Costa",
        id: "__alloyId297"
    });
    $.__views.__alloyId295.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createTableViewRow({
        id: "__alloyId298"
    });
    __alloyId291.push($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        top: 10,
        bottom: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createLabel({
        left: 94,
        text: "Rafael Costa",
        id: "__alloyId300"
    });
    $.__views.__alloyId298.add($.__views.__alloyId300);
    $.__views.friends = Ti.UI.createTableView({
        data: __alloyId291,
        id: "friends"
    });
    $.__views.__alloyId290.add($.__views.friends);
    $.__views.__alloyId301 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId301"
    });
    __alloyId253.push($.__views.__alloyId301);
    var __alloyId302 = [];
    $.__views.__alloyId303 = Ti.UI.createTableViewRow({
        id: "__alloyId303"
    });
    __alloyId302.push($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createLabel({
        width: 50,
        left: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "1.",
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 50,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId305"
    });
    $.__views.__alloyId303.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createLabel({
        left: 124,
        text: "Rafael Costa",
        id: "__alloyId306"
    });
    $.__views.__alloyId303.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        right: 10,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId307"
    });
    $.__views.__alloyId303.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
        textid: "abbreviation_points",
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createLabel({
        text: "12.156",
        id: "__alloyId309"
    });
    $.__views.__alloyId307.add($.__views.__alloyId309);
    $.__views.rank = Ti.UI.createTableView({
        data: __alloyId302,
        id: "rank"
    });
    $.__views.__alloyId301.add($.__views.rank);
    $.__views.__alloyId310 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId310"
    });
    __alloyId253.push($.__views.__alloyId310);
    var __alloyId311 = [];
    $.__views.__alloyId312 = Ti.UI.createTableViewRow({
        id: "__alloyId312"
    });
    __alloyId311.push($.__views.__alloyId312);
    $.__views.__alloyId313 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        top: 10,
        bottom: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId313"
    });
    $.__views.__alloyId312.add($.__views.__alloyId313);
    $.__views.__alloyId314 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        left: 84,
        layout: "vertical",
        id: "__alloyId314"
    });
    $.__views.__alloyId312.add($.__views.__alloyId314);
    $.__views.__alloyId315 = Ti.UI.createLabel({
        left: 0,
        text: "Mestre da Quimica",
        id: "__alloyId315"
    });
    $.__views.__alloyId314.add($.__views.__alloyId315);
    $.__views.__alloyId316 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId316"
    });
    $.__views.__alloyId314.add($.__views.__alloyId316);
    $.__views.__alloyId317 = Ti.UI.createLabel({
        text: "182",
        id: "__alloyId317"
    });
    $.__views.__alloyId316.add($.__views.__alloyId317);
    $.__views.__alloyId318 = Ti.UI.createLabel({
        text: "Pontos em Ciência",
        id: "__alloyId318"
    });
    $.__views.__alloyId316.add($.__views.__alloyId318);
    $.__views.__alloyId319 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId319"
    });
    $.__views.__alloyId314.add($.__views.__alloyId319);
    $.__views.__alloyId320 = Ti.UI.createLabel({
        text: "100%",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.__alloyId321 = Ti.UI.createView({
        height: 5,
        width: 100,
        backgroundColor: "red",
        id: "__alloyId321"
    });
    $.__views.__alloyId319.add($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: 60,
        backgrounColor: "green",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    $.__views.conquer = Ti.UI.createTableView({
        data: __alloyId311,
        id: "conquer"
    });
    $.__views.__alloyId310.add($.__views.conquer);
    $.__views.__alloyId252 = Ti.UI.createScrollableView({
        views: __alloyId253,
        id: "__alloyId252"
    });
    $.__views.__alloyId231.add($.__views.__alloyId252);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.profile.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;