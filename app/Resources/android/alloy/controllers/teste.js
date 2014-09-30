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
    this.__controllerPath = "teste";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.teste = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "teste"
    });
    $.__views.teste && $.addTopLevelView($.__views.teste);
    $.__views.__alloyId330 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId330"
    });
    $.__views.teste.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createView({
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId331"
    });
    $.__views.__alloyId330.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createView({
        id: "__alloyId332"
    });
    $.__views.__alloyId331.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId333"
    });
    $.__views.__alloyId332.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "user_name",
        id: "__alloyId334"
    });
    $.__views.__alloyId332.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "city_state",
        id: "__alloyId335"
    });
    $.__views.__alloyId332.add($.__views.__alloyId335);
    $.__views.__alloyId336 = Ti.UI.createView({
        id: "__alloyId336"
    });
    $.__views.__alloyId331.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createButton({
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
        titleid: "btn_follow",
        id: "__alloyId337"
    });
    $.__views.__alloyId336.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createButton({
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
        id: "__alloyId338"
    });
    $.__views.__alloyId336.add($.__views.__alloyId338);
    $.__views.containerTabs = Ti.UI.createView({
        backgroundColor: "white",
        id: "containerTabs"
    });
    $.__views.__alloyId330.add($.__views.containerTabs);
    $.__views.tabs = Ti.UI.createView({
        id: "tabs"
    });
    $.__views.containerTabs.add($.__views.tabs);
    $.__views.__alloyId339 = Ti.UI.createView({
        id: "__alloyId339"
    });
    $.__views.tabs.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "statistics",
        id: "__alloyId340"
    });
    $.__views.__alloyId339.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        id: "__alloyId341"
    });
    $.__views.__alloyId339.add($.__views.__alloyId341);
    $.__views.__alloyId342 = Ti.UI.createView({
        id: "__alloyId342"
    });
    $.__views.tabs.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "friends",
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId344"
    });
    $.__views.__alloyId342.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createView({
        id: "__alloyId345"
    });
    $.__views.tabs.add($.__views.__alloyId345);
    $.__views.__alloyId346 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "rank",
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId347"
    });
    $.__views.__alloyId345.add($.__views.__alloyId347);
    $.__views.__alloyId348 = Ti.UI.createView({
        id: "__alloyId348"
    });
    $.__views.tabs.add($.__views.__alloyId348);
    $.__views.__alloyId349 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "conquer",
        id: "__alloyId349"
    });
    $.__views.__alloyId348.add($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId350"
    });
    $.__views.__alloyId348.add($.__views.__alloyId350);
    var __alloyId352 = [];
    $.__views.__alloyId353 = Ti.UI.createView({
        id: "__alloyId353"
    });
    __alloyId352.push($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createView({
        id: "__alloyId354"
    });
    $.__views.__alloyId353.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createLabel({
        text: "Grafico 1",
        id: "__alloyId355"
    });
    $.__views.__alloyId354.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createView({
        borderColor: "#c2c2c2",
        borderWidth: 1,
        height: 1,
        id: "__alloyId356"
    });
    $.__views.__alloyId353.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createView({
        id: "__alloyId357"
    });
    $.__views.__alloyId353.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createLabel({
        text: "Grafico 2",
        id: "__alloyId358"
    });
    $.__views.__alloyId357.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createView({
        borderColor: "#c2c2c2",
        borderWidth: 1,
        height: 1,
        id: "__alloyId359"
    });
    $.__views.__alloyId353.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createView({
        id: "__alloyId360"
    });
    $.__views.__alloyId353.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createView({
        id: "__alloyId361"
    });
    $.__views.__alloyId360.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createView({
        id: "__alloyId362"
    });
    $.__views.__alloyId361.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createView({
        layout: "vertical",
        top: "25",
        id: "__alloyId363"
    });
    $.__views.__alloyId362.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        text: "684",
        id: "__alloyId364"
    });
    $.__views.__alloyId363.add($.__views.__alloyId364);
    $.__views.__alloyId365 = Ti.UI.createLabel({
        textid: "opponents",
        id: "__alloyId365"
    });
    $.__views.__alloyId363.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createView({
        id: "__alloyId366"
    });
    $.__views.__alloyId361.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createView({
        layout: "vertical",
        top: "25",
        id: "__alloyId367"
    });
    $.__views.__alloyId366.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createView({
        id: "__alloyId368"
    });
    $.__views.__alloyId367.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        width: Titanium.UI.SIZE,
        text: "684",
        id: "__alloyId369"
    });
    $.__views.__alloyId368.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createLabel({
        textid: "abbreviation_points",
        id: "__alloyId370"
    });
    $.__views.__alloyId368.add($.__views.__alloyId370);
    $.__views.__alloyId371 = Ti.UI.createLabel({
        textid: "average_score",
        id: "__alloyId371"
    });
    $.__views.__alloyId367.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createView({
        id: "__alloyId372"
    });
    $.__views.__alloyId360.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createView({
        id: "__alloyId373"
    });
    $.__views.__alloyId372.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createView({
        layout: "vertical",
        top: "25",
        id: "__alloyId374"
    });
    $.__views.__alloyId373.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createView({
        id: "__alloyId375"
    });
    $.__views.__alloyId374.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createLabel({
        text: "0,8",
        id: "__alloyId376"
    });
    $.__views.__alloyId375.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createLabel({
        textid: "abbreviation_monday",
        id: "__alloyId377"
    });
    $.__views.__alloyId375.add($.__views.__alloyId377);
    $.__views.__alloyId378 = Ti.UI.createLabel({
        textid: "average_response_time",
        id: "__alloyId378"
    });
    $.__views.__alloyId374.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createView({
        id: "__alloyId379"
    });
    $.__views.__alloyId372.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createView({
        layout: "vertical",
        top: "25",
        id: "__alloyId380"
    });
    $.__views.__alloyId379.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createView({
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createView({
        id: "__alloyId382"
    });
    $.__views.__alloyId381.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createLabel({
        text: "8",
        id: "__alloyId383"
    });
    $.__views.__alloyId382.add($.__views.__alloyId383);
    $.__views.__alloyId384 = Ti.UI.createLabel({
        textid: "abbreviation_hour",
        id: "__alloyId384"
    });
    $.__views.__alloyId382.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createView({
        id: "__alloyId385"
    });
    $.__views.__alloyId381.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createLabel({
        text: "32",
        id: "__alloyId386"
    });
    $.__views.__alloyId385.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createLabel({
        textid: "abbreviation_minute",
        id: "__alloyId387"
    });
    $.__views.__alloyId385.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createLabel({
        textid: "total_play_time",
        id: "__alloyId388"
    });
    $.__views.__alloyId380.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createView({
        id: "__alloyId389"
    });
    __alloyId352.push($.__views.__alloyId389);
    $.__views.containerSearch = Ti.UI.createView({
        backgroundColor: "#2e2e2e",
        id: "containerSearch"
    });
    $.__views.__alloyId389.add($.__views.containerSearch);
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
    var __alloyId390 = [];
    $.__views.__alloyId391 = Ti.UI.createTableViewRow({
        id: "__alloyId391"
    });
    __alloyId390.push($.__views.__alloyId391);
    $.__views.__alloyId392 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId392"
    });
    $.__views.__alloyId391.add($.__views.__alloyId392);
    $.__views.__alloyId393 = Ti.UI.createLabel({
        text: "Rafael Costa",
        id: "__alloyId393"
    });
    $.__views.__alloyId391.add($.__views.__alloyId393);
    $.__views.__alloyId394 = Ti.UI.createTableViewRow({
        id: "__alloyId394"
    });
    __alloyId390.push($.__views.__alloyId394);
    $.__views.__alloyId395 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId395"
    });
    $.__views.__alloyId394.add($.__views.__alloyId395);
    $.__views.__alloyId396 = Ti.UI.createLabel({
        text: "Rafael Costa",
        id: "__alloyId396"
    });
    $.__views.__alloyId394.add($.__views.__alloyId396);
    $.__views.__alloyId397 = Ti.UI.createTableViewRow({
        id: "__alloyId397"
    });
    __alloyId390.push($.__views.__alloyId397);
    $.__views.__alloyId398 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId398"
    });
    $.__views.__alloyId397.add($.__views.__alloyId398);
    $.__views.__alloyId399 = Ti.UI.createLabel({
        text: "Rafael Costa",
        id: "__alloyId399"
    });
    $.__views.__alloyId397.add($.__views.__alloyId399);
    $.__views.friends = Ti.UI.createTableView({
        data: __alloyId390,
        id: "friends"
    });
    $.__views.__alloyId389.add($.__views.friends);
    $.__views.__alloyId400 = Ti.UI.createView({
        id: "__alloyId400"
    });
    __alloyId352.push($.__views.__alloyId400);
    var __alloyId401 = [];
    $.__views.__alloyId402 = Ti.UI.createTableViewRow({
        id: "__alloyId402"
    });
    __alloyId401.push($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createLabel({
        text: "1.",
        id: "__alloyId403"
    });
    $.__views.__alloyId402.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId404"
    });
    $.__views.__alloyId402.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createLabel({
        text: "Rafael Costa",
        id: "__alloyId405"
    });
    $.__views.__alloyId402.add($.__views.__alloyId405);
    $.__views.__alloyId406 = Ti.UI.createView({
        id: "__alloyId406"
    });
    $.__views.__alloyId402.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createLabel({
        textid: "abbreviation_points",
        id: "__alloyId407"
    });
    $.__views.__alloyId406.add($.__views.__alloyId407);
    $.__views.__alloyId408 = Ti.UI.createLabel({
        text: "12.156",
        id: "__alloyId408"
    });
    $.__views.__alloyId406.add($.__views.__alloyId408);
    $.__views.rank = Ti.UI.createTableView({
        data: __alloyId401,
        id: "rank"
    });
    $.__views.__alloyId400.add($.__views.rank);
    $.__views.__alloyId409 = Ti.UI.createView({
        id: "__alloyId409"
    });
    __alloyId352.push($.__views.__alloyId409);
    var __alloyId410 = [];
    $.__views.__alloyId411 = Ti.UI.createTableViewRow({
        id: "__alloyId411"
    });
    __alloyId410.push($.__views.__alloyId411);
    $.__views.__alloyId412 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId412"
    });
    $.__views.__alloyId411.add($.__views.__alloyId412);
    $.__views.__alloyId413 = Ti.UI.createView({
        id: "__alloyId413"
    });
    $.__views.__alloyId411.add($.__views.__alloyId413);
    $.__views.__alloyId414 = Ti.UI.createLabel({
        text: "Mestre da Quimica",
        id: "__alloyId414"
    });
    $.__views.__alloyId413.add($.__views.__alloyId414);
    $.__views.__alloyId415 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId415"
    });
    $.__views.__alloyId413.add($.__views.__alloyId415);
    $.__views.__alloyId416 = Ti.UI.createLabel({
        text: "182",
        id: "__alloyId416"
    });
    $.__views.__alloyId415.add($.__views.__alloyId416);
    $.__views.__alloyId417 = Ti.UI.createLabel({
        text: "Pontos em Ciência",
        id: "__alloyId417"
    });
    $.__views.__alloyId415.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createView({
        id: "__alloyId418"
    });
    $.__views.__alloyId413.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createLabel({
        text: "100%",
        id: "__alloyId419"
    });
    $.__views.__alloyId418.add($.__views.__alloyId419);
    $.__views.__alloyId420 = Ti.UI.createView({
        id: "__alloyId420"
    });
    $.__views.__alloyId418.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
        id: "__alloyId421"
    });
    $.__views.__alloyId420.add($.__views.__alloyId421);
    $.__views.conquer = Ti.UI.createTableView({
        data: __alloyId410,
        id: "conquer"
    });
    $.__views.__alloyId409.add($.__views.conquer);
    $.__views.__alloyId351 = Ti.UI.createScrollableView({
        views: __alloyId352,
        id: "__alloyId351"
    });
    $.__views.__alloyId330.add($.__views.__alloyId351);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.teste.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;