define(function(require) {
  var Backbone = require('Backbone');

  var CarModel = require('models/CarModel');


  var CarsCollection = Backbone.Collection.extend({

    model: CarModel,

    localStorage: new Backbone.LocalStorage("Cars")
  });

  return CarsCollection;
});
