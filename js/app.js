angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
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
            .state('about', {
                url:'/about',
                templateUrl: "../views/about.html",
                controller:"game-controller"
              })
              $urlRouterProvider
    .otherwise('/');

});
