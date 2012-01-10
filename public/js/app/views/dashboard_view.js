YUI.add("storekeeper-views-dashboard", function (Y) {

  var DashboardView = Y.Base.create("dashboardView", Y.View, [], {

    render: function () {
      var container = this.get("container");
      container.setContent("Dashboard");
      return this;
    }

  });

  Y.namespace("SK").DashboardView = DashboardView;

}, "0.0.1", {requires: ['view']});
