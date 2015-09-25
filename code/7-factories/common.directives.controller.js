(function() {
  angular
    .module('factories')
    .controller('DirectivesController', Controller);

  Controller.$inject = ['$scope','trainees'];

  // Konstruktorfunktion
  function Controller($scope, a) {

    this.people = a.getAll();

    this.do = doIt;

    function doIt() {
      $scope.$emit('REQUEST_STARTED', 1);
    }
  }
}());
