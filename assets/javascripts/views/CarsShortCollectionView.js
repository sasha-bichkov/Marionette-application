define(function(require) {
  var Marionette = require('Marionette');

  var NoCarsView = require('views/NoCarsView');
  var CarShortView = require('views/car/CarShortView');


  var CarsShortCollectionView = Marionette.CollectionView.extend({

    id: 'table-car',

    tagName: 'table',

    className: 'table table-bordered table-hover',

    childView: CarShortView,

    emptyView: NoCarsView,

    initialize: function() {}
  });

  return CarsShortCollectionView;
});
