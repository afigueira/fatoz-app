$.profile.open();


Cloud.Users.showMe(function (e) {
    if (e.success) {
        var user = e.users[0];
        
		$.userName.text = user.first_name + " " + user.last_name; 
            
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
