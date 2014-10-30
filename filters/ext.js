'use strict';

var path = require('path');
var isDir = require('is-directory');

module.exports = function(extname) {
  return function ext(fp, dir) {
    if (typeof dir === 'string' && isDir(path.join(dir, fp))) {
      return true;
    }
    return path.extname(fp) === extname;
  }
};
