define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!templates/car/create-car');


  var CarCreateLayout = Marionette.LayoutView.extend({

    template: template,

    initialize: function() {}
  });

  return CarCreateLayout;
});
