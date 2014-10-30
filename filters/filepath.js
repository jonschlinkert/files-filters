'use strict';

var path = require('path');
var isDir = require('is-directory');

module.exports = function(str, method) {
  return function filepath(fp, dir) {
    fp = path.join(dir, fp);
    if (typeof dir === 'string' && isDir(fp)) {
      return true;
    }

    if (method && method === 'name') {
      fp = path.basename(fp, path.extname(fp));
    } else if (method && Boolean(path[method])) {
      fp = path[method](fp);
    }
    return fp === str;
  }
};
