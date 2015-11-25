'use strict';

angular.module('fotbollskalendernWebApp')
    .controller('TeamCtrl', function ($scope, $location, TeamService) {
        var url = $location.search().url;
        $scope.games = {};
        teamService.getGamesFromTeam($scope.team).then(function (data) {
            $scope.games = data;
        });
        $scope.matchInfo = function (game) {
            $location.path('match').search('matchId', game.id);
        };
    });
