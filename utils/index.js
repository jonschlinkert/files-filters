'use strict';

var path = require('path');
var lookup = require('filter-files');
var isFile = require('./is-file');
var camelize = require('./camelize');

lookup.sync(__dirname, false).forEach(function (name) {
  var fp = path.resolve(__dirname, name);

  if (!/index/.test(fp) && isFile(fp)) {
    exports[camelize(name)] = require(fp);
  }
});
