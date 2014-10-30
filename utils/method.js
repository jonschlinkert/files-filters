'use strict';

var path = require('path');
var name = require('./name');

/**
 * Use a method from the node path module
 * on-the-fly
 */

module.exports = function(fp, method) {
  if (method && method === 'name') {
    return name(fp);
  }

  if (method && Boolean(path[method])) {
    return path[method](fp);
  }

  return fp;
};
