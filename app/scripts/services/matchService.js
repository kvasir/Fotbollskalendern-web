angular.module('fotbollskalendernWebApp').factory('matchService', function ($http, $q) {
    var all = $q.all([
        $http.get("mock_data/premierleague.json"),
        $http.get("mock_data/bundesliga.json"),
        $http.get("mock_data/holland.json"),
        $http.get("mock_data/laliga.json"),
        $http.get("mock_data/seriea.json"),
        $http.get("mock_data/ligue1.json")
    ]);

    var leagues = ['Premier league', 'Bundesliga', 'Hollänskaligan', 'La liga', 'Serie A', 'Franskaligan'];

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
                                league: leagues[iterator]
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