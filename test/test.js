/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	noop = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'noop', function tests() {

	it( 'should export a function', function test() {
		expect( noop ).to.be.a( 'function' );
	});

	it( 'should not take any arguments', function test() {
		assert.isTrue( noop.length === 0 );
	});

	it( 'should return undefined', function test() {
		assert.isTrue( noop() === void 0 );
	});

});
