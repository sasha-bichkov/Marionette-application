define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!home');
  var SortView = require('views/SortView');
  var PaginationView = require('views/PaginationView');
  var CarsCompositeView = require('views/CarsCompositeView');

  var HomeLayout = Marionette.LayoutView.extend({

    template: template,

    regions: {
      cars: '#cars',
      sort: '#sort',
      pagination: '#pagination'
    },

    initialize: function() {
      var options = this.options;

      this.sortModel = options.sortModel;
      this.carsCollection = options.carsCollection;
      this.paginationModel = options.paginationModel;
    },


    onRender: function() {
      this.renderSort();
      this.renderCars();
      this.renderPagination();
    },


    renderCars: function() {
      var carsCompositeView = new CarsCompositeView({
        collection: this.carsCollection
      });

      this.cars.show(carsCompositeView);
    },


    renderSort: function() {
      var sortView = new SortView({model: this.sortModel});
      this.sort.show(sortView);
    },


    renderPagination: function() {
      var paginationView = new PaginationView({model: this.paginationModel, carsCollection: this.carsCollection});
      this.pagination.show(paginationView);
    }
  });

  return HomeLayout;
});
