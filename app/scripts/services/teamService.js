angular.module('fotbollskalendernWebApp')
    .factory('teamService', function ($http, $q) {
        var data = $q.defer();
        $http.get("mock_data/matchInfo.json").then(function (result) {
            data.resolve(result.data);
        });
        return {
            getGamesFromTeam: function (teamName) {
                var games = [];
                var gameResult = $q.defer();
                data.promise.then(function (result) {
                    result.forEach(function (game) {
                        if (game.homeTeam === teamName || game.awayTeam === teamName) games.push(game);
                    });
                    gameResult.resolve(games);
                });

                return gameResult.promise;
            }
        }
    });