var createController = 'home';

$.submit.addEventListener('click', function(event){	
	Alloy.Globals.Cloud.Users.login({
	    login: $.email.value,
	    password: $.password.value
	}, function (e) {
	    login(e);
	});
});

$.btnFacebook.addEventListener('click', function(event){
	console.log('btn facebook clicked');
	console.log(Alloy.Globals.Facebook);
	Alloy.Globals.Facebook.authorize();
});

$.signup.addEventListener('click', function(event){	
	Alloy.createController('signup');
	$.login.close();
});

$.forgotPassword.addEventListener('click', function(e){	
	Alloy.createController('forgotPassword');
	$.login.close();
});

Titanium.App.addEventListener('facebook.login', function(e) {
	if (e.success) {
		Alloy.Globals.Cloud.SocialIntegrations.externalAccountLogin({
			type: 'facebook',
			token: Alloy.Globals.Facebook.accessToken
		}, function(e) {
			login(e);			
		});
	} else {
		alert('Houve um erro para efetuar seu login');
	}
});

function login(e) {
	if (e.success) {	    	
			Alloy.createController(createController);

	    	Ti.App.Properties.setString('sessionId', Alloy.Globals.Cloud.sessionId);
	    	Ti.App.Properties.setString('userId', e.users[0].id);
	    	Ti.App.Properties.setString('userName', e.users[0].first_name + " " + e.users[0].last_name);
	    	Alloy.Globals.updateFacebookInfos();
						
			$.login.close();
	    } else {
	        alert('Houve um erro para efetuar seu login');
	    }
}

$.login.addEventListener('close', function(e) {
	$.destroy();
	$.off();
});

$.login.open();