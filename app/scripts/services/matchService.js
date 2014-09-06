angular.module('fotbollskalendernWebApp').factory('matchService', function ($http, $q) {
    var data = $q.defer();
    $http.get("mock_data/matchInfo.json").then(function (result) {
        data.resolve(result.data);
    });

    return {
        getGames: function (date) {
            var games = [];
            var gameResult = $q.defer();
            data.promise.then(function (result) {
                result.forEach(function (game) {
                    if (game.date === date) games.push(game);
                });
                gameResult.resolve(games);
            });

            return gameResult.promise;
        }
    }
});