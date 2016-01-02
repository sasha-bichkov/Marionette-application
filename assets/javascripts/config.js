requirejs.config({
  // Указываем базовую директорию, где будем искать скрипты
  baseUrl: '/assets/javascripts',
  // Прописываем пути до библиотек
  paths: {
    jquery: 'libs/jquery/jquery-1.11.3',
    underscore: 'libs/underscore-1.6.0',
    backbone: 'libs/backbone-1.1.2',
    marionette: 'libs/marionette-2.4.4',
    handlebars: 'libs/handlebars-4.0.5',
    text: 'libs/text-2.0.6'
  },
  packages: [
    {
      name: 'hbs',
      location: 'libs',
      main: 'hbs'
    }
  ],
  hbs: {
    base: 'templates'
  },
  // указываем псевдонимы
  map: {
    '*': {
      $: 'jquery',
      _: 'underscore',
      Backbone: 'backbone',
      Marionette: 'marionette'
    }
  },
  // Указываем зависимости к библиотекам
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['_', '$'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['backbone'],
      exports: 'Marionette'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }
});
