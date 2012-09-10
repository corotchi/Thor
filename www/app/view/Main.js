Ext.define('Q4App.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {xtype: 'home'}
        ]
    }
});
