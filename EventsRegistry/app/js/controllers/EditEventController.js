'use script';

eventsApp.controller('EditEventController',
  function EditEventController($scope) {
    $scope.saveEvent = function(event) {
      window.alert('You event, ' + event.name + ', has been saved');
      window.location = "/EventDetails.html";
    };

    $scope.cancelEdit = function() {
      window.location = "/EventDetails.html";
    };
  }
);