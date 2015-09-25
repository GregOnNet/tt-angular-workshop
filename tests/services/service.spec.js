describe('When all trips from Germany are loaded', function() {

  var tripsService;

  beforeEach(module('trips'));
  beforeEach(inject(function($injector){
    angular.module('ngRoute', []);
    tripsService = $injector.get('tripsService');
  }));

  it('should return a list with two items', function() {
    expect(tripsService.getTripsOfCountry('Germany').length).toEqual(2);
  });
});
