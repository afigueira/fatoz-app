var args = arguments[0] || {};

Alloy.Globals.drawer($.sidebar, $.leftMenu, $.drawer, 'Resultado final', init);

var matchId = args.matchId;
var pointsA;
var pointsB;
var match;
var fighterName = '';
var matchResultString = '';
 
function init(){
    matches();
    
    banner();
    
    
}

function banner(){
	Alloy.Globals.showBanner($.window, 'gameResult', 'bottom');
}

function events() {
	$.buttonPlayAgain.addEventListener('click', openQueue);
	$.buttonRanking.addEventListener('click', openRanking);
}

function openQueue() {
	Alloy.createController('roomQueue', {categoryId: match.category});
}

function openRanking() {
	Alloy.createController('ranking', {categoryId: match.category});
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
            
            var myUserId = Titanium.App.Properties.getString('userId');
            
            if (userA == myUserId && pointsA > pointsB || userB == myUserId && pointsB > pointsA) {
            	matchResultString = 'venci!!!';
            } else {
            	matchResultString = 'perdi';
            }

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
			if (user.id != Titanium.App.Properties.getString('userId')) fighterName = user.first_name + ' ' + user.last_name;
						
			if(side == 'a'){				
				$.nameUserA.text = name;
				$.pointsA.text = points;
				//Alloy.Globals.loadPhoto($.imageProfileA, 'image', user.custom_fields.profile_image);
				$.imageProfileA.image = user.custom_fields.profile_image;
			}else{
				$.nameUserB.text = name;
				$.pointsB.text = points;
				//Alloy.Globals.loadPhoto($.imageProfileB, 'image', user.custom_fields.profile_image);
				$.imageProfileB.image = user.custom_fields.profile_image;
			}
		}
	});
}

function shareFacebook() {
	var data = {
	    link : "http://www.fatoz.com.br/",
	    name : "Fatoz Game",
	    message : "Acabei de disputar uma partida contra" + fighterName + " e " + matchResultString,
	    caption : "Fatoz Game",
	    picture : "https://s3-us-west-1.amazonaws.com/storage.cloud.appcelerator.com/Za5D1IiTHPF1KPaqJmPc0L3Uq2Q6hQu7/photos/01/27/5469774944f2450e5608b0f7/logo_fb_original.jpg",
	    description: ""
	};

	Alloy.Globals.Facebook.dialog('feed', data, function(e) {});
}
