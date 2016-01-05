define(function(require) {
  var Backbone = require('Backbone');

  var CarModel = require('models/CarModel');
  Backbone.PageableCollection = require('Backbone_Paginator');


  var CarsCollection = Backbone.PageableCollection.extend({

    url: 'database/cars.json',

    mode: "client",

    model: CarModel,

    state: {
      pageSize: 5,
      currentPage: 1
    },

    initialize: function(attrs, options) {
      this.sortModel = options.sortModel;

      this.listenTo(this.sortModel, 'change', this.runSort);
    },


    runSort: function() {
      this.setComparator();
      this.sort();
    },


    setComparator: function() {
      var attrs = this.sortModel.attributes;
      var sortByFiled = _.invert(attrs)[true];

      this.comparator = function(model) {
        return model.get(sortByFiled);
      };
    }
  });

  return CarsCollection;
});
