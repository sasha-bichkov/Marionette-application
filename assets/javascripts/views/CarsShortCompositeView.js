define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!car/cars');
  var NoCarsView = require('views/NoCarsView');
  var CarShortView = require('views/car/CarShortView');


  var CarsShortCompositeView = Marionette.CompositeView.extend({

    template: template,

    childView: CarShortView,

    childViewContainer: "tbody",

    emptyView: NoCarsView,

    ui: {
      del: '.link-delete'
    },

    events: {
      'click @ui.del': 'destroyCar'
    },

    initialize: function() {},


    destroyCar: function(e) {
      e.preventDefault();
      var $el = $(e.target);
      var id = $el.data('model-id').toString();
      var model = this.getModelById({id: id});
      this.collection.remove(model);
    },


    getModelById: function(option) {
      return this.collection.findWhere(option);
    }
  });

  return CarsShortCompositeView;
});
