Cloud = require("ti.cloud");

var createController = 'home';

$.submit.addEventListener('click', function(event){	
	Cloud.Users.login({
	    login: $.email.value,
	    password: $.password.value
	}, function (e) {
	    login(e);
	});
});

$.btnFacebook.addEventListener('click', function(event){
	Alloy.Globals.Facebook.authorize();
});

$.signup.addEventListener('click', function(event){
	Alloy.createController('signup');	
});

Titanium.App.addEventListener('facebook.login', function(e) {
	if (e.success) {
		Cloud.SocialIntegrations.externalAccountLogin({
			type: 'facebook',
			token: Alloy.Globals.Facebook.accessToken
		}, function(e) {
			login(e);
		});
	} else {
		alert(e.error);
	}
});

function login(e) {
	if (e.success) {
    	Ti.App.Properties.setString('sessionId', Cloud.sessionId);
    	Ti.App.Properties.setString('userId', e.users[0].id);
		Alloy.createController(createController);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
}

$.login.open();