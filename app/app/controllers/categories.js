Cloud = require("ti.cloud");

$.categories.open();



Cloud.Objects.query({
    classname: 'categories',
    page: 1,
    per_page: 10
}, function (e) {
	
    if (e.success) {
    	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    	console.log(e);
               
        alert(":D");
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});



/*Cloud.Objects.create({
    classname: 'categories',
    fields: {
        title: 'Futebol',
        description: 'Essa é a descrição de futebol',
        image: 'image-category-soccer.jpg'
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




console.log(":D");