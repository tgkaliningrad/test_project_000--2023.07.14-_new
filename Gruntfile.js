
'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'css/1.css': 'less/1.less',
                    'css/2.css': 'less/2.less'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);

};




