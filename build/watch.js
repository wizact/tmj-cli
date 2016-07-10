(function(module) {
    "use strict";

    var config = {
        scripts: {
                files: [
                'src/**/*.ts',
                'test/**/*.js'],
                tasks: ['default']
            }
    };

    module.exports = function(grunt) {
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.config("watch", config);
    }
})(module);