 "use strict"
 angular.module('products')
    .run(function($httpBackend) {

        var products = [{
            id: 1,
            title: 'title',
            content: 'content <h2>Hello</h2>'
        }, {
            id: 2,
            title: 'title32',
            content: 'content'
        }, {
            id: 3,
            title: 'title',
            content: 'content'
        }];

       $httpBackend.whenGET(/\.html/).passThrough();

       $httpBackend.whenGET('/products/').respond(products);
    });
