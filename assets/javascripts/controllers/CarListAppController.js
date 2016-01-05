define(function(require) {
  var Marionette = require('Marionette');

  var CarView = require('views/car/CarShortView');
  var CarDetailView = require('views/car/CarDetailView');
  var HomeLayout = require('layouts/HomeLayout');
  var CarEditView = require('views/car/CarEditView');
  var AboutLayout = require('layouts/AboutLayout');
  var CarCreateView = require('views/car/CarCreateView');


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
      var carCreateView = new CarCreateView({carsCollection: this.carsCollection});
      this.main.show(carCreateView);
    },


    showCar: function(id) {
      var carModel = this.getModelById(id);
      var carDetailView = new CarDetailView({model: carModel});
      this.main.show(carDetailView);
    },


    editCar: function(id) {
      var carModel = this.getModelById(id);
      var carEditView = new CarEditView({model: carModel});
      this.main.show(carEditView);
    },


    aboutUs: function() {
      var aboutLayout = new AboutLayout({model: this.aboutModel});
      this.main.show(aboutLayout);
    },


    getModelById: function(id) {
      id = parseInt(id, 10);
      return this.carsCollection.findWhere({id: id});
    }
  });

  return CarListAppController;
});
