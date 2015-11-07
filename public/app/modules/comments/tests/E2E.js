 "use strict"
 angular.module('comments')
    .run(function($httpBackend) {

        var comments = [{
            user: 'User1',
            title: 'title1',
            text: 'text1'
        }, {
            user: 'User2',
            title: 'title2',
            text: 'text2'
        }, {
            user: 'User3',
            title: 'title3',
            text: 'text3'
        }];

       $httpBackend.whenGET(/\.html/).passThrough();

       $httpBackend.whenGET('/comments/').respond(comments);
    });
