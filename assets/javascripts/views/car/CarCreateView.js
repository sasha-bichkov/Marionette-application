define(function(require) {
  var Marionette = require('Marionette');
  
  var template = require('hbs!car/create');
  var CarModel = require('models/CarModel');


  var CarCreateView = Marionette.ItemView.extend({

    template: template,

    ui: {
      form: '#car-form',
      photo: '#photo',
      output: '#output'
    },

    events: {
      'change @ui.photo': 'openFile',
      'submit @ui.form': 'createCar'
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
        if (this.photo) data.photo = this.photo;
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


    openFile: function(e) {
      var input = event.target;
      var reader = new FileReader();
      var self = this;

      reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
        self.photo = dataURL;
      };

      reader.readAsDataURL(input.files[0]);
    }
  });

  return CarCreateView;
});
