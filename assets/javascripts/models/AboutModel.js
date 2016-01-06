define(function(require) {
  var Backbone = require('Backbone');


  var AboutModel = Backbone.Model.extend({

    url: '/database/about.json',

    defaults: {
      text: '',
      edit: false
    },

    validate: function(attrs, options) {
      if (attrs.text.length === 0) {
        return "Нельзя полностью удалить весь текст";
      }
    },


    getText200Symbols: function() {
      var text = this.get('text');
      text = text.substr(0, 200) + '...';
      return text;
    }
  });

  return AboutModel;
});
