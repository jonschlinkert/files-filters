'use strict';

var re = /[\\\/]+/g;

module.exports = function normalize(files) {
  if (typeof files === 'string') {
    return files.replace(re, '/');
  }

  return files.map(function(fp) {
    return fp.replace(re, '/');
  }).sort();
};