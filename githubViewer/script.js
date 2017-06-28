(function () {
    'use strict';

    var app = angular.module('githubViewer', [
        // Angular modules

        // Custom modules

        // 3rd Party Modules

    ]);

    var MainController = function ($scope, $http) {

        $scope.title = "Github Viewer";

        var onComplete = function(response) {
            $scope.user = response.data;
        };

        var onError = function(reason) {
            console.log("Something went wrong!");
            $scope.error = reason;
        };


        $http.get("https://api.github.com/users/jimxshaw")
             .then(onComplete, onError);

    };

    // For minification purposes, we pass in $ variables into the array so Angular
    // will be aware of them when it replaces them with minifided version. The last 
    // item in the array is the registered controller.
    app.controller("MainController", ["$scope", "$http", MainController]);


})();













