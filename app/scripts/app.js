'use strict';

/**
 * @ngdoc overview
 * @name fotbollskalendernWebApp
 * @description
 * # fotbollskalendernWebApp
 *
 * Main module of the application.
 */
angular
  .module('fotbollskalendernWebApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
	.value()
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider
      .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
	  .when('/match', {
	      templateUrl: 'views/match.html',
	      controller: 'MatchCtrl'
	  })
      .otherwise({
          redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });
