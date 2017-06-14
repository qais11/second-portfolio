angular.module('myApp')
.controller('game-controller',function($scope, $state ,$window , gameService ){
      $scope.go = function(){
        $window.location.reload();
        $state.go('welcome');
      }
      // $scope.goGame = function(){
      //     $window.location.reload();
      //     $state.go('game')
      // }
})
