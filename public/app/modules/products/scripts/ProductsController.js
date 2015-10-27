"use strict"
angular.module('products')
    .controller('ProductsController', function($scope) {
      var self = this;

     $scope.products = [];
     function init() {
         $scope.products = [{
             title: 'Product1',
             description:'description1'
         }, {
             title: 'Product2',
             description:'description2'
         }];
     };

     init();
    });
