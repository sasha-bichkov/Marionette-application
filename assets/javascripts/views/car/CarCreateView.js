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
        data.id = this.setId();
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


    setId: function() {
      var models = this.carsCollection.models;
      var model_ids = _.map(models, function(m) { return m.get('id'); });
      var max_id = _.max(model_ids);
      return ++max_id;
    },


    openFile: function(e) {
      var self = this;
      var input = event.target;
      var reader = new FileReader();

      reader.onload = function(){
        var dataURL = reader.result;
        self.ui.output.attr('src', dataURL);
        self.photo = dataURL;
      };

      reader.readAsDataURL(input.files[0]);
    }
  });

  return CarCreateView;
});
