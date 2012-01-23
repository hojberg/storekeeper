YUI.add("storekeepertests-models-order_list", function (Y) {
  
  var OrderListTest = new Y.Test.Case({
    name: 'storekeepertests-models-order_list',

    setUp: function () {
      this.orderList = new Y.SK.OrderList();
      this.orderList.add([
        {number: '123asd'},
        {number: 'asd123'}
      ]);
    },

    tearDown: function () {
      delete this.orderList;
    },

    "model should be an Order": function () {
      Y.Assert.areEqual(Y.SK.Order, this.orderList.model);
    },

    "should get model by number": function () {
      var number = "asd123";

      Y.Assert.areEqual(number, this.orderList.getByNumber(number).get("number"));
    }
    
  });

  Y.namespace("SKTests").OrderListTest = OrderListTest;

}, "0.0.1", { requires: ["test", "storekeeper-models-order", "storekeeper-models-order_list"] });
