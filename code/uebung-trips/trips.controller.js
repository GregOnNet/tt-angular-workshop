(function() {
  'use strict';

  angular
   .module('trips')
   .controller('tripsController', tripsController);

   tripsController.$inject = ['tripsService', 'tripsFactory'];

  function tripsController(tripsService, tripsFactory) {
    var vm = this;

    vm.entries = [];
    vm.getTrips = getTrips;

    vm.entries = tripsFactory.getAll();

    function getTrips(country) {
      vm.entries = tripsService.getTripsOfCountry(country);
    }
  }
}());
