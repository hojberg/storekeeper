YUI.add("storekeeper-views-dashboard", function (Y) {

  Y.namespace('SK').DashboardView = Y.Base.create("dashboardView", Y.View, [], {

    template: Handlebars.templates['dashboard/layout'],
    
    render: function () {
      var container = this.get("container");
      container.setContent( this.template() );

      this._renderViews();

      return this;
    },

    _renderViews: function () {
    },

  }, 
  {
    ATTRS: {
      ordersOverview: {}
    }
  });

}, "0.0.1", {requires: ['view']});
