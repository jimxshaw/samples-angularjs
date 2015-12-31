'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {

        // $scope.snippet = '<span style="color:red;">Hello there</span>';
        // $scope.boolValue = false;
        // $scope.mystyle = {color:'red'};
        // $scope.myclass = "blue";
        // $scope.buttonDisabled = true;

        $scope.sortorder = 'name'; 

        eventData.getEvent()
            .success(function(event) { $scope.event = event; })
            .error(function(data, status, headers, config) {
                $log.warn(data, status, headers(), config);
            });

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

