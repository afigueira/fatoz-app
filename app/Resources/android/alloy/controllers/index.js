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
    $.__views.__alloyId80 = Ti.UI.Android.createSearchView({
        id: "__alloyId80"
    });
    var __alloyId81 = [];
    $.__views.__alloyId82 = Ti.UI.createTableViewRow({
        title: "1",
        id: "__alloyId82"
    });
    __alloyId81.push($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createTableViewRow({
        title: "2",
        id: "__alloyId83"
    });
    __alloyId81.push($.__views.__alloyId83);
    $.__views.__alloyId79 = Ti.UI.createTableView({
        data: __alloyId81,
        search: $.__views.__alloyId80,
        id: "__alloyId79"
    });
    $.__views.index.add($.__views.__alloyId79);
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