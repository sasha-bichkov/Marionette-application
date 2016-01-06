define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!car/detail');
  var DestroyBehavior = require('behavior/DestroyBehavior');


  var CarDetailView = Marionette.ItemView.extend({

    template: template,

    behaviors: {
      destroy: {
        behaviorClass: DestroyBehavior
      }
    }
  });

  return CarDetailView;
});
