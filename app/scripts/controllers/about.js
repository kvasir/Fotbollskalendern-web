'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
    .controller('AboutCtrl', function ($scope, MatchInfo, $location) {
        $scope.games = MatchInfo;
        $scope.sortBy = 'time';

        $scope.matchInfo = function(game){
		    console.log(game.id);
            $location.path('match').search('matchId', game.id);
        };
    });
