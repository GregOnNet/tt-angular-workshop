describe('When a directive having a references template is compiled', function() {

  var element;
  var scope;

  beforeEach(module('directivesDemo'));
  beforeEach(module('templates'));
  beforeEach(inject(function($rootScope, $compile){

    element = angular.element('<div tt-isolated-scope info="note" age="26"></div>');
    scope = $rootScope.$new();

    $compile(element)(scope);
    scope.$apply();
  }));

  it('it should compile the tempalte', function() {
    console.log(scope.info);

    expect(element.html()).toMatch(/<p .+?>/);
    console.log(element.html());
  });
});


// beforeEach(module('testModule'));
// beforeEach(module('templates'));
//
// beforeEach(inject(function($rootScope, $compile) {
//
//   element = angular.element('<div templated-notification message="note"></div>');
//   note    = 'Message should be displayed in directive';
//   scope   = $rootScope;
//
//   $compile(element)(scope);
//   scope.$apply();
// }));
//
// it('it should display the note message', function() {
//
//   scope.$apply(function(){ scope.note = note; });
//   expect(element.html()).toContain(note);
// });
// });
