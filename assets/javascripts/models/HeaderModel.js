define(function(require) {
  var Backbone = require('Backbone');


  var HeaderModel = Backbone.Model.extend({
    getHash: function() {
      return location.hash;
    }
  });

  return HeaderModel;
});
