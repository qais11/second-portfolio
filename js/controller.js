angular.module('myApp')
.controller('game-controller',function($scope, $state ,$window , gameService ){
      $scope.go = function(){
        $state.go('welcome');
        $window.location.reload();
      }
      $scope.goGame = function(){
          $window.location.reload();
          $state.go('game')
      }
})
