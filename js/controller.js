angular.module('myApp')
.controller('game-controller',function($scope, $state , gameService ){
 // gameService.play();
      $scope.go = function(){
        $state.go('welcome')
      }
})
