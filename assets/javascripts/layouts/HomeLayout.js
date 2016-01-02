define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!home');
  var CarsCollection = require('collections/CarsCollection');
  var CarsShortCompositeView = require('views/CarsShortCompositeView');


  var HomeLayout = Marionette.LayoutView.extend({

    template: template,

    regions: {
      cars: "#cars"
    },

    onRender: function() {
      this.renderCars();
    },


    renderCars: function() {
      var carsCollection = new CarsCollection();
      carsCollection.fetch({reset: true});

      var carsShortCompositeView = new CarsShortCompositeView({
        collection: carsCollection
      });

      this.cars.show(carsShortCompositeView);
    }
  });

  return HomeLayout;
});
