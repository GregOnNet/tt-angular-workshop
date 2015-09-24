(function() {
  'use strict';

  angular
   .module('directivesDemo')
   .controller('travellerController', TravellerController);

  function TravellerController() {
    var vm = this;
    vm.travellers = [{
      firstname: 'Benjamin',
      lastname: 'Klose'
    }, {
      firstname: 'Josefine',
      lastname: 'Klose'
    }];
  }
}());
