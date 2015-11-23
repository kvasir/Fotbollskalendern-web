'use strict';

angular.module('fotbollskalendernWebApp')
    .factory('teamService', function ($http, $q, Leagues) {
				var apiKey = '2ecca4360cd746d5a4808ba2b8e1fa96';
				var requests = [];
				Leagues.forEach(function (league) {
						requests.push($http.get(league.url, {
							headers: { 'X-Auth-Token': apiKey },
						}));
				});
				var all = $q.all(requests);
        return {
            getGamesFromTeam: function (teamName) {
                var games = [];
                var gameResult = $q.defer();
                all.then(function (results) {
                    results.forEach(function (result) {
                        var allGames = result.data;
                        allGames.forEach(function(game){
                          if (game.homeTeamName === teamName || game.awayTeamName === teamName) {
                              games.push(game);
                          }
                      });
                     });
                    gameResult.resolve(games);
                });

                return gameResult.promise;
            }
        };
    });
