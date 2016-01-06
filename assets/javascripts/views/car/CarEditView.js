define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/edit');
  var DestroyBehavior = require('behavior/DestroyBehavior');
  var OpenFileBehavior = require('behavior/OpenFileBehavior');


  var CarEditView = Marionette.ItemView.extend({

    template: template,

    behaviors: {
      destroy: {
        behaviorClass: DestroyBehavior
      },
      openimage: {
        behaviorClass: OpenFileBehavior
      }
    },

    ui: {
      save: '#save',
      photo: '.car-photo',
      carForm: '#car-form',
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


    deletePhoto: function(e) {
      e.preventDefault();
      $(e.target).parent().remove();
    },


    saveEditedCar: function(e) {
      e.preventDefault();
      this.updateData();
      Backbone.history.navigate('/', {trigger: true});
    },


    updateData: function() {
      var data = this.getObjectForm(this.ui.carForm)
      data.photo = this.getPhoto();

      if (this.isModelUnique(data)) { 
        this.model.set(data);
      } else {
        alert('A car with such a model already exists');
      }
    },


    getObjectForm: function(form) {
      return _.object(_.map(form.serializeArray(), _.values));
    },


    merge: function(arr1, arr2) {
      return _.map(arr2, function(el, index) {
        return el || arr1[index];
      });
    },


    getPhoto: function() {
      var photos = _.map(this.ui.photo, function(el) { return $(el).attr('src'); });
      return this.merge(this.model.get('photo'), photos);
    },


    isModelUnique: function(data) {
      var model = data.model;
      if (model === this.model.get('model')) return true;
      return !this.carsCollection.findWhere({model: model});
    },
  });

  return CarEditView;
});
