
angular.module('fotbollskalendernWebApp').factory('matchService', function ($http, $q, Leagues) {
    var requests = [];
    Leagues.forEach(function (league) {
        requests.push($http.get(league.url));
    });
    var all = $q.all(requests);

    return {
        getGamesByDate: function (date) {
            var games = [];
            var gameResult = $q.defer();
            all.then(function (results) {
                results.forEach(function (result, index) {
                    var allGames = result.data;
                    var iterator = index;
                    allGames.forEach(function (game) {
                        if (game.date.indexOf(date) === 0)
                            games.push({
                                game: game,
                                league: Leagues[iterator].name
                            });
                    });
                });
                gameResult.resolve(games);
            });

            return gameResult.promise;
        },
        getGameById: function (id) {
            var target;
            var gameResult = $q.defer();
            all.then(function (results) {
                results.forEach(function (result) {
                    var allGames = result.data;
                    allGames.forEach(function (game) {
                        if (game.id === id)
                            target = game;
                    });
                });
                gameResult.resolve(target);
            });

            return gameResult.promise;
        }
    }
});