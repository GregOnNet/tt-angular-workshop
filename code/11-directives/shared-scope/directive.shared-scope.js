(function() {
  'use strict';

  angular
    .module('directivesDemo')
    //      tt-shared-scope
    // data-tt-shared-scope
    .directive('ttSharedScope', ttSharedScope);

  function ttSharedScope() {
    // directive definition object
    return {

      template: '<p class="lead">{{ vm.message }}</p>',
      // templateUrl: './shared-scope/directive.shared-scope.html'
    };
  }
}());
