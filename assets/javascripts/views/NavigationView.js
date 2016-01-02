define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!partial/navigation');
  var NavigationModel = require('models/NavigationModel');


  var NavigationView = Marionette.ItemView.extend({

    model: new NavigationModel(),

    template: template,

    ui: {
      links: '.link',
      item: '.item'
    },

    events: {
      'click @ui.item': 'setActiveLink'
    },

    initialize: function() {},


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
    }
  });

  return NavigationView;
});
