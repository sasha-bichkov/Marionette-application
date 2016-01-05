define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/edit');
  var DestroyBehavior = require('behaviors/DestroyBehavior');


  var CarEditView = Marionette.ItemView.extend({

    template: template,

    behaviors: {
      destroy: {
        behaviorClass: DestroyBehavior
      }
    },

    initialize: function() {},
  });

  return CarEditView;
});
