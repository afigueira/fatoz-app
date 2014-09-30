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
    this.__controllerPath = "gamescreen";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.gamescreen = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.constants.BASE_COLOR,
        barColor: Alloy.Globals.constants.NAV_BAR_COLOR,
        navTintColor: "white",
        tabBarHidden: true,
        translucent: false,
        id: "gamescreen"
    });
    $.__views.gamescreen && $.addTopLevelView($.__views.gamescreen);
    $.__views.__alloyId116 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        id: "__alloyId116"
    });
    $.__views.gamescreen.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "user_name",
        id: "__alloyId120"
    });
    $.__views.__alloyId118.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        color: "white",
        tintColor: "white",
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        textid: "city_state",
        id: "__alloyId121"
    });
    $.__views.__alloyId118.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        id: "__alloyId122"
    });
    $.__views.__alloyId117.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createButton({
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
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createButton({
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
        id: "__alloyId124"
    });
    $.__views.__alloyId122.add($.__views.__alloyId124);
    $.__views.containerTabs = Ti.UI.createView({
        backgroundColor: "white",
        id: "containerTabs"
    });
    $.__views.__alloyId116.add($.__views.containerTabs);
    $.__views.tabs = Ti.UI.createView({
        id: "tabs"
    });
    $.__views.containerTabs.add($.__views.tabs);
    $.__views.__alloyId125 = Ti.UI.createView({
        id: "__alloyId125"
    });
    $.__views.tabs.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "statistics",
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        id: "__alloyId127"
    });
    $.__views.__alloyId125.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
        id: "__alloyId128"
    });
    $.__views.tabs.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "friends",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId130"
    });
    $.__views.__alloyId128.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        id: "__alloyId131"
    });
    $.__views.tabs.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "rank",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        id: "__alloyId134"
    });
    $.__views.tabs.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "conquer",
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createView({
        backgroundColor: "#ff7026",
        bottom: 0,
        height: 3,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId136"
    });
    $.__views.__alloyId134.add($.__views.__alloyId136);
    var __alloyId138 = [];
    $.__views.__alloyId139 = Ti.UI.createView({
        id: "__alloyId139"
    });
    __alloyId138.push($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createView({
        id: "__alloyId140"
    });
    $.__views.__alloyId139.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createLabel({
        text: "Grafico 1",
        id: "__alloyId141"
    });
    $.__views.__alloyId140.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        borderColor: "#c2c2c2",
        borderWidth: 1,
        height: 1,
        id: "__alloyId142"
    });
    $.__views.__alloyId139.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createView({
        id: "__alloyId143"
    });
    $.__views.__alloyId139.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createLabel({
        text: "Grafico 2",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createView({
        borderColor: "#c2c2c2",
        borderWidth: 1,
        height: 1,
        id: "__alloyId145"
    });
    $.__views.__alloyId139.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
        id: "__alloyId146"
    });
    $.__views.__alloyId139.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createView({
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createView({
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createView({
        layout: "vertical",
        top: "25",
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        text: "684",
        id: "__alloyId150"
    });
    $.__views.__alloyId149.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        textid: "opponents",
        id: "__alloyId151"
    });
    $.__views.__alloyId149.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createView({
        id: "__alloyId152"
    });
    $.__views.__alloyId147.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createView({
        layout: "vertical",
        top: "25",
        id: "__alloyId153"
    });
    $.__views.__alloyId152.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createView({
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular"
        },
        width: Titanium.UI.SIZE,
        text: "684",
        id: "__alloyId155"
    });
    $.__views.__alloyId154.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createLabel({
        textid: "abbreviation_points",
        id: "__alloyId156"
    });
    $.__views.__alloyId154.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        textid: "average_score",
        id: "__alloyId157"
    });
    $.__views.__alloyId153.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createView({
        id: "__alloyId158"
    });
    $.__views.__alloyId146.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createView({
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createView({
        layout: "vertical",
        top: "25",
        id: "__alloyId160"
    });
    $.__views.__alloyId159.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createView({
        id: "__alloyId161"
    });
    $.__views.__alloyId160.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
        text: "0,8",
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        textid: "abbreviation_monday",
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createLabel({
        textid: "average_response_time",
        id: "__alloyId164"
    });
    $.__views.__alloyId160.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        id: "__alloyId165"
    });
    $.__views.__alloyId158.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createView({
        layout: "vertical",
        top: "25",
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createView({
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createLabel({
        text: "8",
        id: "__alloyId169"
    });
    $.__views.__alloyId168.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createLabel({
        textid: "abbreviation_hour",
        id: "__alloyId170"
    });
    $.__views.__alloyId168.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createView({
        id: "__alloyId171"
    });
    $.__views.__alloyId167.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createLabel({
        text: "32",
        id: "__alloyId172"
    });
    $.__views.__alloyId171.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        textid: "abbreviation_minute",
        id: "__alloyId173"
    });
    $.__views.__alloyId171.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createLabel({
        textid: "total_play_time",
        id: "__alloyId174"
    });
    $.__views.__alloyId166.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createView({
        id: "__alloyId175"
    });
    __alloyId138.push($.__views.__alloyId175);
    $.__views.containerSearch = Ti.UI.createView({
        backgroundColor: "#2e2e2e",
        id: "containerSearch"
    });
    $.__views.__alloyId175.add($.__views.containerSearch);
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
    var __alloyId176 = [];
    $.__views.__alloyId177 = Ti.UI.createTableViewRow({
        id: "__alloyId177"
    });
    __alloyId176.push($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId178"
    });
    $.__views.__alloyId177.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
        text: "Rafael Costa",
        id: "__alloyId179"
    });
    $.__views.__alloyId177.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createTableViewRow({
        id: "__alloyId180"
    });
    __alloyId176.push($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
        text: "Rafael Costa",
        id: "__alloyId182"
    });
    $.__views.__alloyId180.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createTableViewRow({
        id: "__alloyId183"
    });
    __alloyId176.push($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
        text: "Rafael Costa",
        id: "__alloyId185"
    });
    $.__views.__alloyId183.add($.__views.__alloyId185);
    $.__views.friends = Ti.UI.createTableView({
        data: __alloyId176,
        id: "friends"
    });
    $.__views.__alloyId175.add($.__views.friends);
    $.__views.__alloyId186 = Ti.UI.createView({
        id: "__alloyId186"
    });
    __alloyId138.push($.__views.__alloyId186);
    var __alloyId187 = [];
    $.__views.__alloyId188 = Ti.UI.createTableViewRow({
        id: "__alloyId188"
    });
    __alloyId187.push($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        text: "1.",
        id: "__alloyId189"
    });
    $.__views.__alloyId188.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId190"
    });
    $.__views.__alloyId188.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        text: "Rafael Costa",
        id: "__alloyId191"
    });
    $.__views.__alloyId188.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createView({
        id: "__alloyId192"
    });
    $.__views.__alloyId188.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
        textid: "abbreviation_points",
        id: "__alloyId193"
    });
    $.__views.__alloyId192.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        text: "12.156",
        id: "__alloyId194"
    });
    $.__views.__alloyId192.add($.__views.__alloyId194);
    $.__views.rank = Ti.UI.createTableView({
        data: __alloyId187,
        id: "rank"
    });
    $.__views.__alloyId186.add($.__views.rank);
    $.__views.__alloyId195 = Ti.UI.createView({
        id: "__alloyId195"
    });
    __alloyId138.push($.__views.__alloyId195);
    var __alloyId196 = [];
    $.__views.__alloyId197 = Ti.UI.createTableViewRow({
        id: "__alloyId197"
    });
    __alloyId196.push($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createImageView({
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId198"
    });
    $.__views.__alloyId197.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createView({
        id: "__alloyId199"
    });
    $.__views.__alloyId197.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
        text: "Mestre da Quimica",
        id: "__alloyId200"
    });
    $.__views.__alloyId199.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createView({
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId201"
    });
    $.__views.__alloyId199.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
        text: "182",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        text: "Pontos em Ciência",
        id: "__alloyId203"
    });
    $.__views.__alloyId201.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createView({
        id: "__alloyId204"
    });
    $.__views.__alloyId199.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
        text: "100%",
        id: "__alloyId205"
    });
    $.__views.__alloyId204.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        id: "__alloyId206"
    });
    $.__views.__alloyId204.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createView({
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.conquer = Ti.UI.createTableView({
        data: __alloyId196,
        id: "conquer"
    });
    $.__views.__alloyId195.add($.__views.conquer);
    $.__views.__alloyId137 = Ti.UI.createScrollableView({
        views: __alloyId138,
        id: "__alloyId137"
    });
    $.__views.__alloyId116.add($.__views.__alloyId137);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.gamescreen.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;