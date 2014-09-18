'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fotbollskalendernWebApp
 */

angular.module('fotbollskalendernWebApp')
    .controller('MainCtrl', function ($scope, $location, matchService, Leagues, localStorageService) {
        var gamesFromDay = function (date) {
            matchService.getGamesByDate(date).then(function (result) {
                $scope.allDays.push({
                    date: date,
                    games: result
                });
            });
        };

        $scope.clearLocalStorage = function () {
            localStorageService.clearAll();
            console.log("Scope: " + $scope.filters);
            console.log("Local: " + localStorageService.get('savedFilters'))
        };

        $scope.filters = [];
        $scope.leagues = Leagues;

        if (localStorageService.get('savedFilter')) {
            console.log("hittade local storage");
            $scope.filters = localStorageService.get('savedFilter');
        }
        else {
            console.log("hittade ingen local storage");
            Leagues.forEach(function (league) {
                $scope.filters.push(league.name);
            });
            localStorageService.set('savedFilter', $scope.filters);
        }

        $scope.allLeagues = Leagues;
        $scope.allDays = [];

        var days = 7;
        var today = new Date();
        $scope.gameIsPassed = (today.getHours() + 2);
        $scope.now = today.getHours();
        console.log("NOW: " + $scope.now);
        console.log("PASSED: " + $scope.gameIsPassed);
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

        $scope.filterMatch = function (liga) {
            if ($scope.filters.indexOf(liga) != -1)
                $scope.filters.splice($scope.filters.indexOf(liga), 1);
            else
                $scope.filters.push(liga);
            console.log("skriver över local storage med " + $scope.filters);
            localStorageService.set('savedFilter', $scope.filters);
        };
    });
