define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!car/short');


  var CarShortView = Marionette.ItemView.extend({

    tagName: 'tr',

    template: template,

    initialize: function() {}
  });

  return CarShortView;
});
