YUI.add("storekeepertests-views-order_list", function (Y) {
  
  var OrderListViewTest = new Y.Test.Case({
    name: 'storekeepertests-views-order_list',

    setUp: function () {
      this.view = new Y.SK.OrderListView();
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

  Y.namespace("SKTests").OrderListViewTest = OrderListViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-views-order_list", "storekeeper-views-order_list_item"]});

