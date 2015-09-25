describe('When the controller is initialized', function() {

  var scope;
  var $timeout;
  var controller;

  beforeEach(module('digest'));
  beforeEach(inject(function($controller, $rootScope, _$timeout_) {
    scope = $rootScope.$new();
    $timeout = _$timeout_;

    controller = $controller('controller', { timeout: $timeout });
  }));

  it('should define a name with the value Gregor', function(){
    expect(controller.name).toBeDefined();
    expect(controller.name).toBe('Gregor');
  });

  it('should chnage the name to Alexander after the timeout is elapsed', function() {
    $timeout.flush();
    expect(controller.name).toBe('Alexander');
  });
});
