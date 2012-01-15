YUI.add("storekeeper-models-order_list", function (Y) {

  var OrderList = Y.Base.create("orderList", Y.ModelList, [Y.ModelSync.REST], {
    model: Y.SK.Order,
    root: '/orders.json',

    /**
    @method getByNumber
    @description finds an order by number
    @param {String} number, an order number
    @returns {Order|Null}
    **/
    getByNumber: function (number) {
      return (Y.Array.find(this.toArray(), function (model) {
        return number === model.get("number");
      }) || null);
    }
  }, 
  {
    ATTRS: {}
  });

  Y.namespace("SK").OrderList = OrderList;

}, "0.0.1", {requires: ["model-list", "gallery-model-sync-rest", "storekeeper-models-order"]});
