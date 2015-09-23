(function() {
  'use strict';

  angular
   .module('trips')
   .factory('tripsFactory', tripsFactory);

  function tripsFactory() {
    return {
      getAll : getAll
    };

    function getAll() {
      return [{
        'city': 'London',
        'country': 'England'
      }, {
        'city': 'Berlin',
        'country': 'Germany'
      }, {
        'city': 'Dresden',
        'country': 'Germany'
      }];
    }
  }
}());
