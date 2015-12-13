// create a function called booksController that utilizes
// the $scope. Then we associate this function with our module
// using the myModule.controller function.

(function() { 
  var booksController = function($scope) {
    $scope.message = "Hello from booksController";

    // if the controller has a property which does not utilize the scope then 
    // it can be accessed from the view by using controller as syntax.
    this.greeting = "This is a greeting message using controller as syntax";
  }
  angular.module('myAngularApplication').controller('booksController', ["$scope", booksController]); 
}());

// myModule.controller('booksController', booksController);