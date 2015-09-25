describe('When names are joined by a ;', function(){

  var $filter;
  var list;
  beforeEach(module('filterDemo'));
  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('should result in a string containing a ;', function(){
    list = ['ljasdl', 'iughsf', ' '];
    expect($filter('join')(list, ';')).toContain(';');
  });

  // list = undefined
  it('should handle a list which is undefiend', function() {
    list = undefined;
    expect($filter('join')(list)).toBe(undefined);
  });

  // list = 'sahugdusdf'
  it('should handle a list which is undefiend', function() {
    nolist = 'sahugdusdf';
    expect($filter('join')(nolist)).toBe(nolist);
  });

  // list = [0,-1, undefined]
  it('should handle a list which is undefiend', function() {
    nolist = [0,-1, undefined];
    var expectedValue = '0,-1';

    expect($filter('join')(nolist)).toBe(expectedValue);
  });
});
