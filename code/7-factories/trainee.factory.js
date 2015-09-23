(function(){
  'use strict';

  angular
    .module('factories')
    .factory('trainees', trainees);

  function trainees() {

    // Objektliteral
    return {
        getAll : getAll
    };

    function getAll() {
      return [{
          firstname: 'Igor',
          lastname: 'Minar'
        },{
          firstname: 'Dan',
          lastname: 'Whalin'
        }, {
          firstname: 'John',
          lastname: 'Papa'
        }];
    }
  }
})();
