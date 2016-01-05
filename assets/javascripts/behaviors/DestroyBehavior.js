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

      alertify.confirm("Are you sure?", function (e) {
        if (e) {
          var id = $el.data('model-id').toString();
          var model = self.getModelById({id: id});

          if (self.view.collection) {
            self.view.collection.remove(model);
          } else {
            model.destroy();
          }

          Backbone.history.navigate('/', {trigger: true});
        }
      });
    },


    getModelById: function(option) {
      if (this.view.model) return this.view.model;
      return this.view.collection.findWhere(option);
    }
  });

  return DestroyBehavior;
});
