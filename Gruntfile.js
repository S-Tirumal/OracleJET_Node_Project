module.exports = function (grunt) {
    "use strict";
    require('time-grunt')(grunt);
    // Project configuration.
    grunt.initConfig({
        jshint: {
            "server": {
                "src": ["server/**/*.js"],
                options: {
                    "strict": true,
                    "curly": true,
                    "eqnull": true,
                    "unused": true,
                    "eqeqeq": true,
                    "undef": true,
                    "camelcase": true,
                    "forin": true,
                    "immed": true,
                    "node": true,
                    "latedef": true,
                    "newcap": true,
                    "quotmark": "double",
                    "trailing": true,
                    "globals": {exports: true, require: true},
                    "reporter": require('jshint-stylish'),
                    '-W097': true // use strict in function form warning
                }
            },
            "client": {
                "src": ["OracleJETClient/src/**/*.js"],
                options: {
                    "ignores": ["OracleJETClient/node_modules/**/*.js"],
                    "strict": true,
                    "curly": true,
                    "eqnull": true,
                    "unused": true,
                    "eqeqeq": true,
                    "undef": true,
                    "camelcase": true,
                    "forin": true,
                    "immed": true,
                    "latedef": true,
                    "newcap": true,
                    "quotmark": "double",
                    "trailing": true,
                    "globals": {ko: true, window: true, XMLHttpRequest: true},
                    "reporter": require('jshint-stylish'),
                    '-W097': true // use strict in function form warning
                }
            },
            "Old_client": {
                "src": ["client/**/*.js"],
                options: {
                    "ignores": ["client/libs/**/*.js"],
                    "strict": true,
                    "curly": true,
                    "eqnull": true,
                    "unused": true,
                    "eqeqeq": true,
                    "undef": true,
                    "camelcase": true,
                    "forin": true,
                    "immed": true,
                    "latedef": true,
                    "newcap": true,
                    "quotmark": "double",
                    "trailing": true,
                    "globals": {ko: true, window: true, XMLHttpRequest: true},
                    "reporter": require('jshint-stylish'),
                    '-W097': true // use strict in function form warning
                }
            }



        }
    });
    grunt.registerTask('jshint-server', ['jshint:server']);
    grunt.registerTask('jshint-client', ['jshint:client']);
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
