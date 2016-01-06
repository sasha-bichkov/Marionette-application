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
      next: '#next',
      prev: '#prev',
      pagination: '.pagination-link'
    },

    events: {
      'click @ui.next': 'getNextPage',
      'click @ui.prev': 'getPrevPage',
      'click @ui.pagination': 'setPage'
    },

    initialize: function() {
      this.carsCollection = this.options.carsCollection;

      this.listenTo(this.carsCollection, 'reset', this.setTotalPages);
      this.listenTo(this.carsCollection, 'remove', this.setTotalPages);
    },


    setTotalPages: function() {
      var len = this.carsCollection.fullCollection.length;
      var pageSize = this.carsCollection.state.pageSize;
      this.model.setTotalPages(len, pageSize);
    },


    setPage: function(e) {
      e.preventDefault();
      var $el = $(e.target);
      var page = parseInt($el.text(), 10);
      this.setActive($el);
      this.carsCollection.getPage(page);
    },


    getPrevPage: function(e) {
      e.preventDefault();
      this.carsCollection.getPreviousPage();
    },


    getNextPage: function(e) {
      e.preventDefault();
      this.carsCollection.getNextPage();
    },


    setActive: function($el) {
      this.ui.pagination.parent().removeClass('active');
      $el.parent().addClass('active');
    }
  });

  return PaginationView;
});
