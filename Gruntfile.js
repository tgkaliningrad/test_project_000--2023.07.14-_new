
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
                    'css/style.css': 'less/style.less',
                    'css/normalize.css': 'less/normalize.less',
                    'css/reset.css': 'less/reset.less'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);

};






