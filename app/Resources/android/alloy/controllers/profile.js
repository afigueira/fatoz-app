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
    $.__views.__alloyId142 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        role: "centerWindow",
        id: "__alloyId142"
    });
    $.__views.__alloyId143 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        layout: "vertical",
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createView({
        height: 231,
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 250,
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
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
    $.__views.__alloyId145.add($.__views.userName);
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
    $.__views.__alloyId145.add($.__views.cityState);
    $.__views.__alloyId147 = Ti.UI.createView({
        height: 30,
        width: 250,
        top: 160,
        id: "__alloyId147"
    });
    $.__views.__alloyId144.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createButton({
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
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createButton({
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
        id: "__alloyId149"
    });
    $.__views.__alloyId147.add($.__views.__alloyId149);
    $.__views.containerTabs = Ti.UI.createView({
        height: 46,
        backgroundColor: "white",
        left: 0,
        top: 0,
        width: Titanium.UI.FILL,
        id: "containerTabs"
    });
    $.__views.__alloyId143.add($.__views.containerTabs);
    $.__views.tabs = Ti.UI.createView({
        height: 46,
        top: 0,
        left: 15,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.containerTabs.add($.__views.tabs);
    $.__views.__alloyId150 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 72,
        id: "__alloyId150"
    });
    $.__views.tabs.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "statistics",
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        id: "__alloyId152"
    });
    $.__views.__alloyId150.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 72,
        id: "__alloyId153"
    });
    $.__views.tabs.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "friends",
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId155"
    });
    $.__views.__alloyId153.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 72,
        id: "__alloyId156"
    });
    $.__views.tabs.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "rank",
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId158"
    });
    $.__views.__alloyId156.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createView({
        height: 46,
        touchEnabled: true,
        width: 72,
        id: "__alloyId159"
    });
    $.__views.tabs.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        touchEnabled: false,
        textid: "conquer",
        id: "__alloyId160"
    });
    $.__views.__alloyId159.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        touchEnabled: false,
        visible: "false",
        id: "__alloyId161"
    });
    $.__views.__alloyId159.add($.__views.__alloyId161);
    var __alloyId163 = [];
    $.__views.__alloyId164 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId164"
    });
    __alloyId163.push($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        height: 184,
        id: "__alloyId165"
    });
    $.__views.__alloyId164.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createLabel({
        text: "Grafico 1",
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        id: "__alloyId167"
    });
    $.__views.__alloyId164.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        height: 157,
        id: "__alloyId168"
    });
    $.__views.__alloyId164.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createLabel({
        text: "Grafico 2",
        id: "__alloyId169"
    });
    $.__views.__alloyId168.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        id: "__alloyId170"
    });
    $.__views.__alloyId164.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createView({
        height: 200,
        backgroundColor: "#f0f0f0",
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId171"
    });
    $.__views.__alloyId164.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createView({
        height: "50%",
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId172"
    });
    $.__views.__alloyId171.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId173"
    });
    $.__views.__alloyId172.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId174"
    });
    $.__views.__alloyId173.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel({
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
        id: "__alloyId175"
    });
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "opponents",
        id: "__alloyId176"
    });
    $.__views.__alloyId174.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId177"
    });
    $.__views.__alloyId172.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId178"
    });
    $.__views.__alloyId177.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
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
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_points",
        id: "__alloyId181"
    });
    $.__views.__alloyId179.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "average_score",
        id: "__alloyId182"
    });
    $.__views.__alloyId178.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createView({
        height: "50%",
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId183"
    });
    $.__views.__alloyId171.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId186"
    });
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "0,8",
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_monday",
        id: "__alloyId188"
    });
    $.__views.__alloyId186.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "average_response_time",
        id: "__alloyId189"
    });
    $.__views.__alloyId185.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId190"
    });
    $.__views.__alloyId183.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId193"
    });
    $.__views.__alloyId192.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "8",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_hour",
        id: "__alloyId195"
    });
    $.__views.__alloyId193.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId196"
    });
    $.__views.__alloyId192.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "32",
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_minute",
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "total_play_time",
        id: "__alloyId199"
    });
    $.__views.__alloyId191.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#f0f0f0",
        id: "__alloyId200"
    });
    __alloyId163.push($.__views.__alloyId200);
    $.__views.containerSearch = Ti.UI.createView({
        height: 60,
        backgroundColor: "#888888",
        width: Titanium.UI.FILL,
        id: "containerSearch"
    });
    $.__views.__alloyId200.add($.__views.containerSearch);
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
    var __alloyId202 = [];
    $.__views.__alloyId203 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId203"
    });
    __alloyId202.push($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createImageView({
        width: 45,
        height: 45,
        borderRadius: 23,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId204"
    });
    $.__views.__alloyId203.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 20
        },
        left: 65,
        color: "#383838",
        text: "Tomas Lau",
        id: "__alloyId205"
    });
    $.__views.__alloyId203.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId206"
    });
    $.__views.__alloyId203.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId207"
    });
    __alloyId202.push($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createImageView({
        width: 45,
        height: 45,
        borderRadius: 23,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId208"
    });
    $.__views.__alloyId207.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 20
        },
        left: 65,
        color: "#383838",
        text: "Rafael Costa",
        id: "__alloyId209"
    });
    $.__views.__alloyId207.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId210"
    });
    $.__views.__alloyId207.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId211"
    });
    __alloyId202.push($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createImageView({
        width: 45,
        height: 45,
        borderRadius: 23,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 20
        },
        left: 65,
        color: "#383838",
        text: "Rafael Costas",
        id: "__alloyId213"
    });
    $.__views.__alloyId211.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId214"
    });
    $.__views.__alloyId211.add($.__views.__alloyId214);
    $.__views.__alloyId201 = Ti.UI.createTableView({
        data: __alloyId202,
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId215 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#f0f0f0",
        id: "__alloyId215"
    });
    __alloyId163.push($.__views.__alloyId215);
    var __alloyId217 = [];
    $.__views.__alloyId218 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId218"
    });
    __alloyId217.push($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        width: 50,
        left: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#888888",
        text: "1.",
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createImageView({
        width: 29,
        height: 29,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 50,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId220"
    });
    $.__views.__alloyId218.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        left: 94,
        color: "#383838",
        text: "Rafael Costas",
        id: "__alloyId221"
    });
    $.__views.__alloyId218.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        right: 20,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId222"
    });
    $.__views.__alloyId218.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#666666",
        textid: "abbreviation_points",
        id: "__alloyId223"
    });
    $.__views.__alloyId222.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#e33124",
        text: "12.156",
        id: "__alloyId224"
    });
    $.__views.__alloyId222.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId225"
    });
    $.__views.__alloyId218.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createTableViewRow({
        width: Titanium.UI.FILL,
        height: 75,
        id: "__alloyId226"
    });
    __alloyId217.push($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        width: 50,
        left: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#888888",
        text: "1.",
        id: "__alloyId227"
    });
    $.__views.__alloyId226.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createImageView({
        width: 29,
        height: 29,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 50,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId228"
    });
    $.__views.__alloyId226.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12,
            fontWeight: "bold"
        },
        left: 94,
        color: "#383838",
        text: "Rafael Costas",
        id: "__alloyId229"
    });
    $.__views.__alloyId226.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        right: 20,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId230"
    });
    $.__views.__alloyId226.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#666666",
        textid: "abbreviation_points",
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#e33124",
        text: "12.156",
        id: "__alloyId232"
    });
    $.__views.__alloyId230.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId233"
    });
    $.__views.__alloyId226.add($.__views.__alloyId233);
    $.__views.__alloyId216 = Ti.UI.createTableView({
        data: __alloyId217,
        id: "__alloyId216"
    });
    $.__views.__alloyId215.add($.__views.__alloyId216);
    $.__views.__alloyId234 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        backgroundColor: "#f0f0f0",
        id: "__alloyId234"
    });
    __alloyId163.push($.__views.__alloyId234);
    var __alloyId235 = [];
    $.__views.__alloyId236 = Ti.UI.createTableViewRow({
        id: "__alloyId236"
    });
    __alloyId235.push($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createImageView({
        top: 20,
        left: 20,
        bottom: 20,
        width: 75,
        height: 75,
        image: "/images/conquer-master-of-chemistry.png",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        left: 115,
        layout: "vertical",
        id: "__alloyId238"
    });
    $.__views.__alloyId236.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 15,
            fontWeight: "bold"
        },
        left: 0,
        color: "#383838",
        text: "Mestre da Quimica",
        id: "__alloyId239"
    });
    $.__views.__alloyId238.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId240"
    });
    $.__views.__alloyId238.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        right: 5,
        color: "#ff7026",
        text: "182",
        id: "__alloyId241"
    });
    $.__views.__alloyId240.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#666666",
        text: "Pontos em Ciência",
        id: "__alloyId242"
    });
    $.__views.__alloyId240.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 19,
        layout: "horizontal",
        id: "__alloyId243"
    });
    $.__views.__alloyId238.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        font: {
            fontSize: 8,
            fontWeight: "bold"
        },
        color: "#8bc100",
        right: 6,
        text: "100%",
        id: "__alloyId244"
    });
    $.__views.__alloyId243.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createView({
        height: 8,
        width: 158,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#383838",
        backgroundColor: "#383838",
        id: "__alloyId245"
    });
    $.__views.__alloyId243.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createView({
        height: 8,
        width: 140,
        backgroundColor: "#8dc400",
        left: 0,
        id: "__alloyId246"
    });
    $.__views.__alloyId245.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId247"
    });
    $.__views.__alloyId236.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createTableViewRow({
        id: "__alloyId248"
    });
    __alloyId235.push($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createImageView({
        top: 20,
        left: 20,
        bottom: 20,
        width: 75,
        height: 75,
        image: "/images/conquer-master-of-chemistry.png",
        id: "__alloyId249"
    });
    $.__views.__alloyId248.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        left: 115,
        layout: "vertical",
        id: "__alloyId250"
    });
    $.__views.__alloyId248.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 15,
            fontWeight: "bold"
        },
        left: 0,
        color: "#383838",
        text: "Mestre da Quimica",
        id: "__alloyId251"
    });
    $.__views.__alloyId250.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId252"
    });
    $.__views.__alloyId250.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        right: 5,
        color: "#ff7026",
        text: "182",
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createLabel({
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 12
        },
        color: "#666666",
        text: "Pontos em Ciência",
        id: "__alloyId254"
    });
    $.__views.__alloyId252.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        top: 19,
        layout: "horizontal",
        id: "__alloyId255"
    });
    $.__views.__alloyId250.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createLabel({
        font: {
            fontSize: 8,
            fontWeight: "bold"
        },
        color: "#8bc100",
        right: 6,
        text: "100%",
        id: "__alloyId256"
    });
    $.__views.__alloyId255.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createView({
        height: 8,
        width: 158,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#383838",
        backgroundColor: "#383838",
        id: "__alloyId257"
    });
    $.__views.__alloyId255.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createView({
        height: 8,
        width: 140,
        backgroundColor: "#8dc400",
        left: 0,
        id: "__alloyId258"
    });
    $.__views.__alloyId257.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        backgroundColor: "#c2c2c2",
        borderWidth: 1,
        width: Titanium.UI.FILL,
        bottom: 0,
        id: "__alloyId259"
    });
    $.__views.__alloyId248.add($.__views.__alloyId259);
    $.__views.conquer = Ti.UI.createTableView({
        data: __alloyId235,
        id: "conquer"
    });
    $.__views.__alloyId234.add($.__views.conquer);
    $.__views.__alloyId162 = Ti.UI.createScrollableView({
        views: __alloyId163,
        id: "__alloyId162"
    });
    $.__views.__alloyId143.add($.__views.__alloyId162);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId142 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("alloy").Globals.drawer($.sidebar, $.drawer, "Perfil");
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
    Cloud.Objects.query({
        classname: "achievements",
        order: "points",
        where: {
            categories_id: "544410126bbf3fcc86094f59"
        }
    }, function(e) {
        e.success ? console.log(e) : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;