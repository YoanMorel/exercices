var appCars = angular.module('cars', []);

appCars.controller('carsCtrl', function($scope, $http) {
  $http.get('voiture.json').then(function(response) {
    $scope.myCars = response.data;
    console.log('statut : ' + response.status);
  }).catch(function(response) {
    console.error('Erreur de merde : ' + response.status, response.data);
  });
});

var appDisplay = angular.module('myDisplay', []);

appDisplay.controller('displayCtrl', function($scope) {
  $scope.showFirstText = function() {
    $scope.displayFirstText = $scope.displayFirstText = true;
    $scope.displaySecondtext = $scope.displaySecondText = false;
  };
  $scope.showSecondText = function() {
    $scope.displayFirstText = $scope.displayFirstText = false;
    $scope.displaySecondText = $scope.displaySecondText = true;
  };
});
