Alloy.Globals.drawer($.sidebar, $.drawer, 'Início', init());


function init(){
	Cloud = require("ti.cloud");

	is_popular();

	navigation();
}


function tabNavigation(e){
	for(var i=0,j=$.tabs.children.length; i<j; i++){
		$.tabs.children[i].children[1].visible = false;
	};

	for(var i=0,j=$.contentTabs.children.length; i<j; i++){
		$.contentTabs.children[i].visible = false;	
	};
	
	var contentTabsIndex = e.source.contentTabsIndex;
	
	$.contentTabs.children[contentTabsIndex].visible = true;
	$.tabs.children[contentTabsIndex].children[1].visible = true;
}

function navigation(){
	for(var i=0,j=$.tabs.children.length; i<j; i++){
		$.tabs.children[i].children[1].visible = false;
	};

	for(var i=0,j=$.contentTabs.children.length; i<j; i++){
		$.contentTabs.children[i].visible = false;	

		(function(element) {
	        element.addEventListener('scrollend', function(e){	        		
	        	
	        	for(var a=0,k=$.paginationBall.children.length; a<k; a++){	        	
					$.removeClass($.paginationBall.children[a], 'selectedBall');	  					          	        		
	        	};

	            $.addClass($.paginationBall.children[e.currentPage], 'itemBall selectedBall');	            
	        });
	    }($.contentTabs.children[i]));
	};

	
	$.contentTabs.children[0].visible = true;
	$.tabs.children[0].children[1].visible = true;
}

function mountNavigationBoll(length){	
	for(var a=0; a<length; a++){
		var itemBall = Titanium.UI.createImageView();
		$.addClass(itemBall, 'itemBall');

		$.paginationBall.add(itemBall);		
	};
}

/*$.popular.addEventListener('scrollend', function (e) {
    Ti.API.info(e.currentPage);
});*/



function is_popular(){
	Cloud.Objects.query({
	    classname: 'categories',
	    page: 1,
	    per_page: 10,
	    where: {
	    	is_popular: 1
	    }
	}, function (e) {	
	    if (e.success) {   

			var views = [];
			
			for(var i=0,j=e.categories.length; i<j; i++){
				var category = Titanium.UI.createView();
				$.addClass(category, "category soccer");
				
				var iconCategory = Titanium.UI.createImageView({
					image: "/images/icon-home-category-football.png"
				});
				$.addClass(iconCategory, "iconCategory");
				
				var titleCategory = Titanium.UI.createLabel({
					text: e.categories[i].title
				});
				$.addClass(titleCategory, "fontWhite proximaNovaRegular titleCategory");
				
				var descriptionCategory = Titanium.UI.createLabel({
					text: e.categories[i].description
				});
				$.addClass(descriptionCategory, "fontWhite proximaNovaRegular descriptionCategory");
				
				var btnNewMatch = Titanium.UI.createButton({
					titleid: 'new_match',
					id: e.categories[i].id
				});
				$.addClass(btnNewMatch, "radiusLarge green fontWhite proximaNovaRegular btnNewMatch");
				
				var btnChallenge = Titanium.UI.createButton({
					titleid: 'challenge'
				});
				$.addClass(btnChallenge, "btnWhite btnChallenge");
				
				var btnRanking = Titanium.UI.createButton({
					titleid: 'ranking',
					id: e.categories[i].id
				});
				$.addClass(btnRanking, "btnWhite btnRanking");
				
				category.add(iconCategory);
				category.add(titleCategory);
				category.add(descriptionCategory);
				category.add(btnNewMatch);
				category.add(btnChallenge);
				category.add(btnRanking);
				
				views[i] = category;
			};
			
			$.popular.views = views;	
			
			mountNavigationBoll(views.length);	
			
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}



$.categories.addEventListener('click', function(e){
	if (e.source.classes){		
		if (e.source.classes.indexOf('btnNewMatch') > -1){			
			Alloy.createController('roomQueue', {categoryId: e.source.id});
		}
		
		if (e.source.classes.indexOf('btnRanking') > -1){			
			Alloy.createController('ranking', {categoryId: e.source.id});			
		}
	}	
});

$.goToCategories.addEventListener('click', function(e){
	Alloy.createController('categories');
});

/*for(var i=1,j=$.contentTabs.children.length; i<j; i++){
	var children = $.contentTabs.children[i];	
	children.visible = false;	
};
$.contentTabs.children[0].visible = true;

$.tabs.addEventListener('click', function(e){
	for(var i=0,j=$.contentTabs.children.length; i<j; i++){
		var children = $.contentTabs.children[i];	
		children.visible = false;	
	};

	if(e.source.id == 'popularTab'){
		$.popular.visible = true;
	}
	
	if(e.source.id == 'recentTab'){
		$.recent.visible = true;
	}
});*/





/*$.categories.children
contem eles
aí faz
for (var i = 0; i < $.categories.children.length; i++) {
var scrollable = $.categories.children[i
scrollable.visible = false;*/




/*$.home.addEventListener("open", function() {
	alert(":D");
    if (Ti.Platform.osname === "android") {
        if (! $.home.activity) {
            Ti.API.error("Can't access action bar on a lightweight window.");
        } else {
            var actionBar = $.home.activity.actionBar;
            if (actionBar) {
                actionBar.backgroundImage = "/bg.png";
                actionBar.title = "New Title";
                          
			    actionBar.icon = "/images/trophy.png";
			    actionBar.displayHomeAsUp = true;			    
			    actionBar.backgroundImage = "/images/trophy.png";
                
                actionBar.onHomeIconItemSelected = function() {
                    Ti.API.info("Home icon clicked!");
                };
            }
        }
    }
});*/













/*
$.sidebar.add(Alloy.createController('sidebar').getView());

$.drawer.addEventListener('open', onNavDrawerWinOpen);
function onNavDrawerWinOpen(evt) {
	this.removeEventListener('open', onNavDrawerWinOpen);
	if(this.getActivity()) {
		// need to explicitly use getXYZ methods
		var actionBar = this.getActivity().getActionBar();
		if (actionBar) {
			// Now we can do stuff to the actionbar
			actionBar.setTitle('Início');
			// show an angle bracket next to the home icon,
			// indicating to users that the home icon is tappable
			//actionBar.setDisplayHomeAsUp(true);
			// toggle the left window when the home icon is selected
			actionBar.setOnHomeIconItemSelected(function() {
				$.drawer.toggleLeftWindow();
			});
		}
	}
}

$.drawer.open();*/


