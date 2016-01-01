'use strict';

angular.module('fotbollskalendernWebApp')
	.directive('leagueFilter', function () {
		return {
			templateUrl: 'scripts/directives/league-filter.html',
			restrict: 'E'
		};
	});
