YUI.add("storekeepertests-models-order_list", function (Y) {
  
  var OrderListTest = new Y.Test.Case({
    name: 'storekeepertests-models-order_list',

    setUp: function () {
      this.orderList = new Y.SK.OrderList();
    },

    tearDown: function () {
      delete this.orderList;
    }

    
  });

  Y.namespace("SKTests").OrderListTest = OrderListTest;

}, "0.0.1", { requires: ["test", "storekeeper-models-order", "storekeeper-models-order_list"] });
