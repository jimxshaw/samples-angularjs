eventsApp.factory('eventData', function($http, $log) {
  return {
    getEvent: function(successcb) {
        $http({method: 'GET', url: '/data/event/1'}).
            success(function(data, status, headers, config) {
                successcb(data);
            }).
            error(function(data, status, headers, config) {
                $log.warn(data, status, headers(), config);
            });

        // name: 'AngularJS Meetup',
        // date: new Date(),
        // time: '6:00 pm',
        // location: {
        //     address: 'Google HQ',
        //     city: 'Mountain View',
        //     province: 'CA'
        // },
        // imageUrl: '/img/angularjs-logo.png',
        // sessions: [
        //     {
        //         name: 'Mastering Directives',
        //         creatorName: 'Tyrion Lannister',
        //         duration: 3,
        //         level: 'Advanced',
        //         abstract: 'Fusce scelerisque lorem pretium fringilla maximus.',
        //         upVoteCount: 0
        //     },
        //     {
        //         name: 'What is Scope?',
        //         creatorName: 'Jorah Mornmont',
        //         duration: 1,
        //         level: 'Novice',
        //         abstract: 'Morbi ac enim sit amet lacus lobortis ultrices.',
        //         upVoteCount: 0
        //     },
        //     {
        //         name: 'All about Controllers',
        //         creatorName: 'Samwell Tarly',
        //         duration: 2,
        //         level: 'Intermediate',
        //         abstract: 'Aenean venenatis luctus massa, ut molestie turpis luctus eget.',
        //         upVoteCount: 0
        //     }
        // ]
    }
  };
});