angular.module('fotbollskalendernWebApp').factory('matchService', function ($http, $q) {
    var allLeagues = [
        {
            name: 'Premier league',
            url: 'mock_data/premierleague.json'
        },
        {
            name: 'La liga',
            url: 'mock_data/laliga.json'
        },
        {
            name: 'Bundesliga',
            url: 'mock_data/bundesliga.json'
        },
        {
            name: 'Serie A',
            url: 'mock_data/seriea.json'
        },
        {
            name: 'Franskaligan',
            url: 'mock_data/ligue1.json'
        },
        {
            name: 'Hollänskaligan',
            url: 'mock_data/holland.json'
        },
    ];
    var requests = [];
    allLeagues.forEach(function (league) {
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
                                league: allLeagues[iterator].name
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
        },
        allLeagues: allLeagues
    }
});