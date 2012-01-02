YUI.add("sk:app", function (Y) {

  var StorekeeperApp = Y.Base.create("storekeeperApp", Y.App, [], {
    
    views: {
    },

    initializer: function () {
    }

  },
  {
    ATTRS: {
    }
  });

  Y.namespace("SK").App = StorekeeperApp;

}, "0.0.1", {requires: ['app-base', 'app-transitions']});
