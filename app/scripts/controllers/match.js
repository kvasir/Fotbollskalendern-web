'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MatchctrlCtrl
 * @description
 * # MatchctrlCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
  .controller('MatchCtrl', function ($scope, MatchInfo, $location) {
    $scope.id = $location.search().matchId;
		$scope.match = MatchInfo[$scope.id - 1];
  });
