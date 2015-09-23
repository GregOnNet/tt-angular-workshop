(function() {
  angular
    .module('factories')
    .controller('DirectivesController', Controller);

  Controller.$inject = ['trainees'];

  // Konstruktorfunktion
  function Controller(a) {

    this.people = a.getAll();
  }
}());
