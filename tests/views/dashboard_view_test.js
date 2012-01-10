YUI.add("storekeepertests-views-dashboard", function (Y) {
  
  var DashboardViewTest = new Y.Test.Case({
    name: 'storekeepertests-views-dashboard',

    setUp: function () {
      this.view = new Y.SK.DashboardView();
    },

    tearDown: function () {
      delete this.view;
    },

    "render should return itself": function () {
      Y.Assert.areEqual(this.view, this.view.render());
    }
    
  });

  Y.namespace("SKTests").DashboardViewTest = DashboardViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-views-dashboard"] });

