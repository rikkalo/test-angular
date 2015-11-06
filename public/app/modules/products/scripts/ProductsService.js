"use strict"
angular.module('products')
    .factory("Products", ['$http', function($http) {

        var Products = function() {

        };

        angular.extend(Products.prototype, {
            list: [],
            getList: function() {
                var that = this;
                return $http.get('/products/').success(function(data) {
                    that.list = data;
                });
            }
        });

        return new Products;
    }]);
