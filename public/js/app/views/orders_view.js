YUI.add("storekeeper-views-orders", function (Y) {

  var OrdersView = Y.Base.create("ordersView", Y.View, [], {

    render: function () {
      var container = this.get("container");
      container.setContent("Orders");
      return this;
    }

  });

  Y.namespace("SK").OrdersView = OrdersView;

}, "0.0.1", {requires: ['view']});
