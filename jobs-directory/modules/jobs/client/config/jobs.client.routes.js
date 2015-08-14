'use strict';

// Setting up route
angular.module('jobs').config(['$stateProvider',
  function ($stateProvider) {
    // Jobs state routing
    $stateProvider
      .state('jobs', {
        abstract: true,
        url: '/jobs',
        template: '<ui-view/>',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('jobs.list', {
        url: '',
        templateUrl: 'modules/jobs/views/list-jobs.client.view.html'
      })
      .state('jobs.create', {
        url: '/create',
        templateUrl: 'modules/jobs/views/create-job.client.view.html'
      })
      .state('jobs.view', {
        url: '/:jobId',
        templateUrl: 'modules/jobs/views/view-job.client.view.html'
      })
      .state('jobs.edit', {
        url: '/:jobId/edit',
        templateUrl: 'modules/jobs/views/edit-job.client.view.html'
      });
  }
]);
