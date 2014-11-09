$.home.addEventListener('click', function(){
	Alloy.createController('home');
	$.destroy();
});

$.profile.addEventListener('click', function(){
	Alloy.createController('profile');
	$.destroy();
});

/*
$.statistics.addEventListener('click', function(){
	Alloy.createController('profile', {scrollToView: 0});
	$.destroy();
});*/

$.achievements.addEventListener('click', function(){
	Alloy.createController('profile', {scrollToView: 3});
	$.destroy();
});

$.categories.addEventListener('click', function(){
	Alloy.createController('categories');
	$.destroy();
});

$.settings.addEventListener('click', function(){
	Alloy.createController('settings');
	$.destroy();
});

$.exit.addEventListener('click', function(){
	var alertWindow = Titanium.UI.createAlertDialog({
	    title: 'Sair',
	    message: 'Deseja sair agora?',
	    cancel:1,
	    buttonNames: ['Sair','Cancelar']
	});
	 
	alertWindow.addEventListener('click', function(e){    
	    switch(e.index){
	    case 0:
	    	Alloy.Globals.Facebook.logout();
	      	Alloy.Globals.Cloud.Users.logout(function (e) {
			    if (e.success) {
			        Alloy.createController('login');

			        Ti.App.Properties.removeProperty('sessionId');
	    			Ti.App.Properties.removeProperty('userId');
	    			Ti.App.Properties.removeProperty('userName');

	    			$.destroy();
			    }
			});
	      break;	        
	    }
	});
	 
	alertWindow.show();
});