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
    },

    initialize: function() {
      this.id = this.options.id;
      this.carsCollection = this.options.carsCollection;

      this.listenTo(this.carsCollection, 'reset', this.setCarModel);
    },


    setCarModel: function() {
      if (!this.model) {
        this.model = this.getModelById(this.id);
        this.render();
      }
    },


    getModelById: function(id) {
      id = parseInt(id, 10);
      return this.carsCollection.findWhere({id: id});
    }
  });

  return CarDetailView;
});
