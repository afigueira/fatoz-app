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
        categoryId = args.categoryId || "";
        Cloud.Objects.query({
            classname: "achievements",
            where: {
                categories_id: categoryId,
                points: {
                    $gte: 0
                }
            },
            order: "-points"
        }, function(e) {
            if (e.success) {
                console.log(e);
                for (var i = 0, j = e.achievements.length; j > i; i++) {
                    var rowRank = Titanium.UI.createTableViewRow({
                        users_id: e.achievements[i].users_id
                    });
                    console.log("users_id", e.achievements[i].users_id);
                    $.addClass(rowRank, "rowRank");
                    var rankNumber = Titanium.UI.createLabel({
                        text: i + 1 + " ."
                    });
                    $.addClass(rankNumber, "rankNumber proximaNovaRegular");
                    var imageProfile = Titanium.UI.createImageView({
                        backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
                    });
                    $.addClass(imageProfile, "imageProfile imageProfileRank");
                    var rankName = Titanium.UI.createLabel({
                        id: "user_" + e.achievements[i].users_id
                    });
                    $.addClass(rankName, "rankName proximaNovaRegular");
                    var rankPoint = Titanium.UI.createView();
                    $.addClass(rankPoint, "rankPoint");
                    var rankPt = Titanium.UI.createLabel({
                        textid: "abbreviation_points"
                    });
                    $.addClass(rankPt, "rankPt proximaNovaRegular");
                    var rankTotal = Titanium.UI.createLabel({
                        text: e.achievements[i].points
                    });
                    $.addClass(rankTotal, "rankTotal proximaNovaRegular");
                    var borderGray = Titanium.UI.createView();
                    $.addClass(borderGray, "borderGray borderGrayProfile");
                    rowRank.add(rankNumber);
                    rowRank.add(imageProfile);
                    rowRank.add(rankName);
                    rankPoint.add(rankPt);
                    rankPoint.add(rankTotal);
                    rowRank.add(rankPoint);
                    rowRank.add(borderGray);
                    $.listRank.appendRow(rowRank);
                }
                setUserName($.listRank.data[0].rows, $.listRank.data[0].rows.length, 0);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function setUserName(element, length, a) {
        var usersId;
        var row;
        for (var i = a; length > i; i++) {
            row = element[i];
            usersId = row.users_id;
            Cloud.Users.query({
                where: {
                    id: usersId
                }
            }, function(e) {
                if (e.success) {
                    var user = e.users[0];
                    row.children[2].text = user.first_name;
                    element.shift();
                    element && setUserName(element, length, i);
                }
            });
            break;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ranking";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.ranking = Ti.UI.createWindow({
        id: "ranking"
    });
    $.__views.ranking && $.addTopLevelView($.__views.ranking);
    $.__views.listRank = Ti.UI.createTableView({
        backgroundColor: "#ffffff",
        id: "listRank"
    });
    $.__views.ranking.add($.__views.listRank);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.ranking.addEventListener("open", function() {
        init();
    });
    $.ranking.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;