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
    'ui.bootstrap',
    'LocalStorageModule'
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
	  .when('/team', {
	      templateUrl: 'views/team.html',
	      controller: 'TeamCtrl'
	  })
      .otherwise({
          redirectTo: '/'
      });
      //$locationProvider.html5Mode(true);
  })
  .filter('futureDates', function () {
      return function (orders) {

          var filtered_list = [];
          var today = new Date().getTime();
          for (var i = 0; i < orders.length; i++) {

              var date = new Date(orders[i].date).getTime();

              if (today < date) {
                  filtered_list.push(orders[i]);
              }
          }
          return filtered_list;
      }
  })
  .filter('filterArray', function () {
      return function (matches, filters) {

          var filtered_list = [];
          for (var i = 0; i < matches.length; i++) {
              if (filters.indexOf(matches[i].league) != -1) {
                  filtered_list.push(matches[i]);
              }
          }
          return filtered_list;
      }
  });
