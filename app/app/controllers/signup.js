$.submit.addEventListener('click', function(event){
	var strName = $.firstName.value;
	strName = strName.split(" ");
	var firstName = strName.shift();
	var lastName = strName.join(" ");

	Alloy.Globals.Cloud.Users.create({
	    email: $.email.value,
	    first_name: firstName,
	    last_name: lastName,
	    password: $.password.value,
	    password_confirmation: $.password.value,
	    custom_fields: {
	    	profile_image: Alloy.CFG.default_image_avatar,
	    	cover_image: Alloy.CFG.default_image_cover	
	    }	    
	}, function (e) {
	    if (e.success) {	    		        
	    	Alloy.createController('home');
	    	
	        alert('Cadastro realizado com sucesso.');

	        Ti.App.Properties.setString('sessionId', Alloy.Globals.Cloud.sessionId);
	    	Ti.App.Properties.setString('userId', e.users[0].id);
	    	Ti.App.Properties.setString('userName', e.users[0].first_name + " " + e.users[0].last_name);
	        Alloy.Globals.updateFacebookInfos();

	        
	    } else {	    	
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

function banner(){
	Alloy.Globals.showBanner($.window, 'signup', 'bottom');
}

$.window.open();

banner();
