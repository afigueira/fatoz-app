var args = arguments[0] || {};

function init(){
	categoryId = args.categoryId || '';

	Cloud.Objects.query({
	    classname: 'achievements',
	    where: {
		     categories_id: categoryId,
		     points: { '$gte': 0 }
		},
		order: '-points'
	}, function (e) {
	    if (e.success) {        
	        console.log(e);
	        
			for(var i=0,j=e.achievements.length; i<j; i++){								
				var rowRank = Titanium.UI.createTableViewRow();
			    $.addClass(rowRank, "rowRank");
			    
			    var rankNumber = Titanium.UI.createLabel({
			    	text: (i+1)+' .'
			    });
			    $.addClass(rankNumber, "rankNumber proximaNovaRegular");
			    
			    var imageProfile = Titanium.UI.createImageView({
			    	backgroundImage: "http://i252.photobucket.com/albums/hh23/GSMFans_Brasil/Papeis_de_Parede/128x128/Paisagem/GSMFans_Paisagem-009.jpg"
			    });
			    $.addClass(imageProfile, "imageProfile imageProfileRank");
			    
			    var rankName = Titanium.UI.createLabel({
					id: 'user_' + e.achievements[i].user_id
			    });
			    $.addClass(rankName, "rankName proximaNovaRegular");

			    var rankPoint = Titanium.UI.createView();
			    $.addClass(rankPoint, "rankPoint");
			    
			    var rankPt = Titanium.UI.createLabel({
			    	textid: 'abbreviation_points'
			    });
			    $.addClass(rankPt, "rankPt proximaNovaRegular");
			    
			    var rankTotal = Titanium.UI.createLabel({
			    	text: e.achievements[i].points
			    });
			    $.addClass(rankTotal, "rankTotal proximaNovaRegular");
			    
			    var borderGray = Titanium.UI.createView();
			    $.addClass(borderGray, "borderGray borderGrayProfile");	
			    
			    
			    rowRank.add(rankNumber);
			    rowRank.add(imageProfile);
			    rowRank.add(rankName);
			    
			    rankPoint.add(rankPt);
			    rankPoint.add(rankTotal);
			    rowRank.add(rankPoint);
			    
			    rowRank.add(borderGray);
			    
			    $.listRank.appendRow(rowRank);
				
				Cloud.Users.show({
				    user_id: e.achievements[i].user_id
				}, function (e) {
				    if (e.success) {
				        var user = e.users[0];
				        var userId = user.id;
				        
				       	/*$[userId].text = user.first_name + " " + user.last_name;*/
				       	
				       	var label = getUserLabel('user_'+userId);
				       	label.text = user.first_name + " " + user.last_name;
				   	     
				    }
				});
			};
	        
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
});	
}

function getUserLabel(userId){
	console.log($.listRank);
	console.log($.listRank.sections);
	var rows = $.listRank.sections[0].rows;
	var totalRows = rows.length;
	console.log(rows);
	for(var i=0; i<totalRows; i++){
		var elements = rows[i].children;
		var totalElements = elements.length;
		console.log('---');
		console.log(elements);
		for(var j=0; j<totalElements; j++){
			var element = elements[j];
			console.log('element:' + element);
			if(element.id && element.id == userId){
				return element;
			}
		}; 	  
	};	
}

$.ranking.addEventListener('open', function(e){
	init();
});

$.ranking.open();
