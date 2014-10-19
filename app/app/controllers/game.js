var args = arguments[0] || {};

var userReady = 0;

Cloud.Objects.query({
    classname: 'matches',
    where: {
        id: args.matchId
    }
}, function (e) {	
    if (e.success) {
        var match = e.matches[0];
        var userA = match.user_a;
        var userB = match.user_b;
        
        getUserInfo(userA, 'a');
        getUserInfo(userB, 'b');
        
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});


function getUserInfo(userId, side){
	Cloud.Users.show({
		user_id: userId
	}, function(e){		
		if(e.success){
			var user = e.users[0];
			var name = user.id == Titanium.App.Properties.getString('userId') ? 'Você' : user.first_name;
						
			if(side == 'a'){				
				$.nameScoreA.text = name;
			}else{
				$.nameScoreB.text = name;
			}
			
			userReady++;
			
			if(userReady == 2){
				Titanium.App.fireEvent('websocket.dispatchEvent', {
					event: 'userReady',
					matchId: args.matchId
				});
			}
		}
	});
}

$.game.open();