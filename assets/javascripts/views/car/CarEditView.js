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

    initialize: function() {
      this.carsCollection = this.options.carsCollection;

      this.listenTo(this.carsCollection, 'reset', this.render);
    },


    onRender: function() {
      
    }
  });

  return CarEditView;
});
