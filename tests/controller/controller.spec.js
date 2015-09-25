describe('When the controller is initialized', function() {

  var scope;
  var $timeout;
  var digestController;

  beforeEach(module('digest'));
  beforeEach(inject(function($controller, $rootScope, _$timeout_) {
    scope = $rootScope.$new();
    $timeout = _$timeout_;

    digestController = $controller('controller', { $timeout: $timeout });
  }));

  it('should define a name with the value Gregor', function(){
    expect(digestController.name).toBeDefined();
    expect(digestController.name).toBe('Gregor');
  });

  it('should chnage the name to Alexander after the timeout is elapsed', function() {
    $timeout.flush();
    expect(digestController.name).toBe('Alexander');
  });
});
