eventsApp.factory('eventData', function($resource) {
  return {
    getEvent: function() {
        // Angular's resource services takes in the format of the url
        // and a default value that's used in the route.
        return $resource('/data/event/:id', { id:'@id' }).get({ id:1 });

        
    }
  };
});