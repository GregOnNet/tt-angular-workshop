(function() {
  'use strict';

  angular
   .module('filterDemo')
   .controller('filterController', FilterController);

  function FilterController() {
    var vm = this;

    vm.women = ['Jaqueline', 'Chantalle', 'Nadine', 'Charlotte'];
  }
}());
