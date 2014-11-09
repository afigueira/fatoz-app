/*Android footer: ca-app-pub-1202817906596777/9714576843
Android header: ca-app-pub-1202817906596777/5284377248
iOS footer: ca-app-pub-1202817906596777/6621509640
iOS header: ca-app-pub-1202817906596777/3528442443

https://github.com/appcelerator/titanium_modules
Precisa instalar o módulo do admob */



Alloy.Globals.constants = {
	
	BASE_COLOR: "#e33124",
	NAV_BAR_COLOR: "#d63023",
	FACEBOOK_BUTTON_COLOR: "#3b5998",
	BACKGROUND_INSIDE_COLOR: "#323233"
	
};

Alloy.Globals.drawer = function(sidebar, element, titleActionBar, func) {	
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

		if(typeof(func) == "function"){
			func.call();
		}
	}
	
	element.open();	
};

Alloy.Globals.maxPointsPerMatch = 100;
Alloy.Globals.maxPointsPerQuestion = 20;
Alloy.Globals.maxTimePerQuestion = 10;

Alloy.Globals.calculateQuestionPoints = function(time, isCorrect){

	var points = Number(isCorrect) * (Alloy.Globals.maxPointsPerQuestion * ((Alloy.Globals.maxTimePerQuestion * 1000) - time) / (Alloy.Globals.maxTimePerQuestion * 1000));

	return Math.round(points);
};

Alloy.Globals.Facebook = require('facebook');
Alloy.Globals.Facebook.appid = '1480203828923788';
Alloy.Globals.Facebook.permissions = ['email'];
Alloy.Globals.Facebook.addEventListener('login', function(e) {
	Titanium.App.fireEvent('facebook.login', e);
});

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

socket.on('creatingMatch', function(data) {
	Titanium.App.fireEvent('websocket.creatingMatch', data);
});

socket.on('mountMatch', function(data) {
	Titanium.App.fireEvent('websocket.mountMatch', data);
});

socket.on('showQuestion', function(data) {
	Titanium.App.fireEvent('websocket.showQuestion', data);
});

socket.on('startQuestion', function(data) {
	Titanium.App.fireEvent('websocket.startQuestion', data);
});

socket.on('fighterAnswered', function(data) {
	Titanium.App.fireEvent('websocket.fighterAnswered', data);
});

socket.on('finishGame', function(data) {
	Titanium.App.fireEvent('websocket.finishGame', data);
});

// app events
Titanium.App.addEventListener('websocket.dispatchEvent', function(data) {
	if (data.event) {
		data.userId = Ti.App.Properties.getString('userId');
		console.log('Data events: ', data);		
		socket.emit(data.event, data);	
	}	
});