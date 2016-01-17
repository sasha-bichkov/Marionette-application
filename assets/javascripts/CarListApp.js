define(function(require) {
  var Marionette = require('Marionette');

  var CarListAppRouter = require('routers/CarListAppRouter');
  var CarListAppController = require('controllers/CarListAppController');

  var HeaderLayout = require('layouts/HeaderLayout');
  var FooterLayout = require('layouts/FooterLayout');

  var AboutModel = require('models/AboutModel');
  var aboutModel = new AboutModel();
  aboutModel.fetch();

  var SortModel = require('models/SortModel');
  var sortModel = new SortModel();

  var PaginationModel = require('models/PaginationModel');
  var paginationModel = new PaginationModel();

  var CarsCollection = require('collections/CarsCollection');
  var carsCollection = new CarsCollection(null, {sortModel: sortModel, paginationModel: paginationModel});
  carsCollection.fetch({reset: true});

  var CarListApp = new Marionette.Application();

  CarListApp.addRegions({
    header: '#header',
    main: '#main',
    footer: '#footer'
  });

  CarListApp.addInitializer(function() {

    var carListAppController = new CarListAppController({
      region_main: CarListApp.main,
      aboutModel: aboutModel,
      carsCollection: carsCollection,
      sortModel: sortModel,
      paginationModel: paginationModel
    });


    var router = new CarListAppRouter({
      controller: carListAppController
    });
  });

  CarListApp.on('start', function() {
    Backbone.history.start();
  });

  CarListApp.on('before:start', function() {
    CarListApp.header.show(new HeaderLayout({aboutModel: aboutModel}));
    CarListApp.footer.show(new FooterLayout());
  });

  return CarListApp;
});
