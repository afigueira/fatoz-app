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
    $.__views.__alloyId107 = Ti.UI.Android.createSearchView({
        id: "__alloyId107"
    });
    var __alloyId108 = [];
    $.__views.__alloyId109 = Ti.UI.createTableViewRow({
        title: "1",
        id: "__alloyId109"
    });
    __alloyId108.push($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createTableViewRow({
        title: "2",
        id: "__alloyId110"
    });
    __alloyId108.push($.__views.__alloyId110);
    $.__views.__alloyId106 = Ti.UI.createTableView({
        data: __alloyId108,
        search: $.__views.__alloyId107,
        id: "__alloyId106"
    });
    $.__views.index.add($.__views.__alloyId106);
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