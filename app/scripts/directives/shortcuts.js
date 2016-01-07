'use strict';

angular.module('fotbollskalendernWebApp')
.directive('shortcuts', function ($location, Leagues, localStorageService, FavouritesService) {
	return {
		templateUrl: 'views/shortcuts.html',
		restrict: 'E',
		link: function ($scope) {
			if (localStorageService.get('favourites') === null) {
				localStorageService.set('favourites', []);
			}
			$scope.leagues = Leagues;
			$scope.favourites = FavouritesService.favourites;

			$scope.viewMatch = function (url) {
				$location.path('team').search('url', url);
			};

			$scope.viewLeague = function (league) {
				var obj = Leagues.filter(function (obj) {
					return obj.name === league;
				})[0];
				$location.path('league').search('url', obj.url);
			};
		}
	};
});
