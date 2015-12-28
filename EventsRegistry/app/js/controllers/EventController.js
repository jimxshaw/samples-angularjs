'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        // $scope.snippet = '<span style="color:red;">Hello there</span>';
        // $scope.boolValue = false;
        // $scope.mystyle = {color:'red'};
        // $scope.myclass = "blue";
        // $scope.buttonDisabled = true; 

        $scope.event = {
            name: 'AngularJS Meetup',
            date: 'Jan 01 2015',
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
                    abstract: 'Fusce scelerisque lorem pretium fringilla maximus.',
                    upVoteCount: 0
                },
                {
                    name: 'What is Scope?',
                    creatorName: 'Jorah Mornmont',
                    duration: '.5 hr',
                    level: 'Novice',
                    abstract: 'Morbi ac enim sit amet lacus lobortis ultrices.',
                    upVoteCount: 0
                },
                {
                    name: 'All about Controllers',
                    creatorName: 'Samwell Tarly',
                    duration: '1 hr',
                    level: 'Intermediate',
                    abstract: 'Aenean venenatis luctus massa, ut molestie turpis luctus eget.',
                    upVoteCount: 0
                }
            ]
        };

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

