'use strict';

angular.module('fotbollskalendernWebApp')
.directive('shortcuts', function ($location, Leagues) {
	return {
		templateUrl: 'views/shortcuts.html',
		restrict: 'E',
		link: function ($scope) {
			$scope.leagues = Leagues;
			$scope.viewLeague = function (league) {
				var obj = Leagues.filter(function (obj) {
					return obj.name === league;
				})[0];
				$location.path('league').search('url', obj.url);
			};
		}
	};
});
