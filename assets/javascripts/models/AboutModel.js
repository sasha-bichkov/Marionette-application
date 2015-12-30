define(function(require) {
  var Backbone = require('Backbone');
  var LocalStorage = require('localstorage');


  var AboutModel = Backbone.Model.extend({

    localStorage: new LocalStorage('About'),

    defaults: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laboriosam molestiae in autem ea animi eaque est facere alias mollitia, blanditiis, veritatis eum, error perspiciatis hic atque, quis at sint.' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laboriosam molestiae in autem ea animi eaque est facere alias mollitia, blanditiis, veritatis eum, error perspiciatis hic atque, quis at sint.'
    },

    getText300Symbols: function() {
      var text = this.get('text');
      text = text.substr(0, 300) + '...';
      return text;
    }
  });

  return AboutModel;
});
