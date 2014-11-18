var args = arguments[0] || {};

$.advertisement.open();

$.close.addEventListener('click', function(){
	Alloy.createController('gameResult', args);
});