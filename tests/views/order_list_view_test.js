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
    
    "should render a table header and table body": function () {
      this.renderView();
      this.view.reset();
      Y.assert(Y.one("table.order_list > thead"), "there should be a thead");
      Y.assert(Y.one("table.order_list > tbody"), "there should be a tbody");
    },

    "should render a list of orders": function () {
      this.renderView();
      this.view.reset();
      Y.assert(Y.one("table.order_list"), "there should be a list of orders");
      Y.Assert.areEqual(2, Y.all("table.order_list > tbody > tr").size(), "there should be 2 rows");
    },

    "should render items on modelList reset": function () {
      this.renderView();

      Y.Assert.areEqual(0, Y.all("table.order_list > tbody > tr").size(), "there should be 0 rows");

      this.view.get("modelList").reset([
        {number: 'jkl321', status: 'active'}, 
        {number: 'asd365', status: 'active'}
      ]);
      
      Y.Assert.areEqual(2, Y.all("table.order_list > tbody > tr").size(), "there should be 2 rows");
    },

    "should add an item on modelList add": function () {
      this.renderView();
      Y.Assert.areEqual(0, Y.all("table.order_list > tbody > tr").size(), "there should be 0 rows");
      this.modelList.add([{number: 'jkl321', status: 'active'}]);
      Y.Assert.areEqual(1, Y.all("table.order_list > tbody > tr").size(), "there should be 1 rows");
    },

    "clear should remove all items": function () {
      this.renderView();
      this.view.reset();
      Y.Assert.areEqual(2, Y.all("table.order_list > tbody > tr").size(), "there should be 2 rows");
      this.view.clear();
      Y.Assert.areEqual(0, Y.all("table.order_list > tbody > tr").size(), "there should be 0 rows");
    }

  });

  Y.namespace("SKTests").OrderListViewTest = OrderListViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-models-order_list", "storekeeper-views-order_list", "storekeeper-views-order_list_item"]});

