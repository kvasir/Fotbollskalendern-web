'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MatchctrlCtrl
 * @description
 * # MatchctrlCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
  .controller('MatchCtrl', function ($scope, matchService, $location) {
      $scope.id = $location.search().matchId;
      $scope.match = {};
      matchService.getGameById($scope.id).then(function (game) {
          $scope.match = game;
      });
  });
