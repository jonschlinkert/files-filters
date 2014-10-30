'use strict';

var path = require('path');
var isDir = require('is-directory');
var mm = require('minimatch');

module.exports = function(pattern, options, recurse) {
  if (typeof options === 'boolean') {
    recurse = options;
    options = {};
  }
  return function filepath(fp, dir) {
    fp = path.join(dir, fp);

    if (typeof dir === 'string' && isDir(fp)) {
      return true;
    }
    return mm(fp, pattern, options);
  };
};
