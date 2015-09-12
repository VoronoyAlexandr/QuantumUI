/**
 * Created by sasha on 12.09.15.
 */
var searchApp = angular.module('searchApp', [
    'ngSanitize',
    'ngAnimate',
    'ngQuantum'
]);

searchApp.controller('searchCtrl', function($scope, $http){

    $http.get('data.json').success(function(data, status, headers, config){

      $scope.names = data;

    }).error(function(){});

   $scope.startQuery = function(dasha){
       if(!dasha) {
           console.log("пусто");
           return false;
       }
       else{
          return dasha;
       }
    }

});