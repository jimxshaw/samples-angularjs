// create a function called booksController that utilizes
// the $scope. Then we associate this function with our module
// using the myModule.controller function.

(function() { 
  var booksController = function($scope) {
    $scope.message = "Hello from booksController";

    // if the controller has a property which does not utilize the scope then 
    // it can be accessed from the view by using controller as syntax.
    this.greeting = "This is a greeting message using controller as syntax";

    $scope.books = [];
    $scope.fetchBooks = function() {
      $scope.books = [
        {ID: 1, Title: "The Hobbit", Author: "JRR Tolkein", ISBN: "BEB37B382"},
        {ID: 2, Title: "Dune", Author: "Frank Herbert", ISBN: "467BKLJ3MN"},
        {ID: 3, Title: "The Catcher in the Rye", Author: "JD Salinger", ISBN: "LKD47382"},
        {ID: 4, Title: "Misery", Author: "Stephen King", ISBN: "J7N37HE"}
      ];
    };
  }
  angular.module('myAngularApplication').controller('booksController', ["$scope", booksController]); 
}());

// myModule.controller('booksController', booksController);