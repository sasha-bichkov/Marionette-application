define(function(require) {
  var Backbone = require('Backbone');


  var PaginationModel = Backbone.Model.extend({

    defaults: {
      currentPage: 1,
      itemPerPage: 5,
      totalPages: 0,
      pages: []
    },

    setTotalPages: function(els) {
      var pages = this.getTotalPages(els);
      this.set('totalPages', pages);

      this.setPages();
    },


    getTotalPages: function(els) {
      return Math.ceil(els / this.get('itemPerPage'));
    },


    setPages: function() {
      var pages = this.getRange();
      this.set('pages', pages);
    },


    getRange: function() {
      var totalPages = this.get('totalPages') + 1;
      var currentPage = this.get('currentPage');
      return _.range(currentPage, totalPages);
    }
  });

  return PaginationModel;
});
