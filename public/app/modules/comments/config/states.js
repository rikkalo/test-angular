"use strict"
angular.module('comments')
   .config(function estateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('comments', {
                url: '/comments',
                views: {
                  "navbar": {
                      templateUrl: 'app/modules/products/views/navbar.html'
                  },
                    "comments": {
                        controller: 'commentsController',
                        templateUrl: 'app/modules/comments/views/comments.html'
                    }
                }
            })
    });
