'use strict';

var path = require('path');
var isDir = require('is-directory');

module.exports = function(re, method) {
  method = method || 'basename';

  return function exclude(fp, dir) {
    fp = path.join(dir, fp);

    if (method && Boolean(path[method])) {
      fp = path[method](fp);
    }
    return !re.test(fp);
  };
};