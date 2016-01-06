define(function(require) {
  var Backbone = require('Backbone');


  var CarModel = Backbone.Model.extend({

    getId: function(collection) {
      var models = collection.models;
      var model_ids = _.map(models, function(m) { return m.get('id'); });
      var max_id = _.max(model_ids);
      return ++max_id;
    },


    getCreatedDate: function() {
      var d = new Date();
      return d.getDay() + '.' + (d.getMonth()+1) + '.' + d.getFullYear();
    }
  });

  return CarModel;
});
