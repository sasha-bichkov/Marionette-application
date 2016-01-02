define(function(require) {
  // Загружаем Marionette вместе со всеми зависимостями
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

  // Создаём приложение
  var CarListApp = new Marionette.Application();

  // Добавляем регионы
  CarListApp.addRegions({
    header: '#header',
    main: '#main',
    footer: '#footer'
  });

  // Добваляем инициализацию
  CarListApp.addInitializer(function() {
    // Создаём контроллер и передаём ему главный регион
    var carListAppController = new CarListAppController({
      region_main: CarListApp.main,
      aboutModel: aboutModel,
      carsCollection: carsCollection,
      sortModel: sortModel,
      paginationModel: paginationModel
    });

    // Создаём роутер и передаём ему контроллер
    var router = new CarListAppRouter({
      controller: carListAppController
    });
  });

  // После старта приложения вызовется событие 'start',
  // Запускаем запись истории Backbone
  CarListApp.on('start', function() {
    Backbone.history.start();
  });

  // После события старт создаём хедер и футер представления
  CarListApp.on('before:start', function() {
    CarListApp.header.show(new HeaderLayout({aboutModel: aboutModel}));
    CarListApp.footer.show(new FooterLayout());
  });

  // Запускаем приложение. Сработает событие 'start'
  CarListApp.start();
});
