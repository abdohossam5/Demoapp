'use strict';
eventsApp.controller('EventController', function ($scope) {
    $scope.event = {
        name: "First Event",
        date: "9/9/2016",
        time: "10.30 am",
        Location: {
            place: 'google HQ',
            address: '101 mountain view',
            city: 'California',
        },
        imgurl: "img/angularjs-logo.png",
        sessions: [{
            name: 'first session',
            creatorname: "John doe",
            duration: "45 mins",
            votecount: 0
        },
            {
                name: 'second session',
                creatorname: "adam joe",
                duration: "60 mins",
                votecount: 0
            },
            {
                name: 'third session',
                creatorname: "John smith",
                duration: "90 mins",
                votecount: 0
            }]
    }
    $scope.sessionUpVote = function(session){
        console.log("function trigerred");
        session.votecount++;
    }
    $scope.sessionDownVote = function(session){
        session.votecount--;
    }
});