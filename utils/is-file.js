'use strict';

var isDir = require('is-directory');

module.exports = function isFile(fp) {
  return !isDir(fp);
};