define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!home');
  var SortView = require('views/SortView');
  var CarsCompositeView = require('views/CarsCompositeView');


  var HomeLayout = Marionette.LayoutView.extend({

    template: template,

    regions: {
      cars: '#cars',
      sort: '#sort'
    },

    initialize: function() {
      this.carsCollection = this.options.carsCollection;
    },


    onRender: function() {
      this.renderSort();
      this.renderCars();
    },


    renderCars: function() {
      var carsCompositeView = new CarsCompositeView({
        collection: this.carsCollection
      });

      this.cars.show(carsCompositeView);
    },


    renderSort: function() {
      var sortView = new SortView();
      this.sort.show(sortView);
    }
  });

  return HomeLayout;
});
