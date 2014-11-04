$.forgotPassword.open();

$.submit.addEventListener('click', function(e){
	var email = $.email.value;

	if(email){		
		Cloud.Users.requestResetPassword({
		    email: email
		}, function (e) {
		    if (e.success) {
		        alert('Success: Reset Request Sent');
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
});