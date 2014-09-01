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
			homeTeam: 'Jps-dreamteam',
			awayTeam: 'Martins heroes',
			time: '21:00',
			league: 'Golden division'
		},
		{
			id: 2,
			homeTeam: 'Marcus pojkar',
			awayTeam: 'Jerkers xD-team',
			time: '17:00',
			league: 'fikaligan'
		},
		{
			id: 3,
			homeTeam: 'The craigesters',
			awayTeam: 'Core service',
			time: '19:00',
			league: 'Superettan'
		},
		{
			id: 4,
			homeTeam: 'Barcelona',
			awayTeam: 'Real Madrid',
			time: '06:00',
			league: 'Superettan'
		},
		{
			id: 5,
			homeTeam: 'Podlaget',
			awayTeam: 'Arsenal',
			time: '09:00',
			league: 'Superettan'
		},
		{
			id: 6,
			homeTeam: 'Dream Team',
			awayTeam: 'Complexity',
			time: '19:00',
			league: 'Golden division'
		},
		{
			id: 7,
			homeTeam: 'Djurgården',
			awayTeam: 'Lycksele IF',
			time: '19:00',
			league: 'Golden division'
		},
		{
			id: 8,
			homeTeam: 'Tanterna plan 5',
			awayTeam: 'Supportcenter',
			time: '19:00',
			league: 'Fikaligan'
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
