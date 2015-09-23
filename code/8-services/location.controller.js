(function() {
  'use strict';

   angular
     .module('services')
     .controller('locationController', Controller);

   Controller.$inject = ['locations'];

   function Controller(locations){

     console.log(locations.getAll());
   }
}());
