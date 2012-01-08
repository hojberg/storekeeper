YUI.add("storekeeper-views-order_list", function (Y) {

  var OrderListView = Y.Base.create("orderListView", Y.View, [], {

    render: function () {
    }

  },
  {
    ATTRS: {}
  });
  
  Y.namespace("SK").OrderListView = OrderListView;

}, "0.0.1", {requires: ["view", "storekeeper-views-order_list_item"]});
