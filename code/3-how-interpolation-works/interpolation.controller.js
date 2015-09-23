angular
  .module('interpolation', [])
  .controller('demo', controller);

function controller($scope, $interpolate) {
  this.expression = $interpolate('{{ value | uppercase }}');
  this.firstname = 'Gregor';

  //                              Objekliteral
  this.result = this.expression({ value: this.firstname });
  console.log(this.result);
}
