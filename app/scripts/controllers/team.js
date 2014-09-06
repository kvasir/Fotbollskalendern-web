angular.module('fotbollskalendernWebApp')
    .controller('TeamCtrl', function ($scope, $location, teamService) {
        $scope.team = $location.search().teamName;
        $scope.games = {};
        teamService.getGamesFromTeam($scope.team).then(function (data) {
            $scope.games = data;
        });
        $scope.matchInfo = function (game) {
            console.log(game.id);
            $location.path('match').search('matchId', game.id);
        };
    });

