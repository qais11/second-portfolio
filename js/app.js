angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider,$templateCache, $urlRouterProvider) {
        $stateProvider
            .state('welcome', {
                url:'/',
                templateUrl: "../views/welcome.html",
                controller:"game-controller"
              })
            .state('game', {
                url:'/game',
                templateUrl: "../views/game.html",
                controller:"game-controller"
              })
              $urlRouterProvider
    .otherwise('/');

});
