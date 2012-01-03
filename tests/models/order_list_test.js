YUI.add("sk:tests:models:order_list", function (Y) {
  
  var OrderTest = new Y.Test.Case({
    name: 'sk:tests:models:order_list',

    setUp: function () {
      this.order = new Y.SK.OrderList();
    },

    tearDown: function () {
      delete this.order;
    }
    
  });

  Y.namespace("SKTests").OrderListTest = OrderListTest;

}, "0.0.1", { requires: ["test", "sk:models:order", "sk:models:order_list"] });
