YUI.add("storekeepertests-models-order", function (Y) {
  
  var OrderTest = new Y.Test.Case({
    name: 'storekeepertests-models-order',

    setUp: function () {
      this.order = new Y.SK.Order();
    },

    tearDown: function () {
      delete this.order;
    },

    "should mark as completed": function () {
      Y.Assert.areEqual("active", this.order.get("status"));
      this.order.markAsCompleted();
      Y.Assert.areEqual("completed", this.order.get("status"));
    }
    
  });

  Y.namespace("SKTests").OrderTest = OrderTest;

}, "0.0.1", { requires: ["test", "storekeeper-models-order"] });
