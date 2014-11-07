require('alloy').Globals.drawer($.sidebar, $.drawer, 'Categorias', init());

var canSearch = false;

function init(){
	Cloud = require("ti.cloud");

	getCategories($.allCategories, {
	    classname: 'categories',
	    page: 1,
	    per_page: 10
	});

	getCategories($.popularCategories, {
	    classname: 'categories',
	    page: 1,
	    per_page: 10,
	     where: {
	    	is_popular: 1
	    }
	});

	getCategories($.recentCategories, {
	    classname: 'categories',
	    page: 1,
	    per_page: 10,
	     where: {
	    	is_recent: 1
	    }
	});

	pagination();
}

function pagination(){
	$.contentTabs.addEventListener('scrollend', function(e){	        			        	
    	for(var i=0,j=$.tabs.children.length; i<j; i++){
			$.tabs.children[i].children[1].visible = false;
		};

		$.tabs.children[e.currentPage].children[1].visible = true;        
    });
}

function tabNavigation(e){	
	var contentTabsIndex = e.source.contentTabsIndex;

	$.contentTabs.scrollToView(Number(contentTabsIndex));

	for(var i=0,j=$.tabs.children.length; i<j; i++){
		$.tabs.children[i].children[1].visible = false;
	};

	$.tabs.children[contentTabsIndex].children[1].visible = true;
}

function getCategories(element, param){
	Cloud.Objects.query(param, function (e) {
		
	    if (e.success) {    	
	    	var total = e.categories.length;
	              
	        for (var i = 0; i < total; i++){
	        	var row = Titanium.UI.createTableViewRow({
	        		title: e.categories[i].title
	        	});
				
				var category = Titanium.UI.createView({
					closed: true
				});			
				$.addClass(category, "category");
				
				var backgroundCategory = Titanium.UI.createImageView({
				  width: 320,
				  height: 220,				  
				  background: e.categories[i].background
				});
				$.addClass(backgroundCategory, "backgroundCategory");

				console.log('background', e.categories[i].background);

				console.log('ID Categoria: ', e.categories[i].id);
				console.log('Nome Categoria: ', e.categories[i].title);
									
				var containerTitleCategory = Titanium.UI.createView();
				$.addClass(containerTitleCategory, "containerTitleCategory");
							
				var iconCategory = Titanium.UI.createImageView({
					icon: e.categories[i].icon,
					width: 16,
					height: 16					
				});
				
				var titleCategory = Titanium.UI.createLabel();
				$.addClass(titleCategory, "titleCategory fontWhite proximaNovaRegular");
				
				var arrowDown = Titanium.UI.createImageView({
				  image: "/images/arrow-down.png"
				});
				$.addClass(arrowDown, "arrowCategory");
				
				var descriptionCategory = Titanium.UI.createLabel();
				$.addClass(descriptionCategory, "descriptionCategory fontWhite proximaNovaRegular");
				
				var actionsCategory = Titanium.UI.createView();
				$.addClass(actionsCategory, "actionsCategory");

				var insideScrollable = Titanium.UI.createView();
				$.addClass(insideScrollable, "insideScrollable");
				
				var btnNewMatch = Titanium.UI.createButton({
					titleid: "new_match",
					id: e.categories[i].id
				});
				$.addClass(btnNewMatch, "radiusLarge green fontWhite proximaNovaRegular btnNewMatch");
				
				var btnChallenge = Titanium.UI.createButton({
					titleid: "challenge"
				});
				$.addClass(btnChallenge, "btnWhite btnChallenge");
				
				var btnRanking = Titanium.UI.createButton({				
					titleid: "ranking"
				});
				$.addClass(btnRanking, "btnWhite btnRanking");
				
				var widthUiSize = Titanium.UI.createView();			
				$.addClass(widthUiSize, "widthUiSize");			

				widthUiSize.add(btnNewMatch);
				widthUiSize.add(btnChallenge);
				widthUiSize.add(btnRanking);
				insideScrollable.add(widthUiSize);
				
				
				
				var insideScrollable2 = Titanium.UI.createView();
				$.addClass(insideScrollable2, "insideScrollable");

				var Statistics = Titanium.UI.createLabel({
					text: "estatisticas"
				});
				$.addClass(Statistics, "fontWhite");
				insideScrollable2.add(Statistics);	
				
				var ScrollableView = Titanium.UI.createScrollableView({
					views: [insideScrollable, insideScrollable2]
				});

				actionsCategory.add(ScrollableView);
				

				
				var layoutAbsolute = Titanium.UI.createView();			
				$.addClass(layoutAbsolute, "layoutAbsolute");			
				var layoutHorizontal = Titanium.UI.createView();			
				$.addClass(layoutHorizontal, "layoutHorizontal");

				layoutHorizontal.add(iconCategory);
				titleCategory.text = e.categories[i].title;		
				layoutHorizontal.add(titleCategory);
				
				layoutAbsolute.add(layoutHorizontal);
				containerTitleCategory.add(layoutAbsolute);

				var layoutAbsolute = Titanium.UI.createView();			
				$.addClass(layoutAbsolute, "layoutAbsolute");			
				var layoutHorizontal = Titanium.UI.createView();			
				$.addClass(layoutHorizontal, "layoutHorizontal");			
				layoutHorizontal.add(backgroundCategory);
				layoutAbsolute.add(layoutHorizontal);
				category.add(layoutAbsolute);

				category.add(containerTitleCategory);
				category.add(arrowDown);
				descriptionCategory.text = e.categories[i].description;
				category.add(descriptionCategory);

				category.add(actionsCategory);				
				
				
				row.add(category);
				
				element.appendRow(row);
			}
	        
	        setImages(element);	        
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}

function setImages(element){	
	var length = element.data[0].rows.length;	
	var backgroundImage;
	var iconImage;
	var image;
	var icon;
	var queuedBackground = [];
	var queuedIcon = [];

	for (var i=0; i < length; i++){		
		image = element.data[0].rows[i].children[0].children[0].children[0].children[0];		
		backgroundImage = image.background;


		icon = element.data[0].rows[i].children[0].children[1].children[0].children[0].children[0];		
		iconImage = icon.icon;
		
		if(backgroundImage){
			queuedBackground.push(image);		
			console.log('guarda index', i);	
			
			Cloud.Photos.show({
			    photo_id: backgroundImage
			}, function (e) {
			    if (e.success) {
			        var photo = e.photos[0];

			        var urlImage = photo.urls.square_75;
		            console.log('imagens: ', photo.urls);
		            
		            queuedBackground.shift().image = urlImage;			            
		            console.log('guarda index2', i);
			    }
			});
		}

		if(iconImage){
			queuedIcon.push(icon);			
			Cloud.Photos.query({
				where: {
			        id: iconImage
			    }			    
			}, function (e) {
			    if (e.success) {
			        for (var i = 0; i < e.photos.length; i++) {
			            var photo = e.photos[i];

			            var urlIcon = photo.urls.square_75;
			            
			            queuedIcon[0].image = urlIcon
			            queuedIcon.shift();
			        }
			    }
			});
		}

		console.log('-------------------------------------------------------');

	};
}



$.allCategories.addEventListener('click', function(e){
	if (e.source.classes){
		if (e.source.classes.indexOf('btnNewMatch') > -1){			
			Alloy.createController('roomQueue', {categoryId: e.source.id});
		}
	}

	if(e.row.children[0].closed){
		e.row.children[0].closed = false;		
		e.row.height = 220;
		e.row.children[0].height = 220;		
	}
});

/*$.search.addEventListener('change', function(e){
	if(canSearch){
		setTimeout(function(){
			canSearch = false;
		}, 1000);
	}else{		
		setTimeout(function(){
			canSearch = true;
		}, 1000);
	}
});*/