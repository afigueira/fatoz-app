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


var io = require('socket.io');
var socket = io.connect('https://1f0b6fd33fa8afdb54e5479c5a17447732b25d68.cloudapp.appcelerator.com');

// socket events
socket.on('connect', function() {
	Titanium.App.fireEvent('websocket.onConnect');
});

socket.on('onJoinedRoom', function(data) {
	alert('joined!');
});

socket.on('startMatch', function(data) {
	Titanium.App.fireEvent('websocket.startMatch', data);
});

// app events
Titanium.App.addEventListener('websocket.dispatchEvent', function(data) {
	if (data.event) {
		data.userId = Ti.App.Properties.getString('userId');
		socket.emit(data.event, data);	
	}	
});