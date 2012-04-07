YUI.add('skspec:models:order', function (Y) {

  describe('Order', function () {
    var order;
    beforeEach(function () {
      order = new Y.SK.Order();
    });

    it('marks as completed', function () {
      expect( order.get('status') ).toBe('active');
      order.markAsCompleted();
      expect( order.get('status') ).toBe('completed');
    });
  });

}, '0.0.1', { requires: ['sk:models:order'] });
