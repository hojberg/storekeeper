YUI.add("storekeeper-models-order", function (Y) {

  var STATUSES = ["active", "completed"];

  var Order = Y.Base.create("order", Y.Model, [Y.ModelSync.REST], {
    root: "/orders",

    markAsCompleted: function () {
      this.set("status", "completed");
    }
  }, 
  {
    STATUSES: STATUSES,
    ATTRS: {
      total: {
        value: 0.0
      },
      status: {
        value: 'active'
      }
    }
  });
  
  Y.namespace("SK").Order = Order;

}, "0.0.1", {requires: ["model", "gallery-model-sync-rest"]});
