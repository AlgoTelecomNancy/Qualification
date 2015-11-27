(function() {
    'use strict';

    angular
        .module('qualificationApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
          $locationProvider.html5Mode(true);

          $stateProvider
          .state('app', {
            url: '/app',
            abstract: true,
            template: '<ui-view/>',
            controller: 'mainController',
          })
          .state('app.teams', {
            url: '/teams',
            templateUrl: 'src/view/teams.html'
          })
          .state('app.play', {
            url: '/play',
            templateUrl: 'src/view/play.html'
          })
          .state('app.params', {
            url: '/params',
            templateUrl: 'src/view/params.html'
          });

          // if none of the above states are matched, use this as the fallback
          $urlRouterProvider.otherwise('/app/teams');
        });
})();
