define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!templates/about-us');


  var AboutLayout = Marionette.LayoutView.extend({

    template: template,

    onRender: function() {}
  });

  return AboutLayout;
});
