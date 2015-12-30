define(function(require) {
  var template = require('hbs!templates/car-detail');
  var Marionette = require('Marionette');


  var CarDetailView = Marionette.ItemView.extend({

    template: template,

    initialize: function() {}
  });

  return CarDetailView;
});
