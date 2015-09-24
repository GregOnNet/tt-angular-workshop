(function() {
  'use strict';

  angular
    .module('qDemo')
    .controller('asyncController', AsyncController);

  AsyncController.$inject = ['asyncService', '$timeout'];

  function AsyncController(asyncService, $timeout) {
    var vm = this;

    vm.statusMessage = 'Pending...';
    vm.resolve = resolve;
    vm.reject = reject;

    function resolve() {
      asyncService
        .do(true)
        .then(
          onSucceed,
          onRejected,
          onNotified)
        .finally(onFinished);
    }

    function reject() {
      asyncService
        .do(false)
        .then(
          onSucceed,
          onRejected,
          onNotified)
        .finally(onFinished);
    }

    function onSucceed(message) {
      vm.statusMessage = message;
    }

    function onRejected(reason) {
      vm.statusMessage = reason;
    }

    function onNotified(notification) {
      console.info(notification);
    }

    function onFinished(notification) {
      $timeout(function() { vm.statusMessage = 'Pending...'; }, 2000);
    }
  }
}());
