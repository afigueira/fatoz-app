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
    $.__views.__alloyId142 = Ti.UI.createScrollView({
        backgroundColor: Alloy.Globals.constants.BACKGROUND_INSIDE_COLOR,
        layout: "vertical",
        id: "__alloyId142"
    });
    $.__views.profile.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createView({
        height: 231,
        backgroundImage: "http://pixabay.com/static/uploads/photo/2014/06/01/11/35/landscape-359541_640.jpg",
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        width: 250,
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 0,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createLabel({
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
        id: "__alloyId146"
    });
    $.__views.__alloyId144.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
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
        id: "__alloyId147"
    });
    $.__views.__alloyId144.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createView({
        height: 30,
        width: 250,
        top: 160,
        id: "__alloyId148"
    });
    $.__views.__alloyId143.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createButton({
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
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createButton({
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
        id: "__alloyId150"
    });
    $.__views.__alloyId148.add($.__views.__alloyId150);
    $.__views.containerTabs = Ti.UI.createView({
        height: 46,
        backgroundColor: "white",
        left: 0,
        top: 0,
        width: Titanium.UI.FILL,
        id: "containerTabs"
    });
    $.__views.__alloyId142.add($.__views.containerTabs);
    $.__views.tabs = Ti.UI.createView({
        height: 46,
        top: 0,
        left: 15,
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.containerTabs.add($.__views.tabs);
    $.__views.__alloyId151 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId151"
    });
    $.__views.tabs.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "statistics",
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        id: "__alloyId153"
    });
    $.__views.__alloyId151.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId154"
    });
    $.__views.tabs.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "friends",
        id: "__alloyId155"
    });
    $.__views.__alloyId154.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId156"
    });
    $.__views.__alloyId154.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId157"
    });
    $.__views.tabs.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "rank",
        id: "__alloyId158"
    });
    $.__views.__alloyId157.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId159"
    });
    $.__views.__alloyId157.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createView({
        height: 46,
        width: 72,
        id: "__alloyId160"
    });
    $.__views.tabs.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createLabel({
        color: "#ff7026",
        tintColor: "#ff7026",
        font: {
            fontFamily: "ProximaNova-Regular",
            fontSize: 10,
            fontWeight: "bold"
        },
        textid: "conquer",
        id: "__alloyId161"
    });
    $.__views.__alloyId160.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createView({
        height: 3,
        backgroundColor: "#ff7026",
        bottom: 0,
        width: Titanium.UI.FILL,
        visible: "false",
        id: "__alloyId162"
    });
    $.__views.__alloyId160.add($.__views.__alloyId162);
    var __alloyId164 = [];
    $.__views.__alloyId165 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId165"
    });
    __alloyId164.push($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createView({
        height: 184,
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createLabel({
        text: "Grafico 1",
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        borderWidth: 1,
        id: "__alloyId168"
    });
    $.__views.__alloyId165.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createView({
        height: 157,
        id: "__alloyId169"
    });
    $.__views.__alloyId165.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createLabel({
        text: "Grafico 2",
        id: "__alloyId170"
    });
    $.__views.__alloyId169.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createView({
        height: 1,
        borderColor: "#c2c2c2",
        borderWidth: 1,
        id: "__alloyId171"
    });
    $.__views.__alloyId165.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createView({
        height: 200,
        backgroundColor: "#f0f0f0",
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId172"
    });
    $.__views.__alloyId165.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createView({
        height: "50%",
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId173"
    });
    $.__views.__alloyId172.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId174"
    });
    $.__views.__alloyId173.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId175"
    });
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createLabel({
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
        id: "__alloyId176"
    });
    $.__views.__alloyId175.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "opponents",
        id: "__alloyId177"
    });
    $.__views.__alloyId175.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId178"
    });
    $.__views.__alloyId173.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
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
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_points",
        id: "__alloyId182"
    });
    $.__views.__alloyId180.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "average_score",
        id: "__alloyId183"
    });
    $.__views.__alloyId179.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        height: "50%",
        width: Titanium.UI.FILL,
        layout: "horizontal",
        id: "__alloyId184"
    });
    $.__views.__alloyId172.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
        id: "__alloyId186"
    });
    $.__views.__alloyId185.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "0,8",
        id: "__alloyId188"
    });
    $.__views.__alloyId187.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_monday",
        id: "__alloyId189"
    });
    $.__views.__alloyId187.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "average_response_time",
        id: "__alloyId190"
    });
    $.__views.__alloyId186.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: "50%",
        layout: "vertical",
        id: "__alloyId191"
    });
    $.__views.__alloyId184.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "vertical",
        top: 20,
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
    $.__views.__alloyId194 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "8",
        id: "__alloyId195"
    });
    $.__views.__alloyId194.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_hour",
        id: "__alloyId196"
    });
    $.__views.__alloyId194.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        id: "__alloyId197"
    });
    $.__views.__alloyId193.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#383838",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "32",
        id: "__alloyId198"
    });
    $.__views.__alloyId197.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        width: Titanium.UI.SIZE,
        height: Titanium.UI.SIZE,
        bottom: 5,
        textid: "abbreviation_minute",
        id: "__alloyId199"
    });
    $.__views.__alloyId197.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createLabel({
        width: Titanium.UI.FILL,
        height: Titanium.UI.SIZE,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#666666",
        font: {
            fontSize: 14
        },
        textid: "total_play_time",
        id: "__alloyId200"
    });
    $.__views.__alloyId192.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId201"
    });
    __alloyId164.push($.__views.__alloyId201);
    $.__views.containerSearch = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        backgroundColor: "#2e2e2e",
        id: "containerSearch"
    });
    $.__views.__alloyId201.add($.__views.containerSearch);
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
    var __alloyId202 = [];
    $.__views.__alloyId203 = Ti.UI.createTableViewRow({
        id: "__alloyId203"
    });
    __alloyId202.push($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        top: 10,
        bottom: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId204"
    });
    $.__views.__alloyId203.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
        left: 94,
        text: "Rafael Costa",
        id: "__alloyId205"
    });
    $.__views.__alloyId203.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createTableViewRow({
        id: "__alloyId206"
    });
    __alloyId202.push($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        top: 10,
        bottom: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        left: 94,
        text: "Rafael Costa",
        id: "__alloyId208"
    });
    $.__views.__alloyId206.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createTableViewRow({
        id: "__alloyId209"
    });
    __alloyId202.push($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        top: 10,
        bottom: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId210"
    });
    $.__views.__alloyId209.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createLabel({
        left: 94,
        text: "Rafael Costa",
        id: "__alloyId211"
    });
    $.__views.__alloyId209.add($.__views.__alloyId211);
    $.__views.friends = Ti.UI.createTableView({
        data: __alloyId202,
        id: "friends"
    });
    $.__views.__alloyId201.add($.__views.friends);
    $.__views.__alloyId212 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId212"
    });
    __alloyId164.push($.__views.__alloyId212);
    var __alloyId213 = [];
    $.__views.__alloyId214 = Ti.UI.createTableViewRow({
        id: "__alloyId214"
    });
    __alloyId213.push($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        width: 50,
        left: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "1.",
        id: "__alloyId215"
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 50,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId216"
    });
    $.__views.__alloyId214.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        left: 124,
        text: "Rafael Costa",
        id: "__alloyId217"
    });
    $.__views.__alloyId214.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        right: 10,
        width: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId218"
    });
    $.__views.__alloyId214.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
        textid: "abbreviation_points",
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
        text: "12.156",
        id: "__alloyId220"
    });
    $.__views.__alloyId218.add($.__views.__alloyId220);
    $.__views.rank = Ti.UI.createTableView({
        data: __alloyId213,
        id: "rank"
    });
    $.__views.__alloyId212.add($.__views.rank);
    $.__views.__alloyId221 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: Titanium.UI.FILL,
        layout: "vertical",
        id: "__alloyId221"
    });
    __alloyId164.push($.__views.__alloyId221);
    var __alloyId222 = [];
    $.__views.__alloyId223 = Ti.UI.createTableViewRow({
        id: "__alloyId223"
    });
    __alloyId222.push($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createImageView({
        width: 64,
        height: 64,
        borderRadius: 324,
        borderWidth: 2,
        borderColor: "#ffffff",
        left: 10,
        top: 10,
        bottom: 10,
        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg",
        id: "__alloyId224"
    });
    $.__views.__alloyId223.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        left: 84,
        layout: "vertical",
        id: "__alloyId225"
    });
    $.__views.__alloyId223.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createLabel({
        left: 0,
        text: "Mestre da Quimica",
        id: "__alloyId226"
    });
    $.__views.__alloyId225.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        width: Titanium.UI.SIZE,
        left: 0,
        id: "__alloyId227"
    });
    $.__views.__alloyId225.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createLabel({
        text: "182",
        id: "__alloyId228"
    });
    $.__views.__alloyId227.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        text: "Pontos em Ciência",
        id: "__alloyId229"
    });
    $.__views.__alloyId227.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId230"
    });
    $.__views.__alloyId225.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        text: "100%",
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        height: 5,
        width: 100,
        backgroundColor: "red",
        id: "__alloyId232"
    });
    $.__views.__alloyId230.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createView({
        height: Titanium.UI.FILL,
        width: 60,
        backgrounColor: "green",
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
    $.__views.conquer = Ti.UI.createTableView({
        data: __alloyId222,
        id: "conquer"
    });
    $.__views.__alloyId221.add($.__views.conquer);
    $.__views.__alloyId163 = Ti.UI.createScrollableView({
        views: __alloyId164,
        id: "__alloyId163"
    });
    $.__views.__alloyId142.add($.__views.__alloyId163);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.profile.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;