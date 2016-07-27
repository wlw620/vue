var webpackConfig = require('./build/webpackConfig');

module.exports = function(grunt) {

    'use strict';

    // grunt config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: webpackConfig
    });

    // Load the plugins
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    //grunt tasks
    grunt.registerTask('default', ['webpack']);

};
