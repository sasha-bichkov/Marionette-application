define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!home');
  var CarsShortCompositeView = require('views/CarsShortCompositeView');


  var HomeLayout = Marionette.LayoutView.extend({

    template: template,

    regions: {
      cars: "#cars"
    },

    initialize: function() {
      this.carsCollection = this.options.carsCollection;
    },


    onRender: function() {
      this.renderCars();
    },


    renderCars: function() {
      var carsShortCompositeView = new CarsShortCompositeView({
        collection: this.carsCollection
      });

      this.cars.show(carsShortCompositeView);
    }
  });

  return HomeLayout;
});
