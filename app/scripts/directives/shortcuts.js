'use strict';

angular.module('fotbollskalendernWebApp')
	.directive('shortcuts', function () {
		return {
			templateUrl: 'scripts/directives/shortcuts.html',
			restrict: 'E'
		};
	});
