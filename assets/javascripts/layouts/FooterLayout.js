define(function(require) {
  var template = require('hbs!templates/footer');
  var Marionette = require('Marionette');


  var FooterLayout = Marionette.LayoutView.extend({

    template: template,

    initialize: function() {}
  });

  return FooterLayout;
});
