'use strict';

var isDir = require('is-directory');

module.exports = function(fp) {
  return isDir(fp);
};
