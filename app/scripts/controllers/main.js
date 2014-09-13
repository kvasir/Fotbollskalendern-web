'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fotbollskalendernWebApp
 */

angular.module('fotbollskalendernWebApp')
    .controller('MainCtrl', function ($scope, $location, matchService, Leagues) {
        var gamesFromDay = function (date) {
            matchService.getGamesByDate(date).then(function (result) {
                $scope.allDays.push({
                    date: date,
                    games: result
                });
            });
        };
        $scope.allLeagues = Leagues;
        $scope.allDays = [];
        var days = 30;
        var today = new Date();
        var options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };
        for (var i = 0; i < days; i++) {
            gamesFromDay(today.toLocaleDateString('sv-SE', options));
            today.setDate(today.getDate() + 1);
        };
        $scope.matchInfo = function (game) {
            console.log(game.id);
            $location.path('match').search('matchId', game.id);
        };
        $scope.sortBy = 'time';
    });
