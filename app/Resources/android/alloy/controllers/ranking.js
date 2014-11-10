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
        categoryId ? setRanking({
            classname: "achievements",
            where: {
                categories_id: categoryId,
                points: {
                    $gte: 0
                }
            },
            order: "-points"
        }) : setRanking({
            classname: "ranking",
            order: "-points"
        });
    }
    function setUserName(element, length, a) {
        var usersId;
        var row;
        row = element[a];
        usersId = row.users_id;
        Alloy.Globals.Cloud.Users.query({
            where: {
                id: usersId
            }
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                row.children[2].text = user.first_name;
                Alloy.Globals.loadPhoto(row.children[1], "image", user.custom_fields.profile_image);
                length - 1 > a && setUserName(element, length, ++a);
            }
        });
    }
    function setRanking(obj) {
        obj.classname;
        Alloy.Globals.Cloud.Objects.query(obj, function(e) {
            if (e.success) {
                var table;
                table = categoryId ? e.achievements : e.ranking;
                for (var i = 0, j = table.length; j > i; i++) {
                    var rowRank = Titanium.UI.createTableViewRow({
                        users_id: table[i].users_id
                    });
                    $.addClass(rowRank, "rowRank");
                    var rankNumber = Titanium.UI.createLabel({
                        text: i + 1 + " ."
                    });
                    $.addClass(rankNumber, "rankNumber proximaNovaRegular");
                    var imageProfile = Titanium.UI.createImageView();
                    $.addClass(imageProfile, "imageProfile imageProfileRank");
                    var rankName = Titanium.UI.createLabel({
                        id: "user_" + table[i].users_id
                    });
                    $.addClass(rankName, "rankName proximaNovaRegular");
                    var rankPoint = Titanium.UI.createView();
                    $.addClass(rankPoint, "rankPoint");
                    var rankPt = Titanium.UI.createLabel({
                        textid: "abbreviation_points"
                    });
                    $.addClass(rankPt, "rankPt proximaNovaRegular");
                    var rankTotal = Titanium.UI.createLabel({
                        text: table[i].points
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
                console.log($.listRank.data[0].rows);
                setUserName($.listRank.data[0].rows, $.listRank.data[0].rows.length, 0);
            } else alert("Houve um erro para carregar o usuário");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ranking";
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
    $.__views.__alloyId81 = require("xp.ui").createWindow({
        role: "centerWindow",
        title: "Ranking",
        id: "__alloyId81"
    });
    $.__views.listRank = Ti.UI.createTableView({
        backgroundColor: "#ffffff",
        top: Alloy.Globals.marginTopWindow,
        id: "listRank"
    });
    $.__views.__alloyId81.add($.__views.listRank);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 250,
        id: "drawer",
        children: [ $.__views.sidebar, $.__views.__alloyId81 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    categoryId = args.categoryId || "";
    Alloy.Globals.drawer($.sidebar, $.drawer, "Ranking", init);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;