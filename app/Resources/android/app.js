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

Titanium.App.addEventListener("websocket.dispatchEvent", function(data) {
    if (data.event) {
        data.userId = Ti.App.Properties.getString("userId");
        socket.emit(data.event, data);
    }
});

Alloy.createController("index");