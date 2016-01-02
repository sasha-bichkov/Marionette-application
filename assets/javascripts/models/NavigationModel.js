define(function(require) {
  var Backbone = require('Backbone');


  var NavigationModel = Backbone.Model.extend({
    defaults: {
      items: [
        {href: '#', title: 'Home'},
        {href: '#car/create', title: 'Create'},
        {href: '#about-us', title: 'About us'}
      ]
    },

    getHash: function() {
      return location.hash;
    }
  });

  return NavigationModel;
});
