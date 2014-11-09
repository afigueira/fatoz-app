var args = arguments[0] || {};

categoryId = args.categoryId || '';
var matchId;
var mountReceived = false;
var fighterReceived = false;

require('alloy').Globals.drawer($.sidebar, $.drawer, 'Procurando...' , init());


function init(){
	joinRoom();
}

function joinRoom(){
	 showMe();

	if(categoryId){
		Titanium.App.fireEvent('websocket.dispatchEvent', { 
			event:'joinRoom', 
			roomId: categoryId
		});	
		
		Titanium.App.addEventListener('websocket.creatingMatch', function(e){
			
			Cloud.Users.query({
			    page: 1,
			    per_page: 1,
			    where: {
			        id:e.fighterId 
			    }
			}, function (e) {
			    if (e.success) {		    					
					// $.searchPlayer.visible = false;
					$.addClass($.searchPlayer, 'visibleFalse');					
					$.profileB.visible = true;
					$.trophy.visible = true;
					$.profileTitleB.text = e.users[0].first_name + " " + e.users[0].last_name;
					
					Cloud.Photos.show({
					    photo_id: e.users[0].custom_fields.profile_image
					}, function (e) {
					    if (e.success) {
					        var photo = e.photos[0];			        

					        $.imageProfileB.image = photo.urls.original;
					    }
					});

					Cloud.Photos.show({
					    photo_id: e.users[0].custom_fields.cover_image
					}, function (e) {
					    if (e.success) {
					        var photo = e.photos[0];			        

					        $.profileB.backgroundImage = photo.urls.original;					        
					    }
					});

					fighterReceived = true;

					if(mountReceived){
						mountMatch();
					}

					
			    } else {
			        alert('Error:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		});
		
		Titanium.App.addEventListener('websocket.mountMatch', function(e){
			mountReceived = true;
			matchId = e.matchId;
			if(fighterReceived){
				mountMatch();
			}		
			
		});

	}
}

function mountMatch(){
	Alloy.createController('game', {matchId: matchId});
}

function showMe(){
	$.profileTitleA.text = Ti.App.Properties.getString('userName');
	
	Cloud.Users.showMe(function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        
	        Cloud.Photos.show({
			    photo_id: user.custom_fields.profile_image
			}, function (e) {
			    if (e.success) {
			        var photo = e.photos[0];			        

			        $.imageProfileA.image = photo.urls.original;
			    }
			});

			Cloud.Photos.show({
			    photo_id: user.custom_fields.cover_image
			}, function (e) {
			    if (e.success) {
			        var photo = e.photos[0];			        

			        $.coverA.backgroundImage = photo.urls.original;
			    }
			});
	    }
	});
}


$.cancelMatch.addEventListener('click', function(e){
	Titanium.App.fireEvent('websocket.dispatchEvent', { 
		event:'leaveRoom', 
		roomId: categoryId
	});
	
	Alloy.createController('home');
});