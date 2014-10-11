var Cloud = require("ti.cloud");

$.submit.addEventListener('click', function(event){
	Cloud.Users.create({
	    email: $.email.value,
	    first_name: $.firstName.value,
	    last_name: $.lastName.value,
	    password: $.password.value,
	    password_confirmation: $.password.value
	}, function (e) {
	    if (e.success) {	    	
	        var user = e.users[0];
	        alert('Success:\n' +
	            'id: ' + user.id + '\n' +
	            'sessionId: ' + Cloud.sessionId + '\n' +
	            'first name: ' + user.first_name + '\n' +
	            'last name: ' + user.last_name);
	    } else {	    	
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

$.signup.open();