var path = require('path');
var entryPoint = require.resolve('font-awesome');

var faDir = path.dirname(entryPoint);

var pkg = require(path.join(faDir, 'package.json'));

// SASS/LESS directory for import paths
var scssDir = path.join(faDir, 'scss');
var lessDir = path.join(faDir, 'less');

// Direct path to fontawesome.css
var cssPath = path.join(faDir, pkg.style);

// Glob of all files in fonts directory
var fonts = path.join(faDir, 'fonts', '*');

module.exports = {

  scssPath: scssDir,
  lessPath: lessDir,
  css: cssPath,
  
  fonts: fonts

};
