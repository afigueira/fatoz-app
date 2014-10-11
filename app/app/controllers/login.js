Cloud = require("ti.cloud");

Cloud.Users.showMe(function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
		
		Alloy.createController('categories');
		
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
		
		$.login.open();
    }
});

$.submit.addEventListener('click', function(event){
	Cloud.Users.login({
	    login: $.email.value,
	    password: $.password.value
	}, function (e) {
	    if (e.success) {
			Alloy.createController('categories');
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

$.signup.addEventListener('click', function(event){
	Alloy.createController('signup');	
});