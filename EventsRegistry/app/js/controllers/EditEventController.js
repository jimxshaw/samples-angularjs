'use script';

eventsApp.controller('EditEventController',
  function EditEventController($scope) {
    $scope.saveEvent = function(event, newEventForm) {
      if (newEventForm.$valid) {
        console.log(newEventForm);
        window.alert('You event, ' + event.name + ', has been saved');
        window.location = "/EventDetails.html";
      }
    };

    $scope.cancelEdit = function() {
      window.location = "/EventDetails.html";
    };
  }
);