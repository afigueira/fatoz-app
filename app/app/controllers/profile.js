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
		    	text: categories[i].title,
		    	id: categories[i].id
		    });
		    $.addClass(conquerTitle, 'conquerTitle proximaNovaRegular');

		    console.log(categories[i].id+' ELEMENTO -------->', conquerTitle);

		    var layoutHorizontal = Titanium.UI.createView();
		    $.addClass(layoutHorizontal, 'layoutHorizontal left0');

		    var numberConquer = Titanium.UI.createLabel({
		    	text: '468'
		    });
		    $.addClass(numberConquer, 'numberConquer proximaNovaRegular');

		    var ptConquer = Titanium.UI.createLabel({
		    	text: 'Pontos em ciência'
		    });
		    $.addClass(ptConquer, 'ptConquer proximaNovaRegular');

		    var percentConquer = Titanium.UI.createView();
		    $.addClass(percentConquer, 'percentConquer');

		    var percentNumber = Titanium.UI.createLabel({
		    	text: '100%'
		    });
		    $.addClass(percentNumber, 'percentNumber');

		    var progressBar = Titanium.UI.createView();
		    $.addClass(progressBar, 'progressBar');

		    var percentBar = Titanium.UI.createView();
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
    }
});


/*Cloud.Objects.query({
    classname: 'achievements',
    where: {
		user_id: Titanium.App.Properties.getString('userId')		
	},
	order: '-points'
}, function (e) {
    if (e.success) {
    	var achievement = e.achievements;
    	console.log('----->', e.achievements);
    	
		for(var i=0, j=e.achievements.length; i<j; i++){

			var rowConquer = Titanium.UI.createTableViewRow();
		    $.addClass(rowConquer, 'rowConquer');

		    var imageConquer = Titanium.UI.createImageView({
		    	image: '/images/conquer-master-of-chemistry.png'
		    });
		    $.addClass(imageConquer, 'imageConquer');

		    var rightContentConquer = Titanium.UI.createView();
		    $.addClass(rightContentConquer, 'rightContentConquer');

		    var conquerTitle = Titanium.UI.createLabel({
		    	text: 'Mestre da quimica'
		    });
		    $.addClass(conquerTitle, 'conquerTitle proximaNovaRegular');

		    var layoutHorizontal = Titanium.UI.createView();
		    $.addClass(layoutHorizontal, 'layoutHorizontal left0');

		    var numberConquer = Titanium.UI.createLabel({
		    	text: achievement[i].points
		    });
		    $.addClass(numberConquer, 'numberConquer proximaNovaRegular');

		    var ptConquer = Titanium.UI.createLabel({
		    	text: 'Pontos em Ciência'
		    });
		    $.addClass(ptConquer, 'ptConquer proximaNovaRegular');

		    var percentConquer = Titanium.UI.createView();
		    $.addClass(percentConquer, 'percentConquer');

		    var percentNumber = Titanium.UI.createLabel({
		    	text: '100%'
		    });
		    $.addClass(percentNumber, 'percentNumber');

		    var progressBar = Titanium.UI.createView();
		    $.addClass(progressBar, 'progressBar');

		    var percentBar = Titanium.UI.createView();
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
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
}); */