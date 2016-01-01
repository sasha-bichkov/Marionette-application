define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!templates/car/no-cars'); 


  var NoCarsView = Marionette.ItemView.extend({

    tagName: 'td',

    template: template
  });

  return NoCarsView;
});
