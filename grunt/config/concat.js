/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * apps/shared/scripts or apps/shared/styles directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {
	grunt.config.set('concat', {
		jsAdmin: {
			src: require('../pipeline/admin').jsFilesToInject,
			dest: 'apps/shared/scripts/admin.concat.js'
		},
		cssAdmin: {
			src: require('../pipeline/admin').cssFilesToInject,
			dest: 'apps/shared/styles/admin.concat.css'
		},
		jsFrontend: {
			src: require('../pipeline/frontend').jsFilesToInject,
			dest: 'apps/shared/scripts/frontend.concat.js'
		},
		cssFrontend: {
			src: require('../pipeline/frontend').cssFilesToInject,
			dest: 'apps/shared/styles/frontend.concat.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
