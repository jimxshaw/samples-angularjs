'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll) {

        $scope.sortorder = 'name'; 

        $scope.event = eventData.getEvent()
            .$promise
            .then(function(event) { $scope.event = event; console.log(event) }) // on success
            .catch(function(response) { console.log(response); }); // on failure

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

        $scope.scrollToSession = function() {
            $anchorScroll();
        };
    }
);

