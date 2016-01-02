define(function(require) {
  var Backbone = require('Backbone');


  var AboutModel = Backbone.Model.extend({

    url: '/database/about.json',

    defaults: {
      text: ''
    },

    getText300Symbols: function() {
      var text = this.get('text');
      text = text.substr(0, 300) + '...';
      return text;
    }
  });

  return AboutModel;
});
