Ext.define("Q4App.view.Stream", {
	extend: 'Ext.Component',
    xtype: 'stream',

	config:{	
		
		records: null,
		
		tpl: new Ext.XTemplate(     
            '<tpl for=".">',
                '<div class="product" ref="{PressReleaseId}">',
                    '<h3>{Headline}</h3>',
                    '<div class="body">{Body}</div>',
                '</div>',
            '</tpl>'       
        )
	},
	 updateRecords: function(newRecords) {
		console.log(newRecords);
      
    }
		
	
});