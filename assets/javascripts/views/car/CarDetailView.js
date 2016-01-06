define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!car/detail');
  var DestroyBehavior = require('behavior/DestroyBehavior');


  var CarDetailView = Marionette.ItemView.extend({

    template: template,

    initialize: function() {},

    behaviors: {
      destroy: {
        behaviorClass: DestroyBehavior
      }
    }
  });

  return CarDetailView;
});
