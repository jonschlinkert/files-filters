'use strict';

var path = require('path');
var lookup = require('filter-files');
var camelize = require('../utils/camelize');
var exclude = require('./exclude');

lookup.sync(__dirname, exclude(/index/)).forEach(function(fp) {
  exports[camelize(fp)] = require(fp);
});
