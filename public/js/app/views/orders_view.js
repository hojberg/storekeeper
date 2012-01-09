YUI.add("storekeeper-views-orders", function (Y) {

  var OrdersView = Y.Base.create("ordersView", Y.View, [], {

    template: Handlebars.templates["orders/layout"],

    render: function () {
      var container = this.get("container");
      container.setContent(this.template());
      this.renderOrderList();
      return this;
    },

    renderOrderList: function () {
      var container     = this.get("container"),
          listContainer = container.one(".list"),
          orderListView = this.get("orderListView");

      listContainer.setContent(orderListView.render().get("container"));
    }

  },
  {
    ATTRS: {
      orderListView: {
        valueFn: function () {
          return new Y.SK.OrderListView({
            modelList: this.get("modelList")
          });
        }
      },
      container: {
        valueFn: function () {
          return Y.Node.create("<div id='orders'/>");
        }
      }
    }
  });

  Y.namespace("SK").OrdersView = OrdersView;

}, "0.0.1", {requires: ['view', "storekeeper-views-order_list"]});
