YUI.add("sk:app", function (Y) {

  var StorekeeperApp = Y.Base.create("storekeeperApp", Y.App, [], {
    
    views: {
      dashboard: {
        type: Y.SK.DashboardView
      }
    },

    initializer: function () {
      this.once('ready', function (e) {
        if (this.hasRoute(this.getPath())) {
          this.dispatch();
        } 
        else {
          this.showDashboard();
        }
      });      
    },

    showDashboard: function () {
      this.showView('dashboard', {
      });
    },

    showOrders: function () {
    }

  },
  {
    ATTRS: {
      routes: [
        { path: '/',        callback: 'showDashboard'},
        { path: '/orders',  callback: 'showOrders'}
      ]
    }
  });

  Y.namespace("SK").App = StorekeeperApp;

}, "0.0.1", {requires: ['app-base', 'app-transitions', "sk:views:dashboard"]});
