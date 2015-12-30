define(function(require) {
  var Marionette = require('Marionette');

  var CarView = require('views/car/CarShortView');
  var HomeLayout = require('layouts/HomeLayout');
  var AboutLayout = require('layouts/AboutLayout');
  var CarCreateLayout = require('layouts/CarCreateLayout');


  var CarListAppController = Marionette.Controller.extend({

    initialize: function() {
      var options = this.options;

      this.main = options.region_main;
      this.aboutModel = options.aboutModel;
    },


    home: function() {
      var homeLayout = new HomeLayout();
      this.main.show(homeLayout);
    },

    createCar: function() {
      var carCreateLayout = new CarCreateLayout();
      this.main.show(carCreateLayout);
    },


    showCar: function() {
      var carLayout = new CarLayout();
      this.main.show(carLayout);
    },


    aboutUs: function() {
      var aboutLayout = new AboutLayout({model: this.aboutModel});
      this.main.show(aboutLayout);
    }
  });

  return CarListAppController;
});
