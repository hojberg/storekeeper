YUI.add("storekeepertests-views-orders", function (Y) {
  
  var OrdersViewTest = new Y.Test.Case({
    name: 'storekeepertests-views-orders',

    setUp: function () {
      this.view = new Y.SK.OrdersView({
        modelList: new Y.SK.OrderList();
      });
    },

    tearDown: function () {
      delete this.view;
    },
    
    renderView: function () {
      Y.one("#sandbox").setContent(
        this.view.render().get("container")
      );
    },

    "render should return itself": function () {
      Y.Assert.areEqual(this.view, this.view.render());
    },

    "should render a list of orders": function () {
      this.renderView();
      Y.assert(Y.one(".order_list"), "there should be a list of orders");
    }
    
  });

  Y.namespace("SKTests").OrdersViewTest = OrdersViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-views-orders", "storekeeper-models-order_list"] });
