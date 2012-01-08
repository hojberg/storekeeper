YUI.add("storekeeper-views-order_list_item", function (Y) {

  var OrderListItemView = Y.Base.create("orderListItemView", Y.View, [], {

    template: Handlebars.templates['order_list_item/layout'],

    render: function () {
      var container = this.get("container");
      return this;
    }

  },
  {
    ATTRS: {
      container: {
        valueFn: function () {
          return Y.Node.create("<tr class='order_list_item'/>");
        }
      }
    }
  });

  Y.namespace("SK").OrderListItemView = OrderListItemView;

}, "0.0.1", {requires: ["view"]});
