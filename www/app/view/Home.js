Ext.define("Q4App.view.Home", {
    extend: 'Ext.Container',
    requires: [
        'Ext.dataview.List',
        'Ext.carousel.Carousel'
    ],

    xtype: 'home',
    config: {   
        title: 'Home',
        iconCls: 'action',
        layout: 'vbox',
        scrollable: false,
        items: [
            /*{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Home'
            },*/
            {
                flex: 2,
                baseCls: 'mainStream',
                xtype: 'carousel',
                items: [
                    {
                        xtype: 'stream',
                        store: 'Blogs'
                    },
                    {
                        xtype: 'stream',
                        store: 'Blogs'
                    }
                ],

                
            }
        ]
    }
});
