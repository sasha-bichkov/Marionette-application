define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/edit');
  var DestroyBehavior = require('behavior/DestroyBehavior');


  var CarEditView = Marionette.ItemView.extend({

    template: template,

    behaviors: {
      destroy: {
        behaviorClass: DestroyBehavior
      }
    },

    ui: {
      save: '#save',
      photo: '.photo',
      del: '.link-photo-delete'
    },

    events: {
      'click @ui.save': 'saveEditedCar',
      'click @ui.del': 'deletePhoto'
    },

    initialize: function() {
      this.carsCollection = this.options.carsCollection;

      this.listenTo(this.carsCollection, 'reset', this.render);
    },


    onRender: function() {
      
    },


    deletePhoto: function(e) {
      e.preventDefault();
      $(e.target).parent().remove();
    },


    saveEditedCar: function(e) {
      e.preventDefault();
      var photos = _.map(this.ui.photo, function(el) { return $(el).val(); });
      var merged = this.merge(this.model.get('photo'), photos);
      this.model.set('photo', merged);
      // Backbone.history.navigate('/', {trigger: true});
    },


    merge: function(arr1, arr2) {
      return _.map(arr2, function(el, index) {
        return el || arr1[index];
      });
    }
  });

  return CarEditView;
});
