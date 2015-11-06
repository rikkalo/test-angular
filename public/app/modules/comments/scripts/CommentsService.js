"use strict"
angular.module('comments')
    .factory("Comments", ['$http', function($http) {

        var Comments = function() {

        };

        angular.extend(Comments.prototype, {
            list: [],
            getList: function() {
                var that = this;
                return $http.get('/comments/').success(function(data) {
                    that.list = data;
                });
            }
        });

        return new Comments;
    }]);
