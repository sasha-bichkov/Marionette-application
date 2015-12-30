define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!templates/nocar'); 


  var NoCarsView = Marionette.ItemView.extend({
    template: template
  });

  return NoCarsView;
});
