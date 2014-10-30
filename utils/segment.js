'use strict';

var path = require('path');
var name = require('./name');

/**
 * Return the given segment of `fp`
 */

module.exports = function(fp, segment, i) {
  if (typeof segment === 'string') {
    if (segment && segment === 'name') {
      return name(fp);
    }

    if (segment && Boolean(path[segment])) {
      fp = path[segment](fp);
    }
  }

  if (typeof segment === 'number') {
    i = segment;
  }

  var segs = fp.split(/[\\\/]+/);

  if (typeof i === 'number') {
    if (String(i).indexOf('-') !== -1) {
      return segs[segs.length + i];
    }
    return segs[i];
  }
  return fp;
};
