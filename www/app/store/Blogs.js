Ext.define('Q4App.store.Blogs', {
    extend: 'Ext.data.Store',
    requires: ['Q4App.model.Blogs'],

    config :{
        model: 'Q4App.model.Blogs',
        autoLoad: true,
        root: {
            expanded: true
        }
    }
});
