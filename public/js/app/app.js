YUI.add("storekeeper-app", function (Y) {

  var StorekeeperApp = Y.Base.create("storekeeperApp", Y.App, [], {
    
    views: {
      dashboard: {
        type: Y.SK.DashboardView
      },
      orders: {
        type: Y.SK.OrdersView
      },
      order: {
        type: Y.SK.OrderView
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
      this.showView('dashboard');
      this.setCurrentTab("dashboard");
    },

    showOrders: function () {
      var orderList = this.get("orderList");

      this.showView('orders', {
        modelList: orderList
      });

      orderList.load();

      this.setCurrentTab("orders");
    },

    showOrder: function (req) {
      var number  = req.params.number,
          list    = this.get("orderList"),
          order   = list.getByNumber(number);
         
      if (!order) order = new Y.SK.Order({ number: number });

      this.showView('order', {
        model: order
      });

      order.load();

      this.setCurrentTab("orders");
    },

    setCurrentTab: function (tabClass) {
      var tabs        = Y.all("#main_nav .tab"),
          newCurrent  = Y.one("#main_nav .tab." + tabClass);

      tabs.removeClass("current");
      newCurrent.addClass("current");
    }

  },
  {
    ATTRS: {
      routes: {
        value: [
          { path: '/',                callback: 'showDashboard' },
          { path: '/orders',          callback: 'showOrders'    },
          { path: '/orders/:number',  callback: 'showOrder'     }
        ]
      },
      orderList: {
        valueFn: function () {
          return new Y.SK.OrderList();
        }
      }
    }
  });

  Y.namespace("SK").App = StorekeeperApp;

}, "0.0.1", {requires: ['app-base', 
                        'app-transitions', 
                        "storekeeper-views-dashboard", 
                        "storekeeper-views-orders", 
                        "storekeeper-views-order", 
                        "storekeeper-models-order_list", 
                        "storekeeper-models-order"
                        ]
});
