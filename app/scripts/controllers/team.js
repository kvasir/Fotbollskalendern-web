'use strict';

angular.module('fotbollskalendernWebApp')
.controller('TeamCtrl', function ($scope, $location, DataService) {
	var url = $location.search().url;
	$scope.games = {};
	var teamInformation = {};

	DataService.getDataFromUrl(url).then(function (data) {
		teamInformation = data;
		DataService.getDataFromUrl(teamInformation._links.fixtures.href).then(function (games) {
			$scope.games = games.fixtures;
			$scope.teamInformation = teamInformation;
		});
	});

	$scope.matchInfo = function (game) {
		$location.path('match').search('url', game._links.self.href);
	};
});
