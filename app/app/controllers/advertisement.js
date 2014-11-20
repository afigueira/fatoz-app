var args = arguments[0] || {};

$.advertisement.open();

Alloy.Globals.showBanner($.containerBanner, 'advertisement', 'game');

$.close.addEventListener('click', function(){
	Alloy.createController('gameResult', args);
});