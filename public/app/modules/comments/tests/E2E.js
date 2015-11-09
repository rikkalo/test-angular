 "use strict"
 angular.module('comments')
    .run(function($httpBackend) {

        var comments = [{
            userName: 'User1',
            date: '9:11:2015',
            text: 'text1'
        }, {
            userName: 'User2',
            date: '20:01:2015',
            text: 'text2'
        }, {
            userName: 'User3',
            date: '1:12:2015',
            text: 'text3'
        }];

       $httpBackend.whenGET(/\.html/).passThrough();

       $httpBackend.whenGET('/comments/').respond(comments);
    });
