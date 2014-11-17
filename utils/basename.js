'use strict';

var path = require('path');
var ext = require('./ext');

/**
 * `basename` of a file, excluding extension
 */

module.exports = function basename(filepath) {
  return path.basename(filepath, ext(filepath));
};
