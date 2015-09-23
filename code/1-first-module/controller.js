// Schrank
angular
  // Schublade
  .module('moduleA', [])
  // Kleidungsstück
  .controller('controllerA', controller);

function controller($scope) {
  this.greeting = 'Hallo Traveltainment :-)';
  $scope.hallo = 'Hallo';
}
