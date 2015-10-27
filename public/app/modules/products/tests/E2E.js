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

        // var newsId = -1;
        // $httpBackend.whenGET(function(url) {
        //     var regexp = /^\/news\/\?id=([1-9])+/;
        //     var match = url.match(regexp);
        //     if (match && typeof match[1] !== 'undefined') {
        //         newsId = (url.match(regexp)[1]) - 1;
        //     }
        //     return regexp.test(url);
        // }).respond(function() {
        //     if (typeof news[newsId] == 'undefined') {
        //         return [404, {}];
        //     }
        //     return [200, news[newsId]];
        // });
    });
