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
    'ngRoute'
  ])
	.value('MatchInfo', [
		{
			id: 1,
			homeTeam: "Jps-dreamteam",
			awayTeam: "Martins heroes",
			time: "21:00",
			league: "fikaligan"
		},
		{
			id: 2,
			homeTeam: "Marcus pojkar",
			awayTeam: "Jerkers xD-team",
			time: "17:00",
			league: "fikaligan"
		},
		{
			id: 3,
			homeTeam: "The craigesters",
			awayTeam: "Core service",
			time: "19:00",
			league: "fikaligan"
		}
	])
  .config(function ($routeProvider) {
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
  });
