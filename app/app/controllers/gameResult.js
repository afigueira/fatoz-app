var args = arguments[0] || {};

Alloy.Globals.drawer($.sidebar, $.drawer, 'Resultado da Partida', init);

var matchId = args.matchId;
var pointsA;
var pointsB;
var match;
 
function init(){
    matches();
}

function events() {
	$.buttonPlayAgain.addEventListener('click', openQueue);
	$.buttonRanking.addEventListener('click', openRanking);
}

function openQueue() {
	Alloy.createController('roomQueue', {categoryId: match.category});
	$.destroy();
}

function openRanking() {
	Alloy.createController('ranking', {categoryId: match.category});
	$.destroy();
}

function matches(){
    Alloy.Globals.Cloud.Objects.query({
        classname: 'matches',
        where: {
            id: matchId
        }
    }, function (e) {   
        if (e.success) {
            match = e.matches[0];
            
            events();
            
            var userA = match.user_a;
            var userB = match.user_b;
            pointsA = match.points_a;
            pointsB = match.points_b;

            setUserInfo(userA, 'a', pointsA);
            setUserInfo(userB, 'b', pointsB);


			if (pointsA != pointsB) {
				if(pointsA > pointsB){
	            	$.addClass($.imageProfileA, 'imageProfile imageProfileYouResult borderGreenGame');
	            	$.addClass($.imageProfileB, 'imageProfile imageProfileYouResult borderRedGame');
	                $.trophyA.visible = true;
	            }else{
	            	$.addClass($.imageProfileB, 'imageProfile imageProfileYouResult borderGreenGame');
	            	$.addClass($.imageProfileA, 'imageProfile imageProfileYouResult borderRedGame');
	                $.trophyB.visible = true;
	            }
			} else {
				$.addClass($.imageProfileA, 'imageProfile imageProfileYouResult borderRedGame');
				$.addClass($.imageProfileB, 'imageProfile imageProfileYouResult borderRedGame');
			}
            
            
        } else {
            alert('Houve um erro para pegar os dados da partida');
        }
    });
}


function setUserInfo(userId, side, points){
	Alloy.Globals.Cloud.Users.show({
		user_id: userId
	}, function(e){		
		if(e.success){
			var user = e.users[0];						
			
			var name = user.id == Titanium.App.Properties.getString('userId') ? 'Você' : user.first_name;
						
			if(side == 'a'){				
				$.nameUserA.text = name;
				$.pointsA.text = points;		
			}else{
				$.nameUserB.text = name;
				$.pointsB.text = points;
			}
		}
	});
}
