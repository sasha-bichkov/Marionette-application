define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!templates/car/car-detail');


  var CarDetailView = Marionette.ItemView.extend({

    template: template,

    initialize: function() {}
  });

  return CarDetailView;
});
