define(function(require) {
  var Backbone = require('Backbone');


  var SortModel = Backbone.Model.extend({

    defaults: {
      price: false,
      model: false
    },

    setSorting: function(hash) {
      var sort = this.getResetFilters();
      _.extend(sort, hash);
      this.set(sort);
    },


    getResetFilters: function() {
      var attrs = _.clone(this.attributes);
      _.each(attrs, function(val, key) {
        attrs[key] = false;  
      });
      return attrs;
    }
  });

  return SortModel;
});
