(function() {
  'use strict';

  angular
   .module('trips')
   .controller('tripsController', tripsController);

   tripsController.$inject = ['tripsService'];

  function tripsController(tripsService) {
    var vm = this;

    vm.entries = [];

    getGermanTrips();

    function getGermanTrips() {
      vm.entries = tripsService.getTripsOfCountry('Germany');
    }
  }
}());
