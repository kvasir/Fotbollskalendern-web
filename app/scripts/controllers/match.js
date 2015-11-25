'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MatchctrlCtrl
 * @description
 * # MatchctrlCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
  .controller('MatchCtrl', function ($scope, $location, MatchService) {
      $scope.match = {};
      $scope.match.homeTeamName = $location.search().homeTeamName;
      $scope.match.awayTeamName = $location.search().awayTeamName;
      $scope.match.date = $location.search().date;

      $scope.teamInfo = function (team) {
          $location.path('team').search('teamName', team);
      };

  });
