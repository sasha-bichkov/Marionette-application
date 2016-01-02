define(function(require) {
  var Backbone = require('Backbone');


  var SortModel = Backbone.Model.extend({

    defaults: {
      byPrice: false,
      byModel: false
    }
  });

  return SortModel;
});
