NOOP
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Function which does [nothing](https://en.wikipedia.org/wiki/NOP).


## Installation

``` bash
$ npm install @kgryte/noop
```


## Usage

``` javascript
var noop = require( '@kgryte/noop' );
```

#### noop()

`Function` which does [nothing](https://en.wikipedia.org/wiki/NOP).

``` javascript
noop();
// ...does nothing.
```


## Examples

``` javascript
var noop = require( '@kgryte/noop' );

function foo( next ) {
	// Do something...

	// Then...
	next();
}

foo( noop );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/@kgryte/noop.svg
[npm-url]: https://npmjs.org/package/@kgryte/noop

[travis-image]: http://img.shields.io/travis/kgryte/node-noop/master.svg
[travis-url]: https://travis-ci.org/kgryte/node-noop

[coveralls-image]: https://img.shields.io/coveralls/kgryte/node-noop/master.svg
[coveralls-url]: https://coveralls.io/r/kgryte/node-noop?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/node-noop.svg
[dependencies-url]: https://david-dm.org/kgryte/node-noop

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/node-noop.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/node-noop

[github-issues-image]: http://img.shields.io/github/issues/kgryte/node-noop.svg
[github-issues-url]: https://github.com/kgryte/node-noop/issues
