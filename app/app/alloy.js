Alloy.Globals.constants = {
	
	BASE_COLOR: "#e33124",
	NAV_BAR_COLOR: "#d63023",
	FACEBOOK_BUTTON_COLOR: "#3b5998",
	BACKGROUND_INSIDE_COLOR: "#323233"
	
};

Alloy.Globals.drawer = function(sidebar, element, titleActionBar) {	
	sidebar.add(Alloy.createController('sidebar').getView());

	element.addEventListener('open', onNavDrawerWinOpen);
	function onNavDrawerWinOpen(evt) {
		this.removeEventListener('open', onNavDrawerWinOpen);
		if(this.getActivity()) {
			// need to explicitly use getXYZ methods
			var actionBar = this.getActivity().getActionBar();
			if (actionBar) {
				// Now we can do stuff to the actionbar
				actionBar.setTitle(titleActionBar);
				// show an angle bracket next to the home icon,
				// indicating to users that the home icon is tappable
				//actionBar.setDisplayHomeAsUp(true);
				// toggle the left window when the home icon is selected
				actionBar.setOnHomeIconItemSelected(function() {
					element.toggleLeftWindow();
				});
			}
		}
	}
	
	element.open();	
};
