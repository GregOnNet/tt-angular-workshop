var Ctrl = function Controller($scope) {
  console.info($scope);
};

var $scope = 'something';
var controller = new Ctrl($scope);

console.warn(Ctrl);

console.log(
  angular
    .injector()
    .annotate(Ctrl));
