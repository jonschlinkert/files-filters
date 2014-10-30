/*!
 * filter-glob <https://github.com/jonschlinkert/filter-glob>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var filter = require('filter-files');
var glob = require('./');

describe('filter ext', function () {
  it('should get javascript files', function () {
    var files = ['foo.md', 'bar.js'].filter(function(fp) {
      return glob('*.js', fp);
    });
    files.should.eql(['bar.js']);
  });
  it('should get markdown files', function () {
    var files = ['foo.md', 'bar.js'].filter(function(fp) {
      return glob('*.md', fp);
    });
    files.should.eql(['foo.md']);
  });
});

describe('filter-files sync', function () {
  it('should get javascript files', function () {
    filter.sync('.', glob('*.js'), false).should.eql(['index.js', 'test.js']);
  });
});

describe('filter-files async', function () {
  it('should get markdown files', function (done) {
    filter('.', glob('*.md', {dot: true}), false, function(err, files) {
      files.should.eql(['.verbrc.md', 'README.md']);
      done();
    });
  });
});
