define(function(require) {
  var Marionette = require('Marionette');


  var CarListAppRouter = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'home',
      'car/create': 'createCar',
      'car/:id': 'showCar',
      'about-us': 'aboutUs',
      '*notFound': 'home'
    }
  });

  return CarListAppRouter;
});
