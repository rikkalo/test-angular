 "use strict"
 angular.module('products')
    .run(function($httpBackend) {

        var products = [{
            id: 1,
            name: 'title1',
            price: 10
        }, {
            id: 2,
            name: 'title2',
            price: 21
        }, {
            id: 3,
            name: 'title3',
            price: 15
        }];

       $httpBackend.whenGET(/\.html/).passThrough();

       $httpBackend.whenGET('/products/').respond(products);
    });
