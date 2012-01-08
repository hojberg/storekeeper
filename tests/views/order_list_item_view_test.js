YUI.add("storekeepertests-views-order_list_item", function (Y) {
  
  var OrderListItemViewTest = new Y.Test.Case({
    name: 'storekeepertests-views-order_list_item',

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

  Y.namespace("SKTests").OrderListItemViewTest = OrderListItemViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-views-order_list_item"] });
