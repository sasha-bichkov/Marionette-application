define(function(require) {
  var Backbone = require('Backbone');


  var CarModel = Backbone.Model.extend({
    defaults: {
      id: null,
      model: null,
      photo: null,
      images: null,
      price: null,
      description: null,
      year: null,
      createdAt: null
    }
  });

  return CarModel;
});
