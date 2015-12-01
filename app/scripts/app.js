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
  .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .when('/calendar', {
          templateUrl: 'views/calendar.html',
          controller: 'CalendarCtrl'
      })
	  .when('/match', {
	      templateUrl: 'views/match.html',
	      controller: 'MatchCtrl'
	  })
	  .when('/team', {
	      templateUrl: 'views/team.html',
	      controller: 'TeamCtrl'
	  })
      .when('/about', {
          templateUrl: 'views/about.html'
      })
      .when('/league', {
          templateUrl: 'views/league.html',
          controller: 'LeagueCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });
      //$locationProvider.html5Mode(true);
  })
  .filter('futureDates', function () {
      return function (orders) {

          var filteredList = [];
          var today = new Date().getTime();
          for (var i = 0; i < orders.length; i++) {

              var date = new Date(orders[i].date).getTime();

              if (today < date) {
                  filteredList.push(orders[i]);
              }
          }
          return filteredList;
      };
  })
  .filter('filterArray', function () {
      return function (matches, filters) {

          var filteredList = [];
          for (var i = 0; i < matches.length; i++) {
              if (filters.indexOf(matches[i].league) !== -1) {
                  filteredList.push(matches[i]);
              }
          }
          return filteredList;
      };
  })
  .filter('toSwedishWeekday', function () {
      return function (weekday) {

          switch (weekday) {
              case 'Monday':
                  return 'Måndag';
              case 'Thuesday':
                  return 'Tisdag';
              case 'Wednesday':
                  return 'Onsdag';
              case 'Thursday':
                  return 'Torsdag';
              case 'Friday':
                  return 'Fredag';
              case 'Saturday':
                  return 'Lördag';
              case 'Sunday':
                  return 'Söndag';
          }
      };
  });
