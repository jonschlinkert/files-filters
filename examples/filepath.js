'use strict';

var files = require('filter-files');
var filters = require('../filters');

/**
 * **filepath**
 *
 * Recurse `node_modules` and return a list of filtered files:
 *
 *    - exclude other dirs with `node_modules` in the path
 *    - exclude dirs with `verb` in the path
 *    - return only files with `package` in the name
 */

var a = filters.exclude(/node_modules/);
var b = filters.exclude(/verb/);
var include = filters.filepath('package', 'name');
console.log(files.sync('node_modules', [a, b, include]));
