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
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Mastering Directives',
                    creatorName: 'Tyrion Lannister',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'Fusce scelerisque lorem pretium fringilla maximus.'
                },
                {
                    name: 'What is Scope?',
                    creatorName: 'Jorah Mornmont',
                    duration: '.5 hr',
                    level: 'Novice',
                    abstract: 'Morbi ac enim sit amet lacus lobortis ultrices.'
                },
                {
                    name: 'All about Controllers',
                    creatorName: 'Samwell Tarly',
                    duration: '1 hr',
                    level: 'Intermediate',
                    abstract: 'Aenean venenatis luctus massa, ut molestie turpis luctus eget.'
                }
            ]
        };
    }
    );

