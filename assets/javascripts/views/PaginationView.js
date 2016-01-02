define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!partial/pagination');


  var PaginationView = Marionette.ItemView.extend({

    tagName: 'ul',

    className: 'pagination',

    template: template,

    modelEvents: {
      'change': 'render'
    },

    ui: {
      pagination: '.pagination-link'
    },

    events: {
      'click @ui.pagination': 'setPage'
    },

    initialize: function() {
      this.carsCollection = this.options.carsCollection;
      this.listenTo(this.carsCollection, 'reset', this.setTotalPages);
    },


    onRender: function() {
      this.setTotalPages();
    },


    setTotalPages: function() {
      this.model.setTotalPages(this.carsCollection.length);
    },


    setPage: function(e) {
      e.preventDefault();
      var page = parseInt($(e.target).text(), 10);
      this.model.set('currentPage', page);
    }
  });

  return PaginationView;
});
