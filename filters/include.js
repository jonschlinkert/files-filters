'use strict';

var path = require('path');
var isDir = require('is-directory');

module.exports = function(re, method) {
  return function include(fp, dir) {
    fp = path.join(dir, fp);

    if ((typeof dir === 'string' && isDir(fp)) || re.test(dir)) {
      return true;
    }

    if (method && Boolean(path[method])) {
      fp = path[method](fp);
    }

    if (re.test(fp) || re.test(dir)) {
      return true;
    }

    return false;
  };
};
