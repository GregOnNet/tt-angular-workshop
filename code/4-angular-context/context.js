angular
  .module('digest', [])
  .controller('controller', controller);

controller.$inject = ['$timeout'];

function controller($timeout) {
  var vm = this;

  vm.name = 'Gregor';

  $timeout(function() {
    vm.name = 'Alexander';
    console.log('READY!!');
  }, 5000);

  /*
     - $interval
     - $window
   */
}
