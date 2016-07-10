(function(module) {
    "use strict";

    function getConfig(lintConfig) {
        return {
            options: { 
                configuration: lintConfig
            },
            all: {
                src: [
                    "src/**/*.ts"
                ]
            }
        };
    }

    module.exports = function(grunt) {
        grunt.loadNpmTasks("grunt-tslint");
        grunt.config("tslint", getConfig(grunt.file.readJSON("tslint.json")));
    }
})(module);