YUI.add("storekeeper-views-order", function (Y) {

  var OrderView = Y.Base.create("orderView", Y.View, [], {

    template: Handlebars.templates['order/layout'],

    initializer: function () {
      var model = this.get("model");

      model.after("load", this.reset, this);
    },

    render: function () {
      return this;
    },

    reset: function () {
      var container = this.get("container"),
          model     = this.get("model");

      container.setContent(this.template(model.toJSON()));
      return this;
    }

  },
  {
    ATTRS: {
      container: {
        valueFn: function () {
          return Y.Node.create("<div class='order'/>");
        }
      }
    }
  });

  Y.namespace("SK").OrderView = OrderView;

}, "0.0.1", { requires: ["view"] });
