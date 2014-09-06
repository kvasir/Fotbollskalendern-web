'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fotbollskalendernWebApp
 */

angular.module('fotbollskalendernWebApp')
    .controller('MainCtrl', function ($scope, $location, matchService) {
        var gamesFromDay = function (date) {
            matchService.getGames(date).then(function (result) {
                $scope.allDays.push({
                    date: date,
                    games: result
                });
            });
        };
        $scope.allDays = [];
        gamesFromDay("2014-09-01");
        gamesFromDay("2014-09-02");
        gamesFromDay("2014-09-03");
        gamesFromDay("2014-09-04");
        $scope.matchInfo = function (game) {
            console.log(game.id);
            $location.path('match').search('matchId', game.id);
        };
        $scope.sortBy = 'time';
    });
