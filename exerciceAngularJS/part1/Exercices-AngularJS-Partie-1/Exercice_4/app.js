var calculApp = angular.module('calcul-app', []);

calculApp.controller('calcul-ctrl', ['$scope', function ($scope) {
  $scope.sumCalc = 220 + 304;
}]);
