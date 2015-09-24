(function() {
  'use strict';

  angular
   .module('filterDemo')
   .controller('filterController', FilterController);

  FilterController.$inject = ['$filter'];

  function FilterController($filter) {
    var vm = this;

    vm.sorted = [];
    vm.joined = '';
    vm.women = ['Jaqueline', 'Chantalle', 'Nadine', 'Charlotte'];

    vm.sorted = $filter('orderBy')(vm.women);
    vm.joined = $filter('join')(vm.sorted, '; ');
  }
}());
