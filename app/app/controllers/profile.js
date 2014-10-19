/*$.profile.open();*/
require('alloy').Globals.drawer($.sidebar, $.drawer, 'Perfil');


Cloud.Users.showMe(function (e) {
    if (e.success) {
        var user = e.users[0];
        
		$.userName.text = user.first_name + " " + user.last_name;
				
		Cloud.Objects.query({
		    classname: 'cities',
		    page: 1,
		    per_page: 1,
		    where: {
		        id: user.cities_id
		    }
		}, function (e) {
		    if (e.success) {		
		    	var city = e.cities[0].name;						
				Cloud.Objects.query({
				    classname: 'states',
				    page: 1,
				    per_page: 1,
				    where: {
				        states_id: e.cities[0].states_id
				    }
				}, function (e) {
				    if (e.success) {
						$.cityState.text = city + ', ' + e.states[0].name;
				    } else {
				        alert('Error:\n' +
				            ((e.error && e.message) || JSON.stringify(e)));
				    }
				});
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		}); 
            
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
