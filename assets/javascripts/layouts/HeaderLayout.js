define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!partial/header');
  var HeaderModel = require('models/HeaderModel');


  var HeaderLayout = Marionette.LayoutView.extend({

    model: new HeaderModel(),

    template: template,

    ui: {
      links: 'a',
      item: '.item'
    },

    events: {
      'click @ui.item': 'setActiveLink'
    },

    initialize: function(options) {
      this.aboutModel = options.aboutModel;

      this.listenTo(this.aboutModel, 'change', this.setText);

      this.setText();
    },


    onRender: function() {
      this.setActiveLink();
    },


    setActiveLink: function(e) {
      this.clearActive();

      var hash = this.getHash();
      var $target = e ? $(e.target) : null;
      var $link = $target || this.getCurrentLink(hash);
      $link.addClass('active');
    },


    clearActive: function() {
      var $links = this.ui.links;
      $links.removeClass('active');
    },


    getHash: function() {
      return this.model.getHash();
    },


    getCurrentLink: function(hash) {
      var $links = this.ui.links;
      return $links.filter('[href="' + hash + '"]');
    },


    setText: function() {
      var text = this.aboutModel.getText300Symbols();
      this.model.set('text', text);
    }
  });

  return HeaderLayout;
});
