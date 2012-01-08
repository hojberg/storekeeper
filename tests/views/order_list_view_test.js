YUI.add("storekeepertests-views-order_list", function (Y) {
  
  var OrderListViewTest = new Y.Test.Case({
    name: 'storekeepertests-views-order_list',

    setUp: function () {
      this.modelList = new Y.SK.OrderList();
      this.modelList.reset([
        {number: 'asd123', status: 'active'},
        {number: 'efg456', status: 'active'}
      ]);
      this.view = new Y.SK.OrderListView({
        modelList: this.modelList
      });
    },

    tearDown: function () {
      this.view.destroy();
      delete this.view;
      this.modelList.destroy();
      delete this.modelList;
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

    "should have OrderListItem as itemView": function () {
      Y.Assert.areEqual(Y.SK.OrderListItemView, this.view.itemView);
    },

    "should render a list of orders": function () {
      this.renderView();
      Y.assert(Y.one("table.order_list"), "there should be a list of orders");
      Y.Assert.areEqual(3, Y.all("table.order_list tr").size(), "there should be 3 rows");
    },

    "should render a table header": function () {
      this.renderView();
      Y.assert(Y.one("table.order_list > tr > th"), "there should be a th");
    },

    "should re-render on modelList reset": function () {
    },

    "should add an item on modelList add": function () {
    },

    "clear should remove all items": function () {
    }

  });

  Y.namespace("SKTests").OrderListViewTest = OrderListViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-models-order_list", "storekeeper-views-order_list", "storekeeper-views-order_list_item"]});

