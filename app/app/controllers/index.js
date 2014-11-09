Alloy.Globals.Cloud.sessionId = Titanium.App.Properties.getString('sessionId');

Alloy.Globals.Cloud.Users.showMe(function (e) {
    if (e.success) {
        Alloy.createController('home');
        $.destroy();
    } else {
        Alloy.createController('login');
        $.destroy();
    }
});