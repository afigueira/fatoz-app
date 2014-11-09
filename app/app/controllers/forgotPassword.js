$.forgotPassword.open();

$.submit.addEventListener('click', function(e){
	var email = $.email.value;

	if(email){		
		Alloy.Globals.Cloud.Users.requestResetPassword({
		    email: email
		}, function (e) {
		    if (e.success) {
		        alert('Siga as instruções enviadas para o seu e-mail.');
		    } else {
		        alert('Houve um erro ou este e-mail não está cadastrado');
		    }
		});
	}
});