'use strict';

var path = require('path');
var isDir = require('is-directory');

/**
 * Match the given `extname`
 *
 * @param  {String} extname
 * @param  {Boolean} `recurse` When `true` will also return directories matched before
 *                   the actual condition is met, but necessary for nested dirs.
 * @return {String}
 */

module.exports = function(extname, recurse) {
  return function ext(fp, dir) {
    if (recurse && typeof dir === 'string' && isDir(path.join(dir, fp))) {
      return true;
    }
    return path.extname(fp) === extname;
  };
};
