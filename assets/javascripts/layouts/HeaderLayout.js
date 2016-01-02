define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!partial/header');
  var HeaderModel = require('models/HeaderModel');
  var NavigationView = require('views/NavigationView');


  var HeaderLayout = Marionette.LayoutView.extend({

    tagName: 'ul',

    model: new HeaderModel(),

    template: template,

    regions: {
      navigation: '#navigation'
    },

    initialize: function(options) {
      this.aboutModel = options.aboutModel;

      this.listenTo(this.aboutModel, 'change:text', this.setText);

      this.setText();
    },


    onRender: function() {
      this.navigation.show(new NavigationView());
    },


    setText: function() {
      var text = this.aboutModel.getText300Symbols();
      this.model.set('text', text);
    }
  });

  return HeaderLayout;
});
