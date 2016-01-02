define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/empty'); 


  var NoCarsView = Marionette.ItemView.extend({

    tagName: 'td',

    template: template
  });

  return NoCarsView;
});
