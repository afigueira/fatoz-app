Cloud = require("ti.cloud");

require('alloy').Globals.drawer($.sidebar, $.drawer, 'Início');




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
				titleid: 'ranking'
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
		
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});


$.categories.addEventListener('click', function(e){
	if (e.source.classes){		
		if (e.source.classes.indexOf('btnNewMatch') > -1){			
			Alloy.createController('roomQueue', {categoryId: e.source.id});
		}
	}
	
	
	
	/*if (e.source.classes.id == 'popularTab'){				
		$.popular.visible = true;
	}*/
});

$.containerLabelHighlight.addEventListener('click', function(e){
	alert("containerLabelHighlight");
});


for(var i=0,j=$.contentTabs.children.length; i<j; i++){
	var children = $.contentTabs.children[i];	
	children.visible = false;	
};

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
});

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



