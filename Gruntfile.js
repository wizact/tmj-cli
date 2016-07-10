module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.loadTasks('build');
    
    grunt.registerTask('compile-ts', ['ts:default']);
    grunt.registerTask('lint-ts', ['tslint:all']);
    
    grunt.registerTask('default', ['lint-ts', 'compile-ts']);

    grunt.event.on('watch', function(action, filepath) {
        grunt.log.write(filepath);
    });
};