(function() {
  'use strict';

  angular
    .module('directivesDemo')
    .controller('directivesController', DirectivesController);

  function DirectivesController() {
    var vm = this;
    
    vm.message = 'Our first directive goes here.';
  }
}());
