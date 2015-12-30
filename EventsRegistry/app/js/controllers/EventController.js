'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        // $scope.snippet = '<span style="color:red;">Hello there</span>';
        // $scope.boolValue = false;
        // $scope.mystyle = {color:'red'};
        // $scope.myclass = "blue";
        // $scope.buttonDisabled = true;

        $scope.sortorder = 'name'; 

        $scope.event = eventData.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            if (session.upVoteCount > 0) {
                session.upVoteCount--;    
            }
            else {
                session.upVoteCount = 0;
            }   
        };


    }
);

