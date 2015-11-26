'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
    .controller('CalendarCtrl', function ($scope, MatchService, $location, Leagues) {
        var gamesFromDay = function (date) {
            MatchService.getGamesByDate(date).then(function (result) {
                $scope.allDays.push({
                    date: date,
                    games: result
                });
            });
        };
        $scope.allLeagues = Leagues;
        $scope.leagues = Leagues;

        $scope.filters = [];
        Leagues.forEach(function (league) {
            $scope.filters.push(league.name);
        });

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
        }
        $scope.matchInfo = function (game) {
            $location.path('match').search('matchId', game.id);
        };
        $scope.sortBy = 'time';

        $scope.filterMatch = function (liga) {
            if ($scope.filters.indexOf(liga) !== -1){
                $scope.filters.splice($scope.filters.indexOf(liga), 1);
            }
            else {
                $scope.filters.push(liga);
            }

        };
    });