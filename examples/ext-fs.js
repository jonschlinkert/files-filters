'use strict';

var files = require('filter-files');
var filters = require('../filters');


/**
 * Filter files from the file system with extname `.js`
 */

var exclude = filters.exclude(/node_modules/);
var include = filters.filepath('.js', 'extname');
console.log(files.sync('node_modules', [exclude, include]));

// or
// console.log(files.sync('node_modules', [exclude, filters.ext('.js')]));