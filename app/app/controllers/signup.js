var Cloud = require("ti.cloud");

Cloud.Objects.query({
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
			console.log(e.states[i].name);
			console.log(row);
		};
		    	    			 
		$.states.add([states]);	





    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});

$.states.addEventListener('change', function(e) {



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
				  
			  	cities.addRow(row);
				console.log(e.cities[i].name);
				console.log(row);
			};
			    	    			 
			$.cities.add(cities);	
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
});

$.submit.addEventListener('click', function(event){
	
	Cloud.Users.create({
	    email: $.email.value,
	    first_name: $.firstName.value,
	    last_name: $.lastName.value,
	    password: $.password.value,
	    password_confirmation: $.password.value,
	    cities_id: $.cities.getSelectedRow(0).title
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