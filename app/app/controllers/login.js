Cloud = require("ti.cloud");

var createController = 'home';

$.submit.addEventListener('click', function(event){	
	Cloud.Users.login({
	    login: $.email.value,
	    password: $.password.value
	}, function (e) {
	    if (e.success) {
	    	Ti.App.Properties.setString('sessionId', Cloud.sessionId);
	    	Ti.App.Properties.setString('userId', e.users[0].id);
			Alloy.createController(createController);
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

$.signup.addEventListener('click', function(event){
	Alloy.createController('signup');	
});

$.login.open();