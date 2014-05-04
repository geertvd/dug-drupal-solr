module.exports = function (grunt) {
  "use strict";

  // Config...
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['./js/src/**/*.js'],
        tasks: ['concat']
      },
      html: {
        files: ['./templates/*.html'],
        tasks: []
      }
    },
    uglify: {
      prod: {
        options: {
          mangle: true,
          compress: true
        },
        files: {
          'js/olympic_ng.js': ['js/olympic_ng.js']
        }
      }
    },
    concat: {
      dist: {
        src: ['js/src/**/*.js'],
        dest: 'js/olympic_ng.js'
      }
    },
    ngdocs: {
      all: ['js/src/**/*.js']
    }
  });


  // Load tasks...
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('compile', [
    'concat',
  ]);
  // Task aliases and tasks
  grunt.registerTask('prod', [
    'concat',
    'uglify:prod'
  ]);
};
