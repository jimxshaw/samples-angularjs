'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'AngularJS Meetup',
            date: '1/1/2015',
            time: '6:00 pm',
            location: {
                address: 'Google HQ',
                city: 'Mountain View',
                province: 'CA'
            }
        };
    }
);

