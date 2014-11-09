Alloy.Globals.Cloud.sessionId = Ti.App.Properties.getString('sessionId');

Alloy.Globals.Cloud.Users.showMe(function (e) {
    if (e.success) {
        Alloy.createController('home');
    } else {
        Alloy.createController('login');
    }
});




/*var win = Titanium.UI.createWindow();

var data = [
    {title:'Alan'}, {title:'Azlaxn'}, {title:'fAlan'}, {title:'Ablasdfan'}, {title:'Raul'}
];
 
var win = Ti.UI.createWindow();
var search = Titanium.UI.createSearchBar({
    showCancel:false,
});
var tableview = Titanium.UI.createTableView({
    data:data,
    search:search,
    filterAttribute:'title'
});
win.add(tableview);
win.open();
*/

/*Cloud.Objects.update({
    classname: 'categories',
    id: '54441050775e1307c0067609',
    fields: {
        icon_image: '545a12981aab9d121a0250f1'
    }
}, function (e) {
    if (e.success) {
        console.log('-------:', e);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/



/*Cloud.Objects.update({
    classname: 'categories',
    id: '54441050775e1307c0067609',
    fields: {
        icon_image: '545a12981aab9d121a0250f1'
    }
}, function (e) {
    if (e.success) {
        console.log('-------:', e);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/



/*545a12981aab9d121a0250f1   img*/ 
/*54441050775e1307c0067609 categoria*/

/*var win = Titanium.UI.createWindow({
	layout: 'vertical'
});

Cloud.Photos.query({
    page: 1
}, function (e) {
    if (e.success) {
        console.log('Success:\n' +
            'Count: ' + e.photos.length);
        for (var i = 0; i < e.photos.length; i++) {
            var photo = e.photos[i];
            console.log('id: ' + photo.id + '\n' +
                  'name: ' + photo.name + '\n' +
                  'filename: ' + photo.filename + '\n' +
                  'updated_at: ' + photo.updated_at);


            var image = photo.urls.square_75;
            console.log('-img- ', image);

            var img = Titanium.UI.createImageView({
            	image: image
            });

            win.add(img);
            
        }

        win.open();
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/


/*
var image;
Titanium.Media.openPhotoGallery({
    success: function(e){
    //  alert(e.mediaType);
        if(e.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
           image = e.media;
           
           Cloud.Photos.create({
                photo: image
            }, function(e){
                if(e.success){
                    var photo = e.photos[0];
                    alert('Success:\n' +
                        'id: ' + photo.id + '\n' +
                        'filename: ' + photo.filename + '\n' +
                        'size: ' + photo.size,
                        'updated_at: ' + photo.updated_at);

                    console.log('Success:\n' +
                        'id: ' + photo.id );


                    Cloud.Users.update({                
                        custom_fields: {
                            cover_image: photo.id
                        }
                    }, function (e) {
                        if (e.success) {
                            var user = e.users[0];
                            alert('Success:\n' +
                                'id: ' + user.id + '\n' +
                                'first name: ' + user.first_name + '\n' +
                                'last name: ' + user.last_name);
                        } else {
                            alert('Error:\n' +
                                ((e.error && e.message) || JSON.stringify(e)));
                        }
                    });

                }else{
                    alert('Error:\n' +
                    ((e.error && e.message) || JSON.stringify(e)));
                    alert("Code: "+e.code);
                }
            });
       }
    },
    cancel: function(){

    },
    error: function(err){
        alert("ERROR: "+err);
    },
    mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
});*/



/*Cloud.Photos.show({
    photo_id: '5458cfa77c874208ad000818'
}, function (e) {
    if (e.success) {
        var photo = e.photos[0];
        alert('Success:\n' +
            'id: ' + photo.id + '\n' +
            'filename: ' + photo.filename + '\n' +
            'updated_at: ' + photo.updated_at);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});*/


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