angular
  .module('digest', [])
  .controller('controller', controller);

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
