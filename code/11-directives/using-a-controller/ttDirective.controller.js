(function() {
  'use strict';

  angular
    .module('directivesDemo')
    .controller('ttDirectiveController', TtDirectiveController);

  function TtDirectiveController() {
    var vm = this;

    vm.sky = 'blue';
  }
}());
