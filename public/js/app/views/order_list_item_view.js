YUI.add("storekeeper-views-order_list_item", function (Y) {

  var OrderListItemView = Y.Base.create("orderListItemView", Y.View, [], {

    render: function () {
    }

  },
  {
    ATTRS: {}
  });

  Y.namespace("SK").OrderListItemView = OrderListItemView;

}, "0.0.1", {requires: ["view"]});
