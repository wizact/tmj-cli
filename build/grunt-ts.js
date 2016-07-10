(function(module) {
    "use strict";

    var config = {
            default : {
                src: ["src/**/*.ts"],
                tsconfig: true
            }
        };

    module.exports = function(grunt) {
        grunt.loadNpmTasks("grunt-ts");
        grunt.config("ts", config);
    }
})(module);