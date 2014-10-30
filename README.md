# files-filters [![NPM version](https://badge.fury.io/js/files-filters.svg)](http://badge.fury.io/js/files-filters)

> Functions for fantastically fast file filtering, and more things that start with 'f'.

## Install
#### Install with [npm](npmjs.org)

```bash
npm i files-filters --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var filter = require('files-filters');
var files = require('filter-files');

var exclude = filters.exclude(/node_modules/);
var include = filters.include(/jscomments/, 'dirname');

console.log(files.sync('node_modules', [exclude, include]));
//=> try it and see ;)
```

WIP, for now take a look at the [examples](./examples) to see how these work.

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/files-filters/issues).

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 30, 2014._

[filter-files]: https://github.com/jonschlinkert/filter-files