(function() {
  'use strict';

  angular
   .module('trips')
   .config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider) {
    $routeProvider
      .when('/welcome/:id/name/:name', {
        templateUrl: 'components/welcome/welcome.html',
        controller: 'welcomeController',
        controllerAs: 'welcome'
      });
  }
}());
