/*!
 * filter-glob <https://github.com/jonschlinkert/filter-glob>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var files = require('filter-files');
var utils = require('../utils');
var normalize = utils.normalize;
var filter = require('..');


describe('utils:', function () {
  describe('segments::', function () {
    it('should support indices:', function () {
      var files = ['a/b/c.d', 'e/f/g.h', 'i/j/k.l', 'm/n/o.p', 'q/r/s.t'];
      utils.segment(files[0], 0).should.equal('a');
      utils.segment(files[1], 1).should.equal('f');
      utils.segment(files[2], 2).should.equal('k.l');
    });

    it('should support negative indices:', function () {
      var files = ['a/b/c.d', 'e/f/g.h', 'i/j/k.l', 'm/n/o.p', 'q/r/s.t'];
      utils.segment(files[0], -1).should.equal('c.d');
      utils.segment(files[1], -2).should.equal('f');
      utils.segment(files[2], -3).should.equal('i');
    });

    it('should support `path` method names:', function () {
      var files = ['a/b/c.d', 'e/f/g.h', 'i/j/k.l', 'm/n/o.p', 'q/r/s.t'];
      utils.segment(files[0], 'extname').should.equal('.d');
      utils.segment(files[0], 'basename').should.equal('c.d');
      utils.segment(files[1], 'dirname').should.equal('e/f');
    });

    it('should support indices and `path` method names:', function () {
      var files = ['a/b/c.d', 'e/f/g.h', 'i/j/k.l', 'm/n/o.p', 'q/r/s.t'];
      utils.segment(files[4], 'dirname').should.equal('q/r');
      utils.segment(files[4], 'dirname', 1).should.equal('r');
    });
  });
});

describe('filter ext', function () {
  it('should get javascript files', function () {
    var files = ['foo.md', 'bar.js'].filter(filter.ext('.js'));
    files.should.eql(['bar.js']);
  });
  it('should get markdown files', function () {
    var files = ['foo.md', 'bar.js'].filter(filter.ext('.md'));
    files.should.eql(['foo.md']);
  });
});

describe('ext', function () {
  it('should get javascript files', function () {
    files.sync('.', filter.ext('.js')).should.eql(['index.js']);
  });
});

describe('glob', function () {
  it('should get markdown files', function (done) {
    files('test', filter.glob('**/lorem.md'), function(err, files) {
      normalize(files).should.eql(['test/fixtures/urna/lorem.md']);
      done();
    });
  });
});
