var args = arguments[0] || {};

Alloy.Globals.drawer($.sidebar, $.drawer, 'Resultado da Partida', init());

var myUserSide;
var matchId = args.matchId;
var pointsA;
var pointsB;

function init(){
    matches();
}

function matches(){
    Cloud.Objects.query({
        classname: 'matches',
        where: {
            id: matchId
        }
    }, function (e) {   
        if (e.success) {
            match = e.matches[0];
            var userA = match.user_a;
            var userB = match.user_b;
            pointsA = match.points_a;
            pointsB = match.points_b;

            setUserInfo(userA, 'a', pointsA);
            setUserInfo(userB, 'b', pointsB);


            if(pointsA > pointsB){
                $.trophyA.visible = true;
            }else{
                $.trophyB.visible = true;
            }

            console.log(match);
            console.log('pointsA', pointsA);
            console.log('pointsB', pointsB);

            //matchPoints


            
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}


function setUserInfo(userId, side, points){
	Cloud.Users.show({
		user_id: userId
	}, function(e){		
		if(e.success){
			var user = e.users[0];						
			
			var name = user.id == Titanium.App.Properties.getString('userId') ? 'Você' : user.first_name;
			
			if (user.id == Titanium.App.Properties.getString('userId')) {
				myUserSide = side;
			}
						
			if(side == 'a'){				
				$.nameUserA.text = name;

				$.matchPoints.text = points;			
			}else{
				$.nameUserB.text = name;

				$.matchPoints.text = points;
			}
		}
	});
}
