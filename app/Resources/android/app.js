var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.constants = {
    BASE_COLOR: "#e33124",
    NAV_BAR_COLOR: "#d63023",
    FACEBOOK_BUTTON_COLOR: "#3b5998",
    BACKGROUND_INSIDE_COLOR: "#323233"
};

Alloy.Globals.drawer = function(sidebar, element, titleActionBar) {
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
    }
    sidebar.add(Alloy.createController("sidebar").getView());
    element.addEventListener("open", onNavDrawerWinOpen);
    element.open();
};

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

Titanium.App.addEventListener("websocket.dispatchEvent", function(data) {
    if (data.event) {
        data.userId = Ti.App.Properties.getString("userId");
        console.log("Data events: ", data);
        socket.emit(data.event, data);
    }
});

Alloy.createController("index");