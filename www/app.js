Ext.application({



    name: 'Q4App',

    requires: [
        'Ext.MessageBox'
    ],

    // profiles: ["Phone", "Tablet"],
    views: ['Main', 'Home', 'Stream'],
    models: ['Blogs'],
    controllers: ['Home'],
    stores: ['Blogs'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    siteSettings: {
        siteUrl: 'http://www.greatpanther.com/',
        apiKey: '602F6232BC3142C1ADF5071C720E5AF3',
        symbol: 'GPR.CA',
        exchange: 'TSE'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Q4App.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
