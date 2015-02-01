'use strict';
module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint : {
			files : ['gruntfile.js', '*.js', 'lib/*.js'],
			options : {
				jshintrc : '.jshintrc'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
};