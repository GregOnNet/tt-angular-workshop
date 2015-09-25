(function() {
  'use strict';

  angular
    .module('filterDemo')
    .filter('join', join);

  // ['Joe', 'Igor', 'Slatko']      -> 'Joe  Igor  Slatko'
  // ['Joe', 'Igor', 'Slatko'], ',' -> 'Joe, Igor, Slatko'

  function join() {
    return function(list, separator) {
      var sep = separator || ',';

      return list.join(sep);
    };
  }
}());
