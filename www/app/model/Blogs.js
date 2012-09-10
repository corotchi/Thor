Ext.define('Q4App.model.Blogs', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'Body',
            'Headline',
            'Body',
            'PressReleaseId',
            'PressReleaseDate'
        ],

        proxy: {
            type: 'jsonp',
            url: Q4App.app.siteSettings.siteUrl + 'feed/PressRelease.svc/GetPressReleaseList',
            cacheKey: 'blogData',
            idProperty:'blogModel',
            extraParams:{
                apiKey: Q4App.app.siteSettings.apiKey,
                pageSize: 5,
                pressReleaseDateFilter: 3,
                bodyType: 2
            },
            reader: {
                type: 'json',
                rootProperty: 'GetPressReleaseListResult'
            }
        }
    }
});