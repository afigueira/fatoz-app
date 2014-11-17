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
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId62 = Ti.UI.createSearchBar({
        id: "__alloyId62"
    });
    var __alloyId63 = [];
    $.__views.__alloyId64 = Ti.UI.createTableViewRow({
        title: "1",
        id: "__alloyId64"
    });
    __alloyId63.push($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createTableViewRow({
        title: "2",
        id: "__alloyId65"
    });
    __alloyId63.push($.__views.__alloyId65);
    $.__views.__alloyId61 = Ti.UI.createTableView({
        data: __alloyId63,
        search: $.__views.__alloyId62,
        id: "__alloyId61"
    });
    $.__views.index.add($.__views.__alloyId61);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.Cloud.sessionId = Titanium.App.Properties.getString("sessionId");
    Alloy.Globals.Cloud.Users.showMe(function(e) {
        Alloy.createController(e.success ? "home" : "login");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;