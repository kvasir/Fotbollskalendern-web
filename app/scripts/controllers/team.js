angular.module('fotbollskalendernWebApp')
    .controller('TeamCtrl', function ($scope, $location, teamService) {
        $scope.team = $location.search().teamName;
        $scope.games = {};
        teamService.getGamesFromTeam($scope.team).then(function (data) {
            $scope.games = data;
        });
    });

