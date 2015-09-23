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

    function getTrips() {
      vm.entries = tripsService.getTripsOfCountry('Germany');
    }
  }
}());
