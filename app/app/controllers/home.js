Alloy.Globals.drawer($.sidebar, $.drawer, 'Início', init);

function init(){
	
	getCategories($.popular, {
	    classname: 'categories',
	    page: 1,
	    per_page: 10,
	    where: {
	    	is_popular: 1
	    }
	}, true);

	getCategories($.recent, {
	    classname: 'categories',
	    page: 1,
	    per_page: 10,
	    where: {
	    	is_recent: 1
	    }
	}, false);

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
	};
	
	$.contentTabs.children[0].visible = true;
	$.tabs.children[0].children[1].visible = true;
}

function createRowCategories(obj){
	var views = [];

	for(var i=0,j=obj.length; i<j; i++){
		var category = Titanium.UI.createView({
			background: obj[i].background
		});
		$.addClass(category, "category");
		
		var iconCategory = Titanium.UI.createImageView({
			icon: obj[i].icon,
			width: 32,
			height: 32
		});
		$.addClass(iconCategory, "iconCategory");
		
		var titleCategory = Titanium.UI.createLabel({
			text: obj[i].title
		});
		$.addClass(titleCategory, "fontWhite proximaNovaRegular titleCategory");
		
		var descriptionCategory = Titanium.UI.createLabel({
			text: obj[i].description
		});
		$.addClass(descriptionCategory, "fontWhite proximaNovaRegular descriptionCategory");
		
		var btnNewMatch = Titanium.UI.createButton({
			titleid: 'new_match',
			id: obj[i].id
		});
		$.addClass(btnNewMatch, "radiusLarge green fontWhite proximaNovaRegular btnNewMatch");
		
		/*var btnChallenge = Titanium.UI.createButton({
			titleid: 'challenge'
		});
		$.addClass(btnChallenge, "btnWhite btnChallenge");*/
		
		var btnRanking = Titanium.UI.createButton({
			titleid: 'ranking',
			id: obj[i].id
		});
		$.addClass(btnRanking, "btnWhite btnRanking");
		
		category.add(iconCategory);
		category.add(titleCategory);
		category.add(descriptionCategory);
		category.add(btnNewMatch);
		// category.add(btnChallenge);
		category.add(btnRanking);
		
		views[i] = category;
	};

	return views;
}

function getCategories(element, obj, isFirst){
	Alloy.Globals.Cloud.Objects.query(obj, function (e) {	
	    if (e.success) {			
			var views = createRowCategories(e.categories);

			element.views = views;	
			
			setBackgrounds(element.views, element.views.length, 0);
			setIcons(element.views, element.views.length, 0);
	    } else {
	        alert('Houve um erro para carregar as categorias');
	    }
	});
}

function setBackgrounds(element, length, a){
	var backgroundImage;	
	var image;		
	
	image = element[a];
	backgroundImage = image.background;
	
	Alloy.Globals.Cloud.Photos.show({
	    photo_id: backgroundImage
	}, function (e) {
		console.log(a, e);
	    if (e.success) {
	        var photo = e.photos[0];

	        var urlImage = photo.urls.original;

            image.backgroundImage = urlImage;			            
            
			if (a < length - 1) {
				setBackgrounds(element, length, ++a);	
			}
	    }
	});
}

function setIcons(element, length, a){
	var iconImage;	
	var icon;
		
	icon = element[a].children[0];
	iconImage = icon.icon;
				
	Alloy.Globals.Cloud.Photos.show({
	    photo_id: iconImage
	}, function (e) {
	    if (e.success) {
	        var photo = e.photos[0];

	        var urlIcon = photo.urls.original;		        
            icon.image = urlIcon;			            
            
            if (a < length - 1) {
            	setIcons(element, length, ++a);
            }
	    }
	});
}

$.categories.addEventListener('click', function(e){
	if (e.source.classes){		
		if (e.source.classes.indexOf('btnNewMatch') > -1){			
			Alloy.createController('roomQueue', {categoryId: e.source.id});
			$.destroy();
		}
		
		if (e.source.classes.indexOf('btnRanking') > -1){			
			Alloy.createController('ranking', {categoryId: e.source.id});
			$.destroy();	
		}
	}	
});

$.goToCategories.addEventListener('click', function(e){
	Alloy.createController('categories');
	$.destroy();
});