/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {
	grunt.config.set('uglify', {
		dist: {
			files: {
                'apps/shared/scripts/admin.min.js': 'apps/shared/scripts/admin.concat.js',
                'apps/shared/scripts/frontend.min.js': 'apps/shared/scripts/frontend.concat.js'
            }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
