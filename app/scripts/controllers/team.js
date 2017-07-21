'use strict';

angular.module('fotbollskalendernWebApp').controller('TeamCtrl', function($scope, $location, DataService, FavouritesService) {
  var url = $location.search().url;
  $scope.url = url;
  $scope.games = {};
  $scope.isFavourite = false;
  $scope.playerSort = 'jerseyNumber';
  $scope.currentTab = 'matches';

  $scope.updatePlayerSort = function (newSort) {
    if(newSort){
      $scope.playerSort = newSort;
    }
  }

  $scope.updateTabs = function(tab) {
    if(tab) {
      $scope.currentTab = tab;
    }
  }

  $scope.players = [];
  var teamInformation = {};

  DataService.getDataFromUrl(url + '/players').then(function(data){
    console.log(data.players);
    if(data.players) {
      $scope.players = data.players;
    }
  });

  DataService.getDataFromUrl(url).then(function(data) {
    teamInformation = data;
    DataService.getDataFromUrl(teamInformation._links.fixtures.href).then(function(games) {
      $scope.games = games.fixtures;
      $scope.teamInformation = teamInformation;
      $scope.isFavourite = FavouritesService.isFavourite(teamInformation.name);
    });
  });

  $scope.addToFavourites = function(teamName, url) {
    $scope.isFavourite = !$scope.isFavourite;
    FavouritesService.toggleFavourite(teamName, url);
  };

  $scope.matchInfo = function(game) {
    $location.path('match').search('url', game._links.self.href);
  };
});
