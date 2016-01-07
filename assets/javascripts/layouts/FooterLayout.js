define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!partial/footer');


  var FooterLayout = Marionette.LayoutView.extend({

    template: template
  });

  return FooterLayout;
});
