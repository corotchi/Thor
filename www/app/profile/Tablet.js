Ext.define('Q4App.profile.Tablet', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: ['Main', 'Home'],
        models: [],
        stores: [],
        controllers: ['Home']
    },
    
    //this profile will be activated if we detect we're running on a Tablet
    isActive: function(app) {
        return Ext.os.is.Tablet;
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('Q4App.view.tablet.Main'));
    }
});