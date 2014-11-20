Alloy.Globals.Cloud = require("ti.cloud");

Alloy.Globals.constants = {
	
	BASE_COLOR: "#e33124",
	NAV_BAR_COLOR: "#d63023",
	FACEBOOK_BUTTON_COLOR: "#3b5998",
	BACKGROUND_INSIDE_COLOR: "#323233"
	
};

Alloy.Globals.iOS7 = Titanium.Platform.osname == 'iphone' && parseFloat(Titanium.Platform.version) >= 7;
Alloy.Globals.marginTopWindow = Alloy.Globals.iOS7 ? 66 : 0;
Alloy.Globals.marginTopiOS7 = Alloy.Globals.iOS7 ? 20 : 0;

Alloy.Globals.updateFacebookInfos = function() {
	if (Alloy.Globals.Facebook.loggedIn) {
		Alloy.Globals.Facebook.requestWithGraphPath('me', {'fields': 'id,cover,picture.type(large)'}, 'GET', function(response) {
			if (response.success) {
				
				var result = response.result;
				if (typeof response.result == 'string') {
					result = JSON.parse(response.result);
				}
				
				var cover;

				if(result && result.cover && result.cover.source){
					cover = result.cover.source;
				}else{
					cover = "";
				}

				var profileImage = result.picture.data.url;
				
				Alloy.Globals.Cloud.Users.update({
					custom_fields: {
						profile_image:  profileImage,
						cover_image: cover
					}
				}, function(e) {
					if (e.success) {
						Titanium.App.fireEvent('facebook.updated');
					}
				});
			} else {
				Alloy.Globals.resetUserPhotos();
			}
		});
	} else {
		Alloy.Globals.resetUserPhotos();
	}
};

Alloy.Globals.resetUserPhotos = function() {
	Alloy.Globals.Cloud.Users.update({
		custom_fields: {
			profile_image:  Alloy.CFG.default_image_avatar,
			cover_image: Alloy.CFG.default_image_cover
		}
	}, function(e) {});
};

Alloy.Globals.drawer = function(sidebar, clickLeftMenu, element, titleActionBar, func) {
	if(Titanium.Platform.osname == 'iphone'){
		clickLeftMenu.addEventListener('click', element.toggleLeftWindow);
	}

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
			func();
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
Alloy.Globals.Facebook.permissions = ['email', 'publish_stream'];
Alloy.Globals.Facebook.addEventListener('login', function(e) {
	Titanium.App.fireEvent('facebook.login', e);
});

Alloy.Globals.loadPhoto = function(container, field, value) {
	if (value.indexOf('http') > -1) {
		container[field] = value;
	} else {
		Alloy.Globals.Cloud.Photos.show({
		    photo_id: value
		}, function (e) {
		    if (e.success) {
		        var photo = e.photos[0];
	
		        var urlImage = photo.urls.original;
	
	            container[field] = urlImage;
		    }
		});
	}
};

Alloy.Globals.arrayRand = function(array){
	var currentIndex = array.length, temporaryValue, randomIndex ;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
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

Alloy.Globals.banners = {
	ios: {
		header: 'ca-app-pub-1202817906596777/3528442443',
		footer: 'ca-app-pub-1202817906596777/6621509640',
		game: 	'ca-app-pub-1202817906596777/3845742842'
	}, android: {
		header: 'ca-app-pub-1202817906596777/5284377248',
		footer: 'ca-app-pub-1202817906596777/9714576843',
		game:	'ca-app-pub-1202817906596777/8275942442'
	}
};

// banner logic
Alloy.Globals.showBanner = function(container, page, position) {
	console.log('trying to show banner to page', page);
	Alloy.Globals.Cloud.Objects.query({
		classname: 'banners_pages',
		where: {
			page: page,
			banner: true
		}
	}, function(e){
		if (e.success && e.banners_pages.length > 0) {
			
			var platform = Titanium.Platform.osname == 'android' ? 'android' : 'ios';
			var unitId = Alloy.Globals.banners[platform][position];
			
			if (platform == 'ios') {
				Alloy.Globals.Admob = require("ti.admob");
				var admobView = Alloy.Globals.Admob.createView({
					left: 0,
					width: 320, height: 50,
					adUnitId: unitId,
					testing: false
				});
				admobView[position] = 0;
			
				container.add(admobView);
			}
		}
	});
};
