define(function(require) {
  var Marionette = require('Marionette');

  var CarView = require('views/car/CarShortView');
  var CarLayout = require('layouts/CarLayout');
  var HomeLayout = require('layouts/HomeLayout');
  var AboutLayout = require('layouts/AboutLayout');
  var CarCreateLayout = require('layouts/CarCreateLayout');


  var CarListAppController = Marionette.Object.extend({

    initialize: function() {
      var options = this.options;

      this.main = options.region_main;
      this.aboutModel = options.aboutModel;
      this.carsCollection = options.carsCollection;
    },


    home: function() {
      var homeLayout = new HomeLayout({carsCollection: this.carsCollection});
      this.main.show(homeLayout);
    },


    createCar: function() {
      var carCreateLayout = new CarCreateLayout();
      this.main.show(carCreateLayout);
    },


    showCar: function(id) {
      var carModel = this.carsCollection.findWhere({id: id});
      var carLayout = new CarLayout({model: carModel});
      this.main.show(carLayout);
    },


    aboutUs: function() {
      var aboutLayout = new AboutLayout({model: this.aboutModel});
      this.main.show(aboutLayout);
    }
  });

  return CarListAppController;
});
