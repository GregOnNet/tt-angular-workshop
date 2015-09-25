// Schrank
angular
  // Schublade
  .module('moduleA', [])
  // Kleidungsstück
  .controller('controllerA', controller);
controller.$inject = ['§scope'];

function controller($scope) {
  this.greeting = 'Hallo Traveltainment :-)';
  $scope.hallo = 'Hallo';
}
