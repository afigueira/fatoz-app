$.home.addEventListener('click', function(){
	Alloy.createController('home');
});

$.profile.addEventListener('click', function(){
	Alloy.createController('profile');
});

$.categories.addEventListener('click', function(){
	Alloy.createController('categories');
});


$.exit.addEventListener('click', function(){
	var alertWindow = Titanium.UI.createAlertDialog({
	    title: 'Sair',
	    message: 'Deseja sair agora?',
	    cancel:1,
	    buttonNames: ['Sair','Cancelar']
	});
	 
	alertWindow.addEventListener('click', function(e){    
	    switch(e.index){
	    case 0:
	      Cloud.Users.logout(function (e) {
			    if (e.success) {
			        Alloy.createController('login');
			    }
			});
	      break;	        
	    }
	});
	 
	alertWindow.show();
});