'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
  .controller('MainCtrl', function ($scope, $location, MatchInfo) {
    $scope.games = MatchInfo;

		$scope.matchInfo = function(game){
			console.log(game.id);
			$location.path("match").search('matchId', game.id);
		};

		$scope.sortBy = 'time';
  });
