"use strict"
angular.module('comments')
    .controller('commentsController', function($scope, $state, $modal, Comments) {
        Comments.getList().success(function(data) {
            $scope.comments = data;
        });
    });
