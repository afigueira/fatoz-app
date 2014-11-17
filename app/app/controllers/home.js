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

	ranking();
	
	banner();
	
	$.leftMenu.addEventListener('click', $.drawer.toggleLeftWindow);
}

function banner(){
	Alloy.Globals.showBanner($.window, 'home', 'bottom');
}


function tabNavigation(e){
	if(e && e.source){
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

function createRowCategories(obj, container){
	var rows = [];
	for(var i=0,j=obj.length; i<j; i++){
		var category = Titanium.UI.createView();
		$.addClass(category, "category");
		
		var iconCategory = Titanium.UI.createImageView({
			//icon: obj[i].icon,
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
		
		//container.addView(category);
		
		Alloy.Globals.loadPhoto(iconCategory, 'image', obj[i].icon);
		Alloy.Globals.loadPhoto(category, 'backgroundImage', obj[i].background);
		
		rows.push(category);
	};

	rows = Alloy.Globals.arrayRand(rows);
	container.views = rows;	
}

function getCategories(element, obj, isFirst){
	Alloy.Globals.Cloud.Objects.query(obj, function (e) {	
	    if (e.success) {			
			createRowCategories(e.categories, element);

			//element.views = views;	
			
			//setBackgrounds(element.views, element.views.length, 0);
			//setIcons(element.views, element.views.length, 0);
	    } else {
	        alert('Houve um erro para carregar as categorias');
	    }
	});
}

function ranking(){
	Alloy.Globals.loadPhoto($.btnRanking, 'image', Alloy.CFG.banner_home);

	$.btnRanking.addEventListener('click', function(){
		Alloy.createController('ranking');
		$.destroy();
	});
}

$.categories.addEventListener('click', function(e){
	if (e && e.source && e.source.classes){		
		if (e.source.classes.indexOf('btnNewMatch') > -1){			
			Alloy.createController('roomQueue', {categoryId: e.source.id});
		}
		
		if (e.source.classes.indexOf('btnRanking') > -1){			
			Alloy.createController('ranking', {categoryId: e.source.id});	
		}
	}	
});