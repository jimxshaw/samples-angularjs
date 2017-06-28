(function () {
    'use strict';

    var app = angular.module('githubViewer', [
        // Angular modules

        // Custom modules

        // 3rd Party Modules

    ]);

    var MainController = function ($scope, $http) {

        $scope.title = "Github Viewer";

        var onComplete = function (response) {

            // This is essentially "https://api.github.com/users/" + username.
            $scope.user = response.data;

            // After successfully retrieving a user, issue another get request
            // to get that user's repos.
            $http.get($scope.user.repos_url)
                 .then(onReposComplete, onError);
        };

        var onError = function (reason) {
            console.log("Something went wrong!");
            $scope.error = reason;
        };

        var onReposComplete = function(response) {
            $scope.repos = response.data;
        };

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username)
                 .then(onComplete, onError);
        };

    };

    // For minification purposes, we pass in $ variables into the array so Angular
    // will be aware of them when it replaces them with minifided version. The last 
    // item in the array is the registered controller.
    app.controller("MainController", ["$scope", "$http", MainController]);


})();













