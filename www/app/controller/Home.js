Ext.define('Q4App.controller.Home', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            home: "home"
        },
        control: {

          home: {
          	activate: 'onHomeActive'
          } 

        }
    },

    onHomeActive: function (){
    	console.log('asd')
    }
});