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
      var url = $location.search().url;
      MatchService.getGameByUrl(url).then(function(data){
          console.log(data);
         $scope.match = data.fixture;
      });

      $scope.teamInfo = function (team) {
          $location.path('team').search('teamName', team);
      };

  });
