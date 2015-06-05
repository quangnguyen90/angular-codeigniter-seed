/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {
	grunt.config.set('cssmin', {
		dist: {
			files: {
                'apps/shared/styles/admin.min.css': 'apps/shared/styles/admin.concat.css',
                'apps/shared/styles/frontend.min.css': 'apps/shared/styles/frontend.concat.css'
            }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
