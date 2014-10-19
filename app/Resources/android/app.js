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

Alloy.createController("index");