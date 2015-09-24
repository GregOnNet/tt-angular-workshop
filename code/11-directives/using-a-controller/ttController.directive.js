(function() {
  'use strict';

  angular
    .module('directivesDemo')
    .directive('ttController', ttController);

  function ttController() {
    return {
      templateUrl: './using-a-controller/template.html',
      controller: 'ttDirectiveController',
      controllerAs: 'vm'
    };
  }
}());
