Alloy.Globals.drawer($.sidebar, $.drawer, 'Definições', init);

function init(){
	showUser();
}


function showUser(){
	Alloy.Globals.Cloud.Users.showMe(function (e) {
	    if (e.success) {
	        var user = e.users[0];	        

	        $.firstName.value = user.first_name;
	        $.lastName.value = user.last_name;
	        $.email.value = user.email;
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}

function updateUser(obj){
	Alloy.Globals.Cloud.Users.update(obj, function (e) {
	    if (e.success) {	    	
	    	alert("Dados salvos com sucesso.");
	    	Ti.App.Properties.setString('userName', e.users[0].first_name + " " + e.users[0].last_name);	    	
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});	
}

$.submit.addEventListener('click', function(){
	if($.firstName.value && $.lastName.value && $.email.value){
		var obj = {
		    email: $.email.value,
		    first_name: $.firstName.value,
		    last_name: $.lastName.value		    
		};

    	if($.password.value){
    		obj.password = $.password.value;
    		obj.password_confirmation = $.password.value;
    	}

		updateUser(obj);
	}else{
		alert("Preencha os campos vazios.");
	}
});