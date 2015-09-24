(function() {
  'use strict';

  angular
    .module('qDemo')
    .service('asyncService', AsyncService);

  AsyncService.$inject = ['$q', '$timeout'];

  function AsyncService($q, $timeout) {

    this.do = doIt;

    function doIt(shouldResolve) {
      var deferral = $q.defer();

      // Asynchron
      $timeout(function() {

        deferral.notify('Try to resolve your request....');

        if(shouldResolve) {
          deferral.resolve('Your request has been resolved successfully');
          deferral.notify('Success ...');
        }
        else
          deferral.reject('There was a problem resolving your request.')

      }, 3000);

      return deferral.promise;
    }
  }
}());
