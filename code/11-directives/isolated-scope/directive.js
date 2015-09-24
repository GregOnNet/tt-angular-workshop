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
        message: '@info',
        // Two way binding
        age: '=',
        // Callback function
        greet: '&'
      },
      templateUrl: './isolated-scope/template.html'
    };
  }
}());
