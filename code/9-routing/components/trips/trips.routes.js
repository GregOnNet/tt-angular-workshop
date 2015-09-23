(function() {
  'use strict';

  angular
    .module('trips')
    .config(routes);

  function routes($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'components/trips/trips.html',
        controller: 'tripsController',
        controllerAs: 'trips'
      });
  }
}());
