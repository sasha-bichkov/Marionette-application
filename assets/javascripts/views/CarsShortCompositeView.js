define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!templates/cars');
  var NoCarsView = require('views/NoCarsView');
  var CarShortView = require('views/car/CarShortView');

  var CarsShortCompositeView = Marionette.CompositeView.extend({

    template: template,

    childView: CarShortView,

    childViewContainer: "tbody",

    emptyView: NoCarsView,

    initialize: function() {}
  });

  return CarsShortCompositeView;
});
