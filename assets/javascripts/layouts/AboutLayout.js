define(function(require) {
  var Marionette = require('Marionette');

  var template = require('hbs!about');


  var AboutLayout = Marionette.LayoutView.extend({

    template: template,

    ui: {
      about: '#about'
    },

    events: {
      'click #edit': 'edit',
      'click #save': 'save'
    },

    modelEvents: {
      'change': 'render'
    },

    initialize: function() {},


    edit: function() {
      var edit = !this.model.get('edit');
      this.model.set('edit', edit);
    },


    save: function() {
      var text = this.ui.about.text();
      var oldText = this.model.get('text');
      this.model.set({'text': text, edit: false});
      if (!this.model.isValid()) {
        alert(this.model.validationError);
        this.model.set('text', oldText);
      }
    }
  });

  return AboutLayout;
});
