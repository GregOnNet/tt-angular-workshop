(function() {
  'use strict';

  angular
   .module('trips')
   .service('tripsService', tripsService);

   tripsService.$inject = ['tripsFactory'];

  function tripsService(tripsFactory) {
    var service = this;

    service.getTripsOfCountry = getByCountry;

    function getByCountry(country) {

      var result = tripsFactory
                     .getAll()
                     .filter(function(trip){
                       return trip.country === country;
                     });

      return result;
    }
  }
}());
