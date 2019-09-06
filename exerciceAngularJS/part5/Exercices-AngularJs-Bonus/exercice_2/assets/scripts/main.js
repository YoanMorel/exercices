angular.module("angularJsAlert", [])
    .controller("myController", [
        "$scope", "$window", ($scope, $window) => {
            $scope.angularAlert = "Ceci est une alerte Angular";
            $scope.clickMe = angularAlert => {
                $window.alert(angularAlert);
            };
        }
    ]);
