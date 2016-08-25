// import webpack config
var config = require('./build/webpack.config');

module.exports = function(grunt) {

    'use strict';

    // grunt config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            src: './src/',
            dist: './dist/'
        },
        webpack: {
            app: config
        },
        clean: {
            dist: ['<%= paths.dist %>']
        }
    });

    // Load the grunt plugins
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    //grunt tasks
    grunt.registerTask('default', ['clean:dist', 'webpack']);

};
