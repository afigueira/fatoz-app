require('alloy').Globals.drawer($.sidebar, $.drawer, 'Categorias', init());

function init(){
	Cloud = require("ti.cloud");

	allCategories();
}

function allCategories(){
	Cloud.Objects.query({
	    classname: 'categories',
	    page: 1,
	    per_page: 10
	}, function (e) {
		
	    if (e.success) {    	
	    	var total = e.categories.length;
	              
	        for (var i = 0; i < total; i++){
	        	var row = Titanium.UI.createTableViewRow({
	        		index: i
	        	});
				
				var category = Titanium.UI.createView({
					closed: true
				});			
				$.addClass(category, "category");
				
				var backgroundCategory = Titanium.UI.createImageView({
				  width: 320,
				  height: 220,
				  image: "/images/background-categories-soccer.jpg" 
				});
				$.addClass(backgroundCategory, "backgroundCategory");
										
				var containerTitleCategory = Titanium.UI.createView();
				$.addClass(containerTitleCategory, "containerTitleCategory");
							
				var iconCategory = Titanium.UI.createImageView({
				  image: "/images/icon-category.png" 
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
				
				$.listCategories.appendRow(row);
			}
	        
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}



$.listCategories.addEventListener('click', function(e){
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