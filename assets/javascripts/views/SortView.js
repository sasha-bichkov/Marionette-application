define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!partial/sort');
  var SortModel = require('models/SortModel');


  var SortView = Marionette.ItemView.extend({

    tagName: 'ul',

    model: new SortModel(),

    template: template,

    ui: {
      byModel: '#byModel',
      byPrice: '#byPrice'
    },

    events: {
      'click @ui.byModel': 'sortByModel',
      'click @ui.byPrice': 'sortByPrice'
    },

    initialize: function() {
      this.carsCollection = this.options.carsCollection;
    },


    sortByModel: function() {
      this.carsCollection.comparator = function(model) {
        return model.get('model');
      };

      this.carsCollection.sort();
    },


    sortByPrice: function() {
      this.carsCollection.comparator = function(model) {
        return model.get('price');
      };

      this.carsCollection.sort();
    }
  });

  return SortView;
});
