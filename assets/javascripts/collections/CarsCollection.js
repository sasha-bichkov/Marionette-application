define(function(require) {
  var Backbone = require('Backbone');

  var CarModel = require('models/CarModel');


  var CarsCollection = Backbone.Collection.extend({

    url: 'database/cars.json',

    model: CarModel,

    initialize: function() {}
  });

  return CarsCollection;
});
