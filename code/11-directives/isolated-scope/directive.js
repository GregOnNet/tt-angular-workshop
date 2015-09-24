(function() {
  'use strict';

  angular
    .module('directivesDemo')
    .directive('ttIsolatedScope', ttIsolatedScope);

  function ttIsolatedScope() {
    // directive definition object
    return {
      scope: {
        // Attributname
        message: '@'
      },
      templateUrl: './isolated-scope/template.html'
    };
  }
}());
