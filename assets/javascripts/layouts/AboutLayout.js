define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!about');


  var AboutLayout = Marionette.LayoutView.extend({

    template: template,

    initialize: function() {}
  });

  return AboutLayout;
});
