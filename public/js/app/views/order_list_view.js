YUI.add("storekeeper-views-order_list", function (Y) {

  var OrderListView = Y.Base.create("orderListView", Y.View, [], {

    itemView: Y.SK.OrderListItemView,

    template: Handlebars.templates['order_list/layout'],

    render: function () {
      return this;
    },

    reset: function () {
      this.clear();
      Y.each(this.modelList, this.add, this);
    },

    clear: function () {
    },

    add: function (model) {
      var container = this.get("container"),
          tbody     = container.one("tbody"),
          itemView  = new this.itemView({model: model});

      this.get("items").push(itemView);
      tbody.append(itemView.render().get("container"));
    }

  },
  {
    ATTRS: {
      container: {
        valueFn: function () {
          return Y.Node.create("<table class='order_list' />");
        }
      },
      items: {
        value: []
      }
    }
  });
  
  Y.namespace("SK").OrderListView = OrderListView;

}, "0.0.1", {requires: ["view", "storekeeper-views-order_list_item"]});
