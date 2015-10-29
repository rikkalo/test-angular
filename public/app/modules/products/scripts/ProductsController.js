"use strict"
angular.module('products')
    .controller('ProductsController', function($scope, $http) {
      $scope.update = function() {
    $http.get('/products').success(function(data) {
      $scope.products = data;
    });
  };

    $scope.update();


    //  $scope.products = [];
    //  function init() {
    //      $scope.products = [{
    //          title: 'Product1',
    //          description:'description1'
    //      }, {
    //          title: 'Product2',
    //          description:'description2'
    //      }];
    //  };
     //
    //  init();
    });
