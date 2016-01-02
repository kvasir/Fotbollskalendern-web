'use strict';

/**
* @ngdoc function
* @name fotbollskalendernWebApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the fotbollskalendernWebApp
*/

angular.module('fotbollskalendernWebApp')
.controller('MainCtrl', function ($scope, $location, MatchService, Leagues, FilterService) {
	var gamesFromDay = function (date) {
		MatchService.getGamesByDate(date).then(function (result) {
			$scope.allDays.push({
				date: date,
				games: result
			});
		});
	};

	$scope.filters = FilterService.getLeagueFilters() || [];
	$scope.leagues = Leagues;

	$scope.allLeagues = Leagues;
	$scope.allDays = [];
	var days = 7;
	var today = new Date();
	$scope.gameIsPassed = (today.getHours() + 2);
	$scope.now = today.getHours();
	var options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	};

	for (var i = 0; i < days; i++) {
		gamesFromDay(today.toLocaleDateString('sv-SE', options));
		today.setDate(today.getDate() + 1);
	}

	$scope.matchInfo = function (game) {
		$location.path('match').search('url', game._links.self.href);
	};

	$scope.viewLeague = function (league) {
		var obj = Leagues.filter(function (obj) {
			return obj.name === league;
		})[0];
		$location.path('league').search('url', obj.url);
	};

	$scope.filterMatch = function (league) {
		if (FilterService.getLeagueFilters().indexOf(league) === -1) {
			FilterService.addLeague(league);
			$scope.filters.push(league);
		} else {
			FilterService.removeLeague(league);
			$scope.filters.splice($scope.filters.indexOf(league), 1);
		}
	};
});
