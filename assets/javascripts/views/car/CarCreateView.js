define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/create');
  var CarModel = require('models/CarModel');
  var CarCreateModel = require('models/CarCreateModel');
  var OpenFileBehavior = require('behavior/OpenFileBehavior');


  var CarCreateView = Marionette.ItemView.extend({

    tagName: 'section',

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
      var data = this.prepareData(this.getObjectForm(form));

      if (this.isModelUnique(data)) {
        this.createNewCar(data);
        Backbone.history.navigate('/', {trigger: true});
      } else {
        alert('A car with such a model already exists');
      }
    },


    createNewCar: function(data) {
      var carModel = new CarModel(data);
      this.carsCollection.add(carModel);
    },


    prepareData: function(data) {
      var res = data;
      res.id = this.setId();
      res.createdAt = this.model.getCreatedDate();
      if (this.photo) res.photo = [this.photo];
      return res;
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
