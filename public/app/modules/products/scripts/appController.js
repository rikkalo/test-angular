"use strict"
angular.module('products')
	.controller('AppController', function ($scope, $state) {
        $state.go('products')
	});
