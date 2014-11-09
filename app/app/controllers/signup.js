/*Cloud.Objects.query({
    classname: 'states',
    page: 1,
    per_page: 27
}, function (e) {
    if (e.success) {    	    	
    	var states = Ti.UI.createPickerColumn();
		
    	for(var i=0,j=e.states.length; i<j; i++){
    		var row = Ti.UI.createPickerRow({
			    title: e.states[i].name,
			    states_id: e.states[i].states_id
			  });
			  
		  	states.addRow(row);			
		};
		    	    			
		$.states.remove($.states.children[0]);

		$.states.add([states]);	





    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/

/*$.states.addEventListener('change', function(e) {



    var states_id = e.row.states_id;
 
    Cloud.Objects.query({
	    classname: 'cities',
	    page: 1,
	    per_page: 100,
	    where: {
	    	states_id: states_id
	    }
	}, function (e) {
	    if (e.success) {	    	
	    	var cities = Ti.UI.createPickerColumn();
			
	    	for(var i=0,j=e.cities.length; i<j; i++){
	    		var row = Ti.UI.createPickerRow({
				    title: e.cities[i].name,
				    id: e.cities[i].id
				  });

			};

			$.cities.remove($.cities.children[0]);
			    	    			 
			$.cities.add(cities);	
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});*/

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
	    profile_image: '545f827444f2450e5e045905',
	    cover_image: '545f82f57c874208b50014b0'
	}, function (e) {
	    if (e.success) {	    	
	        var user = e.users[0];
	        alert('Cadastro realizado com sucesso.');
	        Alloy.createController('home');
	        $.destroy();
	    } else {	    	
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

$.signup.open();