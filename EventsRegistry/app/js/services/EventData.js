eventsApp.factory('eventData', function($resource) {

    var resource = $resource('/data/event/:id', { id:'@id' }, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});

    return {
        getEvent: function() {
            // Angular's resource services takes in the format of the url
            // and a default value that's used in the route.
            return resource.get({ id:1 });
        },
        save: function(event) {
            event.id = 999;
            return resource.save(event);
        }
    };
});