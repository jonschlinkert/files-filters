'use strict';

var path = require('path');
var lookup = require('filter-files');
var isFile = require('./is-file');
var camelize = require('./camelize');


// module.exports = {
//   basename: require('./basename'),
//   camelize: require('./camelize'),
//   dirname: require('./dirname'),
//   ext: require('./ext'),
//   isDir: require('./is-dir'),
//   isFile: require('./is-file'),
//   method: require('./method'),
//   name: require('./name'),
//   normalize: require('./normalize'),
//   segment: require('./segment'),
// };

lookup.sync(__dirname, false).forEach(function (name) {
  var fp = path.resolve(__dirname, name);

  if (!/index/.test(fp) && isFile(fp)) {
    exports[camelize(name)] = require(fp);
  }
});
