'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fotbollskalendernWebApp
 */
 var day3 = [
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
	];
var day2 = [
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
	];
		angular.module('fotbollskalendernWebApp')
    .controller('AboutCtrl', function ($scope, MatchInfo, $location) {
        $scope.games = MatchInfo;
        $scope.sortBy = 'time';

        $scope.nextGames = day2;
        $scope.nextNextGames = day3;

        $scope.matchInfo = function (game) {
            console.log(game.id);
            $location.path('match').search('matchId', game.id);
        };
    });
