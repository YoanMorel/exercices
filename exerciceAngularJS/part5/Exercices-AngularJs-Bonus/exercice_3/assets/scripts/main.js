var appForm = angular.module('myApp', ['ngRoute', 'routeAppControllers']);

appForm.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'assets/partials/myForm.html',
      controller: 'myFormCtrl'
    })
    .when('/showInfos/:param1', {
      templateUrl: 'assets/partials/showInfos.html',
      controller: 'myInfosCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

appForm.run(['$rootScope', function($rootScope) {
  $rootScope.formTab = [];
  $rootScope.isVisible = false;
}]);

var routeAppControllers = angular.module('routeAppControllers', []);

routeAppControllers.controller('myFormCtrl', ['$scope', '$http', '$rootScope', '$filter', function($scope, $http, $rootScope, $filter) {

  $http.get('regex.json').then(function(response) {
    $scope.regexLastName = new RegExp(response.data[0].lastName);
    $scope.regexMail = new RegExp(response.data[1].email);
    $scope.regexTopic = new RegExp(response.data[2].topic);
  }).catch(function(response) {
    console.error('erreur au niveau du jison : ' + response.status, response.data);
  });

  this.pushForm = function(form) {
    $rootScope.isVisible = true;
    var dateEntry = $filter('date')(new Date(), 'dd-MM-yyyy');

    $rootScope.formTab.push({
      lastName: this.data.lastName,
      mail: this.data.mail,
      topic: this.data.topic,
      observation: this.data.observation,
      date: dateEntry
    });

    this.data = {
      lastName: null,
      mail: null,
      topic: null,
      observation: null
    }

    form.$setPristine();
    form.$setUntouched();
  };
}]);

routeAppControllers.controller('myInfosCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.param1 = $routeParams.param1.split('=');
}]);
