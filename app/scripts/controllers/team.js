'use strict';

angular.module('fotbollskalendernWebApp')
    .controller('TeamCtrl', function ($scope, $location, TeamService) {
        var url = $location.search().url;
        $scope.games = {};
        var teamInformation = {};

        TeamService.getTeamInformation(url).then(function(data){
            teamInformation = data;
            TeamService.getGamesFromUrl(teamInformation._links.fixtures.href).then(function(games){
                $scope.games = games.fixtures;
                $scope.teamInformation = teamInformation;
            });
        });

        $scope.matchInfo = function (game) {
            $location.path('match').search('url', game._links.self.href);
        };
    });
