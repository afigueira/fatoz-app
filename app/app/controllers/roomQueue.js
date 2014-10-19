var args = arguments[0] || {};

categoryId = args.categoryId || '';

if(categoryId){
	Titanium.App.fireEvent('websocket.dispatchEvent', { 
		event:'joinRoom', 
		categoryId: categoryId
		}
	);	
}



$.roomQueue.open();

