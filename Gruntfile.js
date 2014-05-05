/*
 * grunt-gss-pull
 * https://github.com/motherjones/grunt-gss-pull
 *
 * Copyright (c) 2013 Ben Breedlove
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        gss_pull: {
            super_simple: {
                options: {},
                files: {
                    'data/data.json': ['0AvW9Q_v2XAGTdGxfYXVfTmZJNzlMTV9tVHFZRnV2U1E'],
                },
            },

        },

    });

    grunt.loadTasks('tasks');
    grunt.registerTask('gss', ['gss_pull']);

};