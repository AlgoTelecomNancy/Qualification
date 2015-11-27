(function() {
    'use strict';

    angular.module('qualificationApp')
        .controller('mainController', function($scope) {

          var team1 = {name:'team1', 'victory':4,'defeats':2, id:0};
          var team2 = {name:'team2', 'victory':2,'defeats':4, id:1};
          var id=2;
          var i;
          var j;

          $scope.teams = [team1, team2];
          $scope.plays = [];
          $scope.params = {};
            $scope.params.winner = 3;
            $scope.params.equal = 1;
          console.log($scope);

          $scope.addPlayer = function(name) {
            var newTeam = {id:id, name:name, victory:0, defeats:0};
            for(i=0;i<$scope.teams.length;i++) {
              $scope.plays.push({team1:$scope.teams[i], team2:newTeam});
            }

            $scope.teams.push(newTeam);
            id++;
          };

          $scope.removePlayer = function(team) {
            for(i=0;i<$scope.teams.length;i++) {
              if($scope.teams[i].id == team.id) {
                $scope.teams.splice(i, 1);
                break;
              }
            }
            for(i=0;i<$scope.plays.length;i++) {
              if($scope.plays[i].team1.id == team.id || $scope.plays[i].team2.id == team.id) {
                $scope.plays.splice(i,1);
              }
            }
          };

          $scope.getPoints = function(team) {
            return team.victory*$scope.params.winner;
          };

          $scope.setWinner = function(play, winner) {
            play.isPlayed = true;
            play.winner = winner;

            play.winner.victory++;
            if(play.team1.id == play.winner.id)
              play.team2.defeats++;
            else
              play.team1.defeats++;
          };
          $scope.cancel = function(play) {
            play.isPlayed = false;

            play.winner.victory--;
            if(play.team1.id == play.winner.id)
              play.team2.defeats--;
            else
              play.team1.defeats--;

            play.winner = {};
          }

          $scope.resetPlay = function() {
              for(i=0;i<$scope.teams.length;i++) {
                for(j=i+1;j<$scope.teams.length;j++) {
                  $scope.plays.push({team1:$scope.teams[i], team2:$scope.teams[j]});
                }
              }
          };
          $scope.resetPlay();
        });
})();
