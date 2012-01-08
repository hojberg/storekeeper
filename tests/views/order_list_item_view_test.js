YUI.add("storekeepertests-views-order_list_item", function (Y) {
  
  var OrderListItemViewTest = new Y.Test.Case({
    name: 'storekeepertests-views-order_list_item',

    setUp: function () {
      this.view = new Y.SK.OrderListItemView();
    },

    tearDown: function () {
      delete this.view;
      Y.one("#sandbox").empty();
    },

    renderView: function () {
      Y.one("#sandbox").setContent(
        this.view.render().get("container")
      );
    },

    "render should return itself": function () {
      Y.Assert.areEqual(this.view, this.view.render());
    },

    "should render an order list item": function () {
      this.renderView();
      Y.assert(Y.one("tr.order_list_item"), "there should be an order list item");
    }
    
  });

  Y.namespace("SKTests").OrderListItemViewTest = OrderListItemViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-views-order_list_item"] });
