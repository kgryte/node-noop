'use strict';

var noop = require( './../lib' );

function foo( next ) {
	// Do something...

	// Then...
	next();
}

foo( noop );

