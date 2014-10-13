Cloud = require("ti.cloud");

$.categories.open();







/*Cloud.Objects.create({
    classname: 'categories',
    fields: {
        title: 'Ciência',
        description: 'Essa é a descrição de ciência',
        image: 'image-category-cience.jpg'
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


/*
<TableViewRow>
	<View class="category">
		<ImageView width="320" height="220" image="/images/background-categories-soccer.jpg" class="backgroundCategory"/>
		<!-- align in js -->
		<View class="containerTitleCategory">
			<ImageView image="/images/icon-category.png"/>
			<Label textid="category_title" class="titleCategory fontWhite proximaNovaRegular" />
		</View>
		<ImageView image="/images/arrow-down.png" class="arrowCategory"/>
		<Label textid="category_description" class="descriptionCategory fontWhite proximaNovaRegular" />
		<View class="actionsCategory">
			<ScrollableView>
				<View class="insideScrollable">
					<Button titleid="new_match" class="radiusLarge green fontWhite proximaNovaRegular btnNewMatch" />
					<Button titleid="challenge" class="btnWhite btnChallenge" />
					<Button titleid="ranking" class="btnWhite btnRanking" />
				</View>
				<View class="insideScrollable">
					<Label text="Statistics" class="fontWhite" />
				</View>
			</ScrollableView>
		</View>
	</View>
</TableViewRow>
*/

Cloud.Objects.query({
    classname: 'categories',
    page: 1,
    per_page: 10
}, function (e) {
	
    if (e.success) {    	
    	var total = e.categories.length;
        
                
        for (var i = 0; i < total; i++){
			console.log(e.categories[i].title);
			
			var row = Titanium.UI.createTableViewRow();
			
			var category = Titanium.UI.createView();			
			$.addClass(category, "category");
			
			var backgroundCategory = Titanium.UI.createImageView({
			  width: 320,
			  height: 220,
			  image: "/images/background-categories-soccer.jpg" 
			});
			$.addClass(backgroundCategory, "backgroundCategory");
									
			var containerTitleCategory = Titanium.UI.createImageView();
			$.addClass(containerTitleCategory, "containerTitleCategory");
			
			var iconCategory = Titanium.UI.createImageView({
			  image: "/images/icon-category.png" 
			});
			
			var titleCategory = Titanium.UI.createLabel({
			  textid: "category_title"			   
			});
			$.addClass(titleCategory, "titleCategory fontWhite proximaNovaRegular");
			
			var arrowDown = Titanium.UI.createImageView({
			  image: "/images/arrow-down.png"
			});
			$.addClass(arrowDown, "arrowCategory");
			
			var descriptionCategory = Titanium.UI.createLabel({
				textid: "category_description"				
			});
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
			
			
			insideScrollable.add(btnNewMatch);
			insideScrollable.add(btnChallenge);
			insideScrollable.add(btnRanking);
			
			ScrollableView.add(insideScrollable);			
			actionsCategory.add(ScrollableView);
			
			containerTitleCategory.add(iconCategory);
			containerTitleCategory.add(titleCategory);
			
			category.add(backgroundCategory);
			category.add(containerTitleCategory);
			category.add(arrowDown);
			category.add(actionsCategory);
			
			
			row.add(category);
			
			$.listCategories.appendRow(row);
		}
        
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});