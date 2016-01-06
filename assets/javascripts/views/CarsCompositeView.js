define(function(require) {
  var Marionette = require('Marionette');

  var alertify = require('alertify');
  var template = require('hbs!car/cars');
  var NoCarsView = require('views/NoCarsView');
  var CarShortView = require('views/car/CarShortView');
  var DestroyBehavior = require('behavior/DestroyBehavior');


  var CarsCompositeView = Marionette.CompositeView.extend({

    template: template,

    childView: CarShortView,

    childViewContainer: "tbody",

    emptyView: NoCarsView,

    behaviors: {
      destroy: {
        behaviorClass: DestroyBehavior
      }
    }
  });

  return CarsCompositeView;
});
