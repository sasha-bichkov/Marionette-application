define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!templates/home');
  var CarShortModel = require('models/CarModel');
  var CarsCollection = require('collections/CarsCollection');
  var CarsShortCollectionView = require('views/CarsShortCollectionView');


  var HomeLayout = Marionette.LayoutView.extend({

    template: template,

    regions: {
      cars: "#cars"
    },

    onShow: function() {
      var carsCollection = new CarsCollection();

      var Car1 = { name: 'Car-1', photo: 'car-1', createdAt: '12.12.2015'};
      var Car2 = { name: 'Car-2', photo: 'car-2', createdAt: '20.12.2015'};
      var Car3 = { name: 'Car-3', photo: 'car-3', createdAt: '27.12.2015'};

      carsCollection.add(Car1);
      carsCollection.add(Car2);
      carsCollection.add(Car3);

      var carsShortCollectionView = new CarsShortCollectionView({
        collection: carsCollection
      });

      this.cars.show(carsShortCollectionView);
    }
  });

  return HomeLayout;
});
