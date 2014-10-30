'use strict';

var path = require('path');
var isDir = require('is-directory');

module.exports = function isFile(fp, dir) {
  fp = dir ? path.join(dir, fp) : fp;
  return !isDir(fp);
};