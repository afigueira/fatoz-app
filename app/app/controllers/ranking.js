var args = arguments[0] || {};

Alloy.Globals.drawer($.sidebar, $.drawer, 'Ranking', init);

function init(){
	categoryId = args.categoryId || '';

	Alloy.Globals.Cloud.Objects.query({
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
				var rowRank = Titanium.UI.createTableViewRow({
					users_id: e.achievements[i].users_id
				});
				console.log('users_id', e.achievements[i].users_id);

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
					id: 'user_' + e.achievements[i].users_id
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
				
			};

			
			setUserName($.listRank.data[0].rows, $.listRank.data[0].rows.length, 0);
	        
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});	
}

function setUserName(element, length, a){	
	var usersId;	
	var row;		

	

	for (var i=a; i < length; i++){		
		row = element[i];
		usersId = row.users_id;

		Alloy.Globals.Cloud.Users.query({		    
		    where: {
		        id: usersId
		    }
		}, function (e) {
		    if (e.success) {
		        var user = e.users[0];

		        row.children[2].text =  user.first_name;

		        element.shift();
		        if(element){
		        	setUserName(element, length, i);
		        }
		    }
		});	
		break;
	};
}

/*function getUserLabel(userId){
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
}*/

