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

      templateUrl: './directive.shared-scope.html'
    };
  }
}());
