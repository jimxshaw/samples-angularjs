eventsApp.factory('eventData', function($http) {
  return {
    getEvent: function() {
        return $http({method: 'GET', url: '/data/event/1'});

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