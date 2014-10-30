'use strict';

var files = require('filter-files');
var filters = require('../filters');

/**
 * Recurse `node_modules` and return a list of filtered files:
 *
 *    - exclude other dirs with `node_modules` in the path
 *    - from whatever is left, return only files with `jscomments` in the path
 */

var exclude = filters.exclude(/node_modules/);
var include = filters.include(/jscomments/, 'dirname');

console.log(files.sync('node_modules', [exclude, include]));