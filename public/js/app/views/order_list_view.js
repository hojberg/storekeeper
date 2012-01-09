YUI.add("storekeeper-views-order_list", function (Y) {

  var OrderListView = Y.Base.create("orderListView", Y.View, [], {

    itemView: Y.SK.OrderListItemView,

    template: Handlebars.templates['order_list/layout'],

    initializer: function () {
      var modelList = this.get("modelList");
      modelList.after("reset", this.reset, this);
      modelList.after("add",   this.add, this);
    },

    render: function () {
      var container = this.get("container");
      container.setContent(this.template());
      return this;
    },

    reset: function (ev) {
      var modelList = this.get("modelList");
      this.clear();
      Y.each(modelList.toArray(), this.add, this);
    },

    clear: function () {
      var items = this.get("items");
      Y.Array.invoke(items, "destroy");
      items = [];
      this.set("items", items);
    },

    add: function (model) {
      var container = this.get("container"),
          tbody     = container.one("tbody"),
          itemView  = new this.itemView({model: model});
  
      this.get("items").push(itemView);
      tbody.append(itemView.render().get("container"));
    },

    destructor: function () {
      this.clear();
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
