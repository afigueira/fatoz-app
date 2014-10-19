Cloud = require("ti.cloud");


require('alloy').Globals.drawer($.sidebar, $.drawer, 'Categorias');



/*Cloud.Objects.update({
    classname: 'categories',
    id: '543bcebf1011a4086f024e69',
    fields: {
        title: 'purple',
        description: '10000',
        image: 'image',
        icon: 'image'        
    }
}, function (e) {
    if (e.success) {
        var car = e.cars[0];
        alert('Success');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/



/*Cloud.Objects.create({
    classname: 'categories',
    fields: {
        title: 'Esporte',
        description: 'Futebol, esportes radicais e outros.',
        image: 'image-category-soccer.jpg',
        icon: 'icon-category-soccer.png'
    }
}, function (e) {
    if (e.success) {
        var category = e.categories[0];
        alert('Success:\n' +
            'title: ' + category.title + '\n' +
            'description: ' + category.description + '\n' +
            'image: ' + category.image + '\n');             
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/




Cloud.Objects.query({
    classname: 'categories',
    page: 1,
    per_page: 10
}, function (e) {
	
    if (e.success) {    	
    	var total = e.categories.length;
              
        for (var i = 0; i < total; i++){
        	var row = Titanium.UI.createTableViewRow();
			
			var category = Titanium.UI.createView();			
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
			
			var ScrollableView = Titanium.UI.createScrollableView();
			
			var insideScrollable = Titanium.UI.createView();
			$.addClass(insideScrollable, "insideScrollable");
			
			var btnNewMatch = Titanium.UI.createButton({
				titleid: "new_match"
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
			
			console.log(e.categories[i].title, e.categories[i].id);
						
			insideScrollable.add(btnNewMatch);
			insideScrollable.add(btnChallenge);
			insideScrollable.add(btnRanking);
			
			ScrollableView.add(insideScrollable);			
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
			
			category.add(backgroundCategory);
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