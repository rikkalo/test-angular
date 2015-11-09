"use strict"
angular.module('comments')
    .controller('commentsController', function($scope, $state, $modal, Comments) {
        Comments.getList().success(function(data) {
            $scope.comments = data;
        });
        $scope.addedComment = function(comment) {
          $scope.comments.push(
            {
                userName: comment.userName,
                date: formateDate(new Date()),
                text: comment.text
            }
          );
        }

        function formateDate(date) {
          return date.getDate() + ':' + (date.getMonth() + 1) + ':' +  date.getFullYear() ;
        }
    });
