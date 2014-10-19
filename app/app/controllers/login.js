Cloud = require("ti.cloud");

var createController = 'home';

$.submit.addEventListener('click', function(event){
	Titanium.App.fireEvent('websocket.dispatchEvent', {event: 'joinRoom', roomId: '543c3ff6c7b8a708700277fc'});
	Cloud.Users.login({
	    login: $.email.value,
	    password: $.password.value
	}, function (e) {
	    if (e.success) {
	    	Ti.App.Properties.setString('sessionId', Cloud.sessionId);
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