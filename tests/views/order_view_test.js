YUI.add("storekeepertests-views-order", function (Y) {
  
  var OrderViewTest = new Y.Test.Case({
    name: 'storekeepertests-views-order',

    setUp: function () {
      this.order = new Y.SK.Order({number: "asd123", status: "active"});
      this.view = new Y.SK.OrderView({
        model: this.order
      });
    },

    tearDown: function () {
      this.order.destroy();
      this.view.destroy();
      delete this.view;
      delete this.model;
      Y.one("#sandbox").empty();
    },

    renderView: function () {
      Y.one("#sandbox").setContent(
        this.view.render().get("container")
      );
      this.view.get("model").fire("load");
    },

    "render should return itself": function () {
      Y.Assert.areEqual(this.view, this.view.render());
    },

    "should render the order": function () {
      this.renderView();

      Y.assert(Y.one(".number"), "there should be an order number");
      Y.assert(Y.one(".total_amount"), "there should be a total amount");
    }
    
  });

  Y.namespace("SKTests").OrderViewTest = OrderViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-views-order", "storekeeper-models-order"] });
