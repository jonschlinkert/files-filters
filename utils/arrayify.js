'use strict';

module.exports = function arrayify(val) {
  return Array.isArray(val) ? val : [val];
};
