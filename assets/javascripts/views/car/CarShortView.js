define(function(require) {
  var template = require('hbs!templates/car-short');
  var Marionette = require('Marionette');


  var CarShortView = Marionette.ItemView.extend({

    tagName: 'tr',

    template: template,

    initialize: function() {}
  });

  return CarShortView;
});
