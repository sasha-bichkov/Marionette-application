define(function(require) {
  var Marionette = require('Marionette');

  var alertify = require('alertify');


  var DestroyBehavior = Marionette.Behavior.extend({

    ui: {
      del: '.link-delete'
    },

    events: {
      'click @ui.del': 'destroyCar'
    },

    destroyCar: function(e) {
      e.preventDefault();
      var self = this;
      var $el = $(e.target);
      var collection = this.view.collection;

      alertify.confirm("Are you sure?", function (e) {
        if (e) {
          var id = $el.data('model-id');
          var model = self.getModelById(id);

          if (collection) {
            collection.remove(model);
          } else {
            model.destroy();
          }

          Backbone.history.navigate('/', {trigger: true});
        }
      });
    },


    getModelById: function(id) {
      if (this.view.model) return this.view.model;
      return this.view.collection.findWhere({id: id});
    }
  });

  return DestroyBehavior;
});
