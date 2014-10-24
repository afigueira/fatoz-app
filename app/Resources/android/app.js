var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.constants = {
    BASE_COLOR: "#e33124",
    NAV_BAR_COLOR: "#d63023",
    FACEBOOK_BUTTON_COLOR: "#3b5998",
    BACKGROUND_INSIDE_COLOR: "#323233"
};

Alloy.Globals.drawer = function(sidebar, element, titleActionBar, func) {
    function onNavDrawerWinOpen() {
        this.removeEventListener("open", onNavDrawerWinOpen);
        if (this.getActivity()) {
            var actionBar = this.getActivity().getActionBar();
            if (actionBar) {
                actionBar.setTitle(titleActionBar);
                actionBar.setOnHomeIconItemSelected(function() {
                    element.toggleLeftWindow();
                });
            }
        }
        "function" == typeof func && func.call();
    }
    sidebar.add(Alloy.createController("sidebar").getView());
    element.addEventListener("open", onNavDrawerWinOpen);
    element.open();
};

Alloy.Globals.calculateQuestionPoints = function(time, isCorrect) {
    var maxPoints = 20;
    var maxTime = 10;
    var points = Number(isCorrect) * (maxPoints * (1e3 * maxTime - time) / (1e3 * maxTime));
    return Math.round(points);
};

Alloy.Globals.Facebook = require("facebook");

Alloy.Globals.Facebook.appid = "1480203828923788";

Alloy.Globals.Facebook.permissions = [ "email" ];

Alloy.Globals.Facebook.addEventListener("login", function(e) {
    Titanium.App.fireEvent("facebook.login", e);
});

var io = require("socket.io");

var socket = io.connect("https://1f0b6fd33fa8afdb54e5479c5a17447732b25d68.cloudapp.appcelerator.com");

socket.on("connect", function() {
    Titanium.App.fireEvent("websocket.onConnect");
});

socket.on("onJoinedRoom", function() {
    alert("joined!");
});

socket.on("startMatch", function(data) {
    Titanium.App.fireEvent("websocket.startMatch", data);
});

socket.on("creatingMatch", function(data) {
    Titanium.App.fireEvent("websocket.creatingMatch", data);
});

socket.on("mountMatch", function(data) {
    Titanium.App.fireEvent("websocket.mountMatch", data);
});

socket.on("showQuestion", function(data) {
    Titanium.App.fireEvent("websocket.showQuestion", data);
});

socket.on("startQuestion", function(data) {
    Titanium.App.fireEvent("websocket.startQuestion", data);
});

socket.on("fighterAnswered", function(data) {
    Titanium.App.fireEvent("websocket.fighterAnswered", data);
});

socket.on("finishGame", function(data) {
    Titanium.App.fireEvent("websocket.finishGame", data);
});

Titanium.App.addEventListener("websocket.dispatchEvent", function(data) {
    if (data.event) {
        data.userId = Ti.App.Properties.getString("userId");
        console.log("Data events: ", data);
        socket.emit(data.event, data);
    }
});

Alloy.createController("index");