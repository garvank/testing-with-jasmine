module.exports = function(grunt) {
  var uglifyBuildFiles = {},
      package = grunt.file.readJSON('package.json');

  // Configure Grunt
  grunt.initConfig({
    pkg: package,
    jasmine: {
      test: {
        src: ["src/*.js", "test/helpers/stubs/*.js"],
        options: {
          keepRunner: true,
          outfile: ".grunt/_SpecRunner.html",
          vendor: ["test/helpers/*.js"],
          specs: ["test/*_test.js"]
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Register tasks
  grunt.registerTask('test', ['jasmine:test']);
  grunt.registerTask('default', ['test']);
};
