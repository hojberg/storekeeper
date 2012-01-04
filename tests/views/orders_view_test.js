YUI.add("sk:tests:views:orders", function (Y) {
  
  var OrdersViewTest = new Y.Test.Case({
    name: 'sk:tests:views:orders',

    setUp: function () {
      this.view = new Y.SK.OrdersView();
    },

    tearDown: function () {
      delete this.view;
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

}, "0.0.1", { requires: ["test", "sk:views:orders"] });
