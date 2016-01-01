define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!templates/partial/header');
  var HeaderModel = require('models/HeaderModel');


  var HeaderLayout = Marionette.LayoutView.extend({

    model: new HeaderModel(),

    template: template,

    ui: {
      item: '.item'
    },

    events: {
      'click @ui.item': 'changeLink'
    },

    initialize: function(options) {
      this.aboutModel = options.aboutModel;

      this.listenTo(this.aboutModel, 'change', this.setText);

      this.setText();
    },


    onRender: function() {
      this.setActiveLink();
    },


    changeLink: function(e) {
      var $link = $(e.target);
      this.setActiveLink($link);
    },


    setActiveLink: function($link) {
      this.clearActive();

      var hash = this.getHash();
      var $link = $link || this.getCurrentLink(hash);
      $link.addClass('active');
    },


    clearActive: function() {
      var $links = this.getLinks();
      $links.removeClass('active');
    },


    getHash: function() {
      return this.model.getHash();
    },


    getCurrentLink: function(hash) {
      var $links = this.getLinks();
      return $links.filter('[href="' + hash + '"]');
    },


    getLinks: function() {
      return this.$el.find('a');
    },


    setText: function() {
      var text = this.aboutModel.getText300Symbols();
      this.model.set('text', text);
    }
  });

  return HeaderLayout;
});
