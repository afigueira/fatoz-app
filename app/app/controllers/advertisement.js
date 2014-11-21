var args = arguments[0] || {};

$.advertisement.open();

Alloy.Globals.showBanner($.containerBanner, 'advertisement', 'game');

$.close.addEventListener('click', openGameResult);

function openGameResult() {
	Alloy.createController('gameResult', args);
}

$.advertisement.addEventListener('close', function() {
	$.close.removeEventListener('click', openGameResult);
});
