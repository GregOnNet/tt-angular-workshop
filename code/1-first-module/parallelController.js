// Schrank
angular
  // Schublade
  .module('moduleA')
  // Kleidungsstück
  .controller('parallelController', controller);

function controller() {
  // scope
  this.callOut = 'Funktioniert das?';
}
