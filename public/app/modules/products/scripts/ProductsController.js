"use strict"
angular.module('products')
    .controller('productsController', function($scope, $state, $modal, Products) {
        Products.getList().success(function(data) {
            $scope.products = data;
        });
    });
