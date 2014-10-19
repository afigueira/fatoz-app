var args = arguments[0] || {};

categoryId = args.categoryId || '';
var matchId;
var mountReceived = false;
var fighterReceived = false;

$.profileTitleA.text= Ti.App.Properties.getString('userName');

if(categoryId){
	Titanium.App.fireEvent('websocket.dispatchEvent', { 
		event:'joinRoom', 
		roomId: categoryId
		}
	);	
	
	Titanium.App.addEventListener('websocket.creatingMatch', function(e){
		
		Cloud.Users.query({
		    page: 1,
		    per_page: 1,
		    where: {
		        id:e.fighterId 
		    }
		}, function (e) {
		    if (e.success) {		    					
				$.searchPlayer.visible = false;
				$.profileB.visible = true;
				$.profileTitleB.text = e.users[0].first_name + " " + e.users[0].last_name;
				
				fighterReceived = true;
				if(mountReceived){
					mountMatch();
				}
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	});
	
	Titanium.App.addEventListener('websocket.mountMatch', function(e){
		mountReceived = true;
		matchId = e.matchId;
		if(fighterReceived){
			mountMatch();
		}		
		
	});

}

function mountMatch(){
	Alloy.createController('game', {matchId: matchId});
}



$.roomQueue.open();

