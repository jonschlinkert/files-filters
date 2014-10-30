'use strict';

var name = require('./name');

module.exports = function camelize(fp) {
  return name(fp).replace(/-(.)/g, function (_, s) {
    return s.toUpperCase();
  });
};
