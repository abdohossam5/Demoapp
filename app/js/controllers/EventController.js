'use strict';
eventsApp.controller('EventController', function ($scope, EventData) {
    $scope.sortOption = "-votecount";
     EventData.getEvent(function(event){
         $scope.event = event;
    });



    $scope.sessionUpVote = function (session) {
        console.log("function trigerred");
        session.votecount++;
    }
    $scope.sessionDownVote = function (session) {
        session.votecount--;
    }
});