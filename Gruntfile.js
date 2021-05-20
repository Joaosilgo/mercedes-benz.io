const webpackDev = require('./webpack.config.js');

const path = require('path');
var webpack = require("webpack");
console.log('Running build');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'dist/',

                }
            }
        },
        webpack: {
            myConfig:  webpackDev,

        },
        watch: {
            options: {
                livereload: true,
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['webpack'],
                options: {
                    interrupt: true,
                },
            },

        }
    })


    grunt.loadNpmTasks('grunt-webpack');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['webpack', 'connect', 'watch']);
};