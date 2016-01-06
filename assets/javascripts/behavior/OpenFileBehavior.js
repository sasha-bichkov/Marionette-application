define(function(require) {
  var Marionette = require('Marionette');


  var OpenFileBehavior = Marionette.Behavior.extend({

    ui: {
      photo: '.photo'
    },

    events: {
      'change @ui.photo': 'openFile'
    },

    openFile: function(e) {
      var view = this.view;
      var input = event.target;
      var reader = new FileReader();
      var $image = $(input).parent().find('img');

      reader.onload = function(){
        var dataURL = reader.result;
        $image.attr('src', dataURL);
        view.photo = dataURL;
      };

      reader.readAsDataURL(input.files[0]);
    }
  });

  return OpenFileBehavior;
});
