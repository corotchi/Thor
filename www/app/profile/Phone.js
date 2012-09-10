Ext.define('Q4App.profile.Phone', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: ['Main'],
        models: [],
        stores: [],
        controllers: []
    },
    
    //this profile will be activated if we detect we're running on a Phone
    isActive: function(app) {
        return Ext.os.is.Phone;
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('Q4App.view.phone.Main'));
    }
});