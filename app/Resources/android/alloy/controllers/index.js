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
    $.__views.__alloyId112 = Ti.UI.Android.createSearchView({
        id: "__alloyId112"
    });
    var __alloyId113 = [];
    $.__views.__alloyId114 = Ti.UI.createTableViewRow({
        title: "1",
        id: "__alloyId114"
    });
    __alloyId113.push($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createTableViewRow({
        title: "2",
        id: "__alloyId115"
    });
    __alloyId113.push($.__views.__alloyId115);
    $.__views.__alloyId111 = Ti.UI.createTableView({
        data: __alloyId113,
        search: $.__views.__alloyId112,
        id: "__alloyId111"
    });
    $.__views.index.add($.__views.__alloyId111);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Cloud = require("ti.cloud");
    Cloud.sessionId = Ti.App.Properties.getString("sessionId");
    Cloud.Users.showMe(function(e) {
        e.success ? Alloy.createController("home") : Alloy.createController("login");
    });
    date = new Date();
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    console.log("=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM " + date.getHours() + ":" + date.getMinutes() + " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;