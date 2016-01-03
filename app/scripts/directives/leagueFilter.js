'use strict';

angular.module('fotbollskalendernWebApp')
	.directive('leagueFilter', function () {
		return {
			templateUrl: 'views/league-filter.html',
			restrict: 'E'
		};
	});
