var searchApp = angular.module('searchApp', [
    'ngSanitize',
    'ngAnimate',
    'ngQuantum'
]);

searchApp.controller('searchCtrl', function ($scope, $http) {

    $http.get('data.json').success(function (data, status, headers, config) {

        $scope.names = data;

    }).error(function () {
    });

});