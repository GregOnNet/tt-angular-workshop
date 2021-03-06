(function() {
  'use strict';

  angular
    .module('directivesDemo')
    .controller('directivesController', DirectivesController);

  function DirectivesController() {
    var vm = this;

    vm.message = 'Our first directive goes here.';
    vm.age = 26;
    vm.greet = greet;

    function greet(age) {
      alert('Du bist ' + age + ' alt.');
    }
  }
}());
