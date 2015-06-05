/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {
	grunt.config.set('sails-linker', {
		devJs: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: ''
			},
			files: {
				'views/admin/*.php': require('../pipeline/admin').jsFilesToInject,
				'views/frontend/*.php': require('../pipeline/frontend').jsFilesToInject
			}
		},
		prodJs: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: ''
			},
			files: {
				'views/admin/*.php': ['apps/shared/scripts/admin.min.js'],
				'views/frontend/*.php': ['apps/shared/scripts/frontend.min.js']
			}
		},

		devStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: ''
			},
			files: {
				'views/admin/*.php': require('../pipeline/admin').cssFilesToInject,
				'views/frontend/*.php': require('../pipeline/frontend').cssFilesToInject
			}
		},
		prodStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: ''
			},
			files: {
				'views/admin/*.php': ['apps/shared/styles/admin.min.css'],
				'views/frontend/*.php': ['apps/shared/styles/frontend.min.css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
