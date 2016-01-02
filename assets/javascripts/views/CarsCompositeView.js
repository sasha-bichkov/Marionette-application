define(function(require) {
  var Marionette = require('Marionette');

  var alertify = require('alertify');
  var template = require('hbs!car/cars');
  var NoCarsView = require('views/NoCarsView');
  var CarShortView = require('views/car/CarShortView');


  var CarsCompositeView = Marionette.CompositeView.extend({

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
      var self = this;
      var $el = $(e.target);
      alertify.confirm("Are you sure?", function (e) {
        if (e) {
          var id = $el.data('model-id').toString();
          var model = self.getModelById({id: id});
          self.collection.remove(model);
        }
      });
    },


    getModelById: function(option) {
      return this.collection.findWhere(option);
    }
  });

  return CarsCompositeView;
});
