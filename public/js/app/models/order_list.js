YUI.add("storekeeper-models-order_list", function (Y) {

  var OrderList = Y.Base.create("orderList", Y.ModelList, [Y.ModelSync.REST], {
    model: Y.SK.Order,
    root: '/orders'
  }, 
  {
    ATTRS: {}
  });

  Y.namespace("SK").OrderList = OrderList;

}, "0.0.1", {requires: ["model-list", "gallery-model-sync-rest", "storekeeper-models-order"]});
