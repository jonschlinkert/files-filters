'use strict';

var files = require('filter-files');
var filters = require('../filters');
var ext = filters.ext;

/**
 * Filter files in the array with extname `.js`
 */

var files = ['foo.md', 'bar.js'];

console.log(files.filter(ext('.js')));
//=> ['bar.js']
