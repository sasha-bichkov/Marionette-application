define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!partial/sort');


  var SortView = Marionette.ItemView.extend({

    tagName: 'ul',

    template: template,

    ui: {
      byModel: '#byModel',
      byPrice: '#byPrice'
    },

    events: {
      'click @ui.byModel': 'sortByModel',
      'click @ui.byPrice': 'sortByPrice'
    },

    initialize: function() {},


    sortByModel: function() {
      this.runSort({model: true});
    },


    sortByPrice: function() {
      this.runSort({price: true});
    },


    runSort: function(hash) {
      this.model.setSorting(hash);
    }
  });

  return SortView;
});
