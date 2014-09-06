angular.module('fotbollskalendernWebApp')
    .factory('teamService', function ($http, $q) {
        var all = $q.all([
            $http.get("mock_data/premierleague.json"),
            $http.get("mock_data/bundesliga.json"),
            $http.get("mock_data/holland.json"),
            $http.get("mock_data/laliga.json"),
            $http.get("mock_data/seriea.json"),
            $http.get("mock_data/ligue1.json")
        ]);
        return {
            getGamesFromTeam: function (teamName) {
                var games = [];
                var gameResult = $q.defer();
                all.then(function (results) {
                    results.forEach(function (result) {
                        var allGames = result.data;
                        allGames.forEach(function(game){
                          if (game.homeTeam === teamName || game.awayTeam === teamName) games.push(game);
                        })
                     });
                    gameResult.resolve(games);
                });

                return gameResult.promise;
            }
        }
    });