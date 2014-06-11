module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        auto_install: require('./grunt/conf/auto_install'),
        browserify: require('./grunt/conf/browserify'),
        concat_css: require('./grunt/conf/concat_css')
    });

    grunt.registerTask('build', ['auto_install', 'browserify', 'concat_css']);
    grunt.registerTask('default', ['build']);

};