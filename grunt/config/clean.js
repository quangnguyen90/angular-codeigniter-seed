/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the apps/shared of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {
	grunt.config.set('clean', {
		dev: [
            '!apps/shared/images/*',
            'apps/shared/fonts/*',
            '!apps/shared/fonts/index.html',
            'apps/shared/scripts/*',
            '!apps/shared/scripts/index.html',
            'apps/shared/styles/*',
            '!apps/shared/styles/index.html'
        ],
        prod: [
            '!apps/shared/images/*',
            '!apps/shared/fonts/*',

            'apps/shared/scripts/*',
            '!apps/shared/scripts/admin.min.js',
            '!apps/shared/scripts/frontend.min.js',
            '!apps/shared/scripts/index.html',

            'apps/shared/styles/*',
            '!apps/shared/styles/admin.min.css',
            '!apps/shared/styles/frontend.min.css',
            '!apps/shared/styles/index.html'
        ]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};
