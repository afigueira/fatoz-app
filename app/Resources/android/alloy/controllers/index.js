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
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId65 = Ti.UI.Android.createSearchView({
        id: "__alloyId65"
    });
    var __alloyId66 = [];
    $.__views.__alloyId67 = Ti.UI.createTableViewRow({
        title: "1",
        id: "__alloyId67"
    });
    __alloyId66.push($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createTableViewRow({
        title: "2",
        id: "__alloyId68"
    });
    __alloyId66.push($.__views.__alloyId68);
    $.__views.__alloyId64 = Ti.UI.createTableView({
        data: __alloyId66,
        search: $.__views.__alloyId65,
        id: "__alloyId64"
    });
    $.__views.index.add($.__views.__alloyId64);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.Cloud.sessionId = Titanium.App.Properties.getString("sessionId");
    Alloy.Globals.Cloud.Users.showMe(function(e) {
        if (e.success) {
            Alloy.createController("home");
            $.destroy();
        } else {
            Alloy.createController("login");
            $.destroy();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;