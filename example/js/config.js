(function() {
  require.config({
    paths: (function() {
      var root, staticPrefix, vendor;
      staticPrefix = require.isBrowser ? window._staticUrl : "" + process.env.PROJECT_ROOT + "/static/";
      root = '../../';
      vendor = "" + root + "vendor/";
      return {
        'requireLib': "" + vendor + "requirejs/require",
        'sugarspoon': "" + root + "src/js",
        'backbone': "" + vendor + "backbone/backbone",
        'handlebars': "" + vendor + "handlebars/handlebars",
        'jquery': "" + vendor + "jquery/jquery",
        'hb': "" + vendor + "requirejs-handlebars/hb",
        'text': "" + vendor + "requirejs-text/text",
        'underscore': "" + vendor + "underscore/underscore",
        'blanket': "" + vendor + "blanket/dist/qunit/blanket",
        'chai': "" + vendor + "chai/chai",
        'mocha': "" + vendor + "mocha/mocha",
        'template': '../handlebars'
      };
    })(),
    shim: {
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'handlebars': {
        exports: 'Handlebars'
      },
      'underscore': {
        exports: '_'
      },
      'blanket': {
        exports: 'blanket'
      },
      'mocha': {
        exports: 'mocha'
      }
    }
  });

}).call(this);

/*
//@ sourceMappingURL=config.js.map
*/