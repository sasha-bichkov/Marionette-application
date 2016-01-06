define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/create');
  var CarModel = require('models/CarModel');
  var CarCreateModel = require('models/CarCreateModel');
  var OpenFileBehavior = require('behavior/OpenFileBehavior');


  var CarCreateView = Marionette.ItemView.extend({

    template: template,

    model: new CarCreateModel(),

    ui: {
      form: '#car-form',
      output: '#output'
    },

    events: {
      'submit @ui.form': 'createCar'
    },

    behaviors: {
      openimage: {
        behaviorClass: OpenFileBehavior
      }
    },

    initialize: function() {
      this.carsCollection = this.options.carsCollection;
    },


    createCar: function(e) {
      e.preventDefault();
      var form = this.ui.form;
      var data = this.getObjectForm(form);
      var isModelUnique = this.isModelUnique.bind(this);

      if (isModelUnique(data)) {
        data.id = this.setId();
        data.createdAt = this.model.getCreatedDate();
        if (this.photo) data.photo = [this.photo];
        var carModel = new CarModel(data);
        this.carsCollection.add(carModel);
        Backbone.history.navigate('/', {trigger: true});
      } else {
        alert('A car with such a model already exists');
      }
    },


    getObjectForm: function(form) {
      return _.object(_.map(form.serializeArray(), _.values));
    },


    isModelUnique: function(data) {
      var model = data.model;
      return !this.carsCollection.findWhere({model: model});
    },


    setId: function() {
      return this.model.getId(this.carsCollection.fullCollection);
    }
  });

  return CarCreateView;
});
