define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/car-detail');


  var CarCreateLayout = Marionette.LayoutView.extend({

    template: template,

    initialize: function() {}
  });

  return CarCreateLayout;
});
