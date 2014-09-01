'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
  .controller('AboutCtrl', function ($scope, MatchInfo) {
      $scope.games = MatchInfo;
      $scope.sortBy = 'time';
  });
