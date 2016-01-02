define(function(require) {
  var Marionette = require('Marionette');

  var CarView = require('views/car/CarShortView');
  var CarLayout = require('layouts/CarLayout');
  var HomeLayout = require('layouts/HomeLayout');
  var CarEditView = require('views/car/CarEditView');
  var AboutLayout = require('layouts/AboutLayout');
  var CarCreateLayout = require('layouts/CarCreateLayout');


  var CarListAppController = Marionette.Object.extend({

    initialize: function() {
      var options = this.options;

      this.main = options.region_main;
      this.sortModel = options.sortModel;
      this.aboutModel = options.aboutModel;
      this.carsCollection = options.carsCollection;
      this.paginationModel = options.paginationModel;
    },


    home: function() {
      var homeLayout = new HomeLayout({
        sortModel: this.sortModel, 
        carsCollection: this.carsCollection,
        paginationModel: this.paginationModel
      });

      this.main.show(homeLayout);
    },


    createCar: function() {
      var carCreateLayout = new CarCreateLayout();
      this.main.show(carCreateLayout);
    },


    showCar: function(id) {
      var carModel = this.getModelById({id: id});
      var carLayout = new CarLayout({model: carModel});
      this.main.show(carLayout);
    },


    editCar: function(id) {
      var carModel = this.getModelById({id: id});
      var carEditView = new CarEditView({model: carModel});
      this.main.show(carEditView);
    },


    aboutUs: function() {
      var aboutLayout = new AboutLayout({model: this.aboutModel});
      this.main.show(aboutLayout);
    },


    getModelById: function(option) {
      return this.carsCollection.findWhere(option);
    }
  });

  return CarListAppController;
});
