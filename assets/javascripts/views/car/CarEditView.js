define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/edit');


  var CarEditView = Marionette.ItemView.extend({

    template: template,

    initialize: function() {}
  });

  return CarEditView;
});
