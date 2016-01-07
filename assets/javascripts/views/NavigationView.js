define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!partial/navigation');
  var NavigationModel = require('models/NavigationModel');


  var NavigationView = Marionette.ItemView.extend({

    model: new NavigationModel(),

    template: template,

    ui: {
      item: '.header-item',
      links: '.header-link'
    },

    events: {
      'click @ui.item': 'setActiveLink'
    },

    onRender: function() {
      this.setActiveLink();
    },


    setActiveLink: function(e) {
      this.clearActive();

      var hash = this.model.getHash();
      var $target = e ? $(e.target) : null;
      var $link = $target || this.getCurrentLink(hash);
      $link.addClass('active');
    },


    clearActive: function() {
      this.ui.links.removeClass('active');
    },


    getCurrentLink: function(hash) {
      return this.ui.links.filter('[href="' + hash + '"]');
    }
  });

  return NavigationView;
});
