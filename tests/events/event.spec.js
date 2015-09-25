describe('When trainees are requested', function(){

  var controller;
  var scope;

  beforeEach(module('factories'));
  beforeEach(inject(function($controller, $rootScope){

    scope = $rootScope.$new();
    controller = $controller('DirectivesController', { $scope: scope });

  }));

  it('should raise the event REQUEST_STARTED', function(){

    // setup spy
    spyOn(scope, '$emit');

    // act
    controller.do();

    // assert
    expect(scope.$emit)
      .toHaveBeenCalledWith('REQUEST_STARTED', 1);
  });
});
