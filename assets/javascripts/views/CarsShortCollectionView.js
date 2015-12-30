define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!templates/cars');
  var NoCarsView = require('views/NoCarsView');
  var CarShortView = require('views/car/CarShortView');


  var CarsShortCollectionView = Marionette.CollectionView.extend({

    id: 'table-car',

    tagName: 'table',

    className: 'table table-bordered table-hover',

    template: template,

    childView: CarShortView,

    emptyView: NoCarsView,

    initialize: function() {}
  });

  return CarsShortCollectionView;
});
