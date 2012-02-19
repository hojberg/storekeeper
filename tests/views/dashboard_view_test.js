YUI.add("storekeepertests-views-dashboard", function (Y) {
  
  var DashboardViewTest = new Y.Test.Case({
    name: 'storekeepertests-views-dashboard',

    setUp: function () {
      this.view = new Y.SK.DashboardView();
    },

    tearDown: function () {
      delete this.view;
    },

    renderView: function () {
    },

    "render should return itself": function () {
      Y.Assert.areEqual(this.view, this.view.render());
    },

    'should render the dashboard container': function () {
      this.renderView();
      Y.assert(Y.one('.dashboard'), 'there should be a dashboard');
    },

    'should render orders overview': function () {
      this.renderView();

      var ordersOverview = this.ordersOverview;

      Y.assert(Y.one('.dashboard .active_orders'), 'there should be an active orders number');
      Y.Assert.areEqual(ordersOverview.get('active'), Y.one('.active_orders h1').get('text'))

      Y.assert(Y.one('.dashboard .orders_today'), 'there should be an orders today number');
      Y.Assert.areEqual(ordersOverview.get('today'), Y.one('.orders_today h1').get('text'))

      Y.assert(Y.one('.dashboard .orders_this_week'), 'there should be an orders this week number');
      Y.Assert.areEqual(ordersOverview.get('thisWeek'), Y.one('.orders_this_week h1').get('text'))
    }
    
  });

  Y.namespace("SKTests").DashboardViewTest = DashboardViewTest;

}, "0.0.1", { requires: ["test", "storekeeper-views-dashboard"] });

