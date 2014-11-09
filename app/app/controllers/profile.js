var args = arguments[0] || {};

require('alloy').Globals.drawer($.sidebar, $.drawer, 'Perfil', init());

function init(){
	myInfos();
	achievements();


	if (typeof args.scrollToView != 'undefined') {
		tabNavigation({source: {contentTabsIndex: args.scrollToView}});
	}
}


function tabNavigation(e){	
	var contentTabsIndex = e.source.contentTabsIndex;

	$.contentTabs.scrollToView(Number(contentTabsIndex));

	for(var i=0,j=$.tabs.children.length; i<j; i++){
		$.tabs.children[i].children[1].visible = false;
	};

	$.tabs.children[contentTabsIndex].children[1].visible = true;
}

function myInfos(){
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
}


function achievements(){
	Cloud.Objects.query({
	    classname: 'categories'
	}, function (e) {
	    if (e.success) {
	    	var categories = e.categories;
	    	console.log('categories ----->', e.categories);

	    	for(var i=0, j=e.categories.length; i<j; i++){
				var rowConquer = Titanium.UI.createTableViewRow();
			    $.addClass(rowConquer, 'rowConquer');

			    var imageConquer = Titanium.UI.createImageView({
			    	image: '/images/conquer-master-of-chemistry.png'
			    });
			    $.addClass(imageConquer, 'imageConquer');

			    var rightContentConquer = Titanium.UI.createView();
			    $.addClass(rightContentConquer, 'rightContentConquer');

			    var conquerTitle = Titanium.UI.createLabel({
			    	text: categories[i].title
			    });
			    $.addClass(conquerTitle, 'conquerTitle proximaNovaRegular');

			    console.log(categories[i].id+' ELEMENTO -------->', conquerTitle);

			    var layoutHorizontal = Titanium.UI.createView();
			    $.addClass(layoutHorizontal, 'layoutHorizontal left0');

			    var numberConquer = Titanium.UI.createLabel({
			    	text: '0 de ' + categories[i].points_to_badge,
			    	points_to_badge: categories[i].points_to_badge,
			    	categories_id: categories[i].id
			    });
			    $.addClass(numberConquer, 'numberConquer proximaNovaRegular');

			    var ptConquer = Titanium.UI.createLabel({
			    	text: 'Pontos'
			    });
			    $.addClass(ptConquer, 'ptConquer proximaNovaRegular');

			    var percentConquer = Titanium.UI.createView();
			    $.addClass(percentConquer, 'percentConquer');

			    var percentNumber = Titanium.UI.createLabel({
			    	text: '0%'
			    });
			    $.addClass(percentNumber, 'percentNumber');

			    var progressBar = Titanium.UI.createView();
			    $.addClass(progressBar, 'progressBar');

			    var percentBar = Titanium.UI.createView({
			    	width: 0
			    });
			    $.addClass(percentBar, 'percentBar');

			    var borderGrayConquer = Titanium.UI.createView();
			    $.addClass(borderGrayConquer, 'borderGray borderGrayConquer');


			    rowConquer.add(imageConquer);

			    rightContentConquer.add(conquerTitle);
			    
			    layoutHorizontal.add(numberConquer);
			    layoutHorizontal.add(ptConquer);
			    rightContentConquer.add(layoutHorizontal);


			    percentConquer.add(percentNumber);
			    
			    progressBar.add(percentBar);
			    percentConquer.add(progressBar);

			    rightContentConquer.add(percentConquer);

			    rowConquer.add(rightContentConquer);

			    rowConquer.add(borderGrayConquer);

			    $.conquer.appendRow(rowConquer);
			};
		
			setPointsAchievements($.conquer.data[0].rows, $.conquer.data[0].rows.length, 0);
	    }
	});
}

function setPointsAchievements(element, length, a){
	var label;	
	var pointsToBadge;
	var categoriesId;
	
	for (var i=a; i < length; i++){		
		label = element[i].children[1].children[1].children[0];
		var percentBar = element[i].children[1].children[2].children[1].children[0];	
		var percent = element[i].children[1].children[2].children[0];
		
		pointsToBadge = label.points_to_badge;
		categoriesId = label.categories_id;

		Cloud.Objects.query({
		    classname: 'achievements',		    
		    where: {
		        categories_id: categoriesId,
		        users_id: Ti.App.Properties.getString('userId')
		    }
		}, function (e) {
		    if (e.success) {
		    	var achievement = e.achievements[0];

		    	label.text = achievement.points + ' de ' + pointsToBadge;
		    	
				percentBar.width = (achievement.points * 100 / pointsToBadge) + '%';
				percent.text = (achievement.points * 100 / pointsToBadge) + '%';

		    	element.shift();
	            setPointsAchievements(element, length, i);
		    }
		});		
		break;		
	}
}

$.settings.addEventListener('click', function(){
	Alloy.createController('settings');
});