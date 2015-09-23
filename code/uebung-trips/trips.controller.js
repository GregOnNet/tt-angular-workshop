(function() {
  'use strict';

  angular
   .module('trips')
   .controller('tripsController', tripsController);

   tripsController.$inject = ['tripsService'];

  function tripsController(tripsService) {
    var vm = this;

    vm.entries = [];
    vm.getTrips = getTrips;

    function getTrips(country) {
      vm.entries = tripsService.getTripsOfCountry(country);
    }
  }
}());
