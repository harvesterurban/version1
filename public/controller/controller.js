var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
$scope.calculate=function() {
  $http.post('/googlemaps',$scope.query).success(function(response) {

    $scope.googlemaps = response;
 
  });
};
}]);﻿