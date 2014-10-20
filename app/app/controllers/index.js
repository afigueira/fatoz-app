Cloud = require("ti.cloud");

Cloud.sessionId = Ti.App.Properties.getString('sessionId');


Cloud.Objects.query({
    classname: 'achievements',
    order: 'points',
    where: {
    	categories_id: '544410126bbf3fcc86094f59'
    }
}, function (e) {
    if (e.success) {
        console.log(e);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});

date = new Date();

console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');
console.log('=>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM '+ date.getHours() + ':' + date.getMinutes() +' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=');





