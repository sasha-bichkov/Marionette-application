define(function(require) {
  var Backbone = require('Backbone');


  var PaginationModel = Backbone.Model.extend({

    defaults: {
      totalPages: 0,
      pages: []
    },

    setTotalPages: function(els, pageSize) {
      var pages = this.getTotalPages(els, pageSize);
      this.set('totalPages', pages);

      this.setPages();
    },


    getTotalPages: function(els, pageSize) {
      return Math.ceil(els / pageSize);
    },


    setPages: function() {
      var pages = this.getRange();
      this.set('pages', pages);
    },


    getRange: function() {
      var totalPages = this.get('totalPages') + 1;
      return _.range(1, totalPages);
    }
  });

  return PaginationModel;
});
