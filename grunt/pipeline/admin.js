/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */


// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'shared/styles/font-awesome.css',
  'shared/styles/bootstrap.css',
  'shared/styles/normalize.css',
  'shared/styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
  'shared/scripts/jquery.js',
  'shared/scripts/angular.js',
  'shared/scripts/ui-bootstrap.js',
  'shared/scripts/ui-bootstrap-tpls.js',
  'shared/scripts/**/*.js',
  'admin/app.js',
  'admin/routes/*.js'
];


// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return 'apps/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return 'apps/' + path;
});