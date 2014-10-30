'use strict';

var path = require('path');
var isDir = require('is-directory');

module.exports = function(re, method) {
  return function include(fp, dir) {
    fp = path.join(dir, fp);
    if (typeof dir === 'string' && isDir(fp)) {
      return true;
    }
    if (method && Boolean(path[method])) {
      fp = path[method](fp);
    }
    return re.test(fp);
  };
};
