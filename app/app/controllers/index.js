Cloud = require("ti.cloud");

Cloud.sessionId = Ti.App.Properties.getString('sessionId');

Cloud.Users.showMe(function (e) {
    if (e.success) {    	    	
        Alloy.createController('home');
        
    } else {
    	Alloy.createController('login');    	        
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





