(function() {
  'use strict';

  angular
    .module('services')
    .service('locations', Locations);

  function Locations() {

    this.getAll = getAll;

    function getAll() {
        return [
          'Oschatz',
          'Leipzig',
          'Würselen'
        ];
    }
  }

}());
