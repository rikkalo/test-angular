 "use strict"
 angular.module('comments')
    .run(function($httpBackend) {

        var comments = [{
            id: 1,
            title: 'title',
            text: 'text1'
        }, {
            id: 2,
            title: 'title32',
            text: 'text2'
        }, {
            id: 3,
            title: 'title',
            text: 'text3'
        }];

       $httpBackend.whenGET(/\.html/).passThrough();

       $httpBackend.whenGET('/comments/').respond(comments);
    });
