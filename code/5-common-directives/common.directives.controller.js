angular
  .module('directives', [])
  .controller('DirectivesController', Controller);

function Controller() {

  this.people = [{
    firstname: 'Igor',
    lastname: 'Minar'
  },{
    firstname: 'Dan',
    lastname: 'Whalin'
  }, {
    firstname: 'John',
    lastname: 'Papa'
  }];
}
