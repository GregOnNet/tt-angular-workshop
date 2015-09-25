(function() {
  'use strict';

  angular
    .module('filterDemo')
    .filter('join', join);

  // ['Joe', 'Igor', 'Slatko']      -> 'Joe  Igor  Slatko'
  // ['Joe', 'Igor', 'Slatko'], ',' -> 'Joe, Igor, Slatko'

  function join() {
    return function(list, separator) {
      if(list === undefined || !Array.isArray(list))
        return list;

      list = list.filter(function(n){ return n !== undefined; });
      return list.join(separator || ',');
    };
  }
}());
