// Simple GET request example:
myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'topspots.json'
    }).then(function(response) {
        $scope.topspots = response.data;

    });
    $scope.addRow = function() {
        $scope.topspots.push({ 'name': $scope.name, 'description': $scope.description, 'location': [$scope.location1, $scope.location2] });
        $scope.name = '';
        $scope.description = '';
        $scope.location = [];
    };
}]);
