YUI.add('skspec:models:order_list', function (Y) {

  describe('OrderList', function () {

    var orderList;
    beforeEach(function () {
      orderList = new Y.SK.OrderList();
      orderList.add([
        {number: '123asd'},
        {number: 'asd123'}
      ]);
    });
   
    it('should have an Order for model', function () {
      expect( orderList.model ).toBe(Y.SK.Order);
    });

    it("should get model by number",function () {
      var number = "asd123";
      expect( orderList.getByNumber(number).get("number") ).toBe( number );
    });

  });

}, '0.0.1', { requires: ['sk:models:order_list', 'sk:models:order'] });
