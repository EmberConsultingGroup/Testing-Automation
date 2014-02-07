
(function() {
   'use strict';
    
require.config({
    urlArgs: "cb=" + Math.random(),
    paths: {
        'jquery': '../path/to/jquery.min',
        'domReady': '../path/to/domReady',
        'modules': '../path/to/modules',
        'viewmodles': '../path/to/viewmodules',
        'jasmine': '../path/to/jasmine-2.0.0',
        'jasmine_html': '../path/to/jasmine-html-2.0.0',
        'jasmine_boot': '../path/to/jasmine-boot-2.0.0',
        'teamcityreporter' : '../path/to/jasmine2.teamcityreporter'
    },
    shim: {
        'jasmine': {           
            exports: 'jasmine'
        },
        'jasmine_html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'jasmine_boot': {
            deps: ['jasmine', 'jasmine_html'],
            exports: 'jasmine'
        },
        'teamcityreporter': {
            deps: ['jasmine']
        }
    },
    waitSeconds: 60
});

   
require(['jasmine_boot', 'teamcityreporter'], function () {

    require(specList,  //From specList.js, todo:automate
        function () {

           
            var TeamcityReporter = jasmineRequire.TeamcityReporter();
            window.teamcityReporter = new TeamcityReporter();
            jasmine.getEnv().addReporter(window.teamcityReporter);

            window.onload();


        });
    });
    
})();