describe('When a directive having a inline template is compiled', function() {

  var element;
  var scope;

  beforeEach(module('directivesDemo'));
  beforeEach(inject(function($rootScope, $compile){

    element = angular.element('<tt-shared-scope></tt-shared-scope>');
    scope = $rootScope.$new();

    $compile(element, scope);
    scope.$apply();
  }));

  it('it should compile the tempalte', function() {
    expect(element.html()).toMatch(/<p .+?>/);
  });
});
