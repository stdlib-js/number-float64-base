/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import assert = require( '@stdlib/number-float64-base-assert' );
import exponent = require( '@stdlib/number-float64-base-exponent' );
import fromBinaryString = require( '@stdlib/number-float64-base-from-binary-string' );
import fromInt64Bytes = require( '@stdlib/number-float64-base-from-int64-bytes' );
import fromWords = require( '@stdlib/number-float64-base-from-words' );
import getHighWord = require( '@stdlib/number-float64-base-get-high-word' );
import getLowWord = require( '@stdlib/number-float64-base-get-low-word' );
import normalize = require( '@stdlib/number-float64-base-normalize' );
import setHighWord = require( '@stdlib/number-float64-base-set-high-word' );
import setLowWord = require( '@stdlib/number-float64-base-set-low-word' );
import signbit = require( '@stdlib/number-float64-base-signbit' );
import toBinaryString = require( '@stdlib/number-float64-base-to-binary-string' );
import float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
import float64ToInt32 = require( '@stdlib/number-float64-base-to-int32' );
import float64ToInt64Bytes = require( '@stdlib/number-float64-base-to-int64-bytes' );
import float64ToUint32 = require( '@stdlib/number-float64-base-to-uint32' );
import toWords = require( '@stdlib/number-float64-base-to-words' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Base double-precision floating-point number assert functions.
	*/
	assert: typeof assert;

	/**
	* Returns an integer corresponding to the unbiased exponent of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns unbiased exponent
	*
	* @example
	* var exp = ns.exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
	* // returns -1019
	*
	* @example
	* var exp = ns.exponent( -3.14 );
	* // returns 1
	*
	* @example
	* var exp = ns.exponent( 0.0 );
	* // returns -1023
	*
	* @example
	* var exp = ns.exponent( NaN );
	* // returns 1024
	*/
	exponent: typeof exponent;

	/**
	* Creates a double-precision floating-point number from a literal bit representation.
	*
	* @param bstr - string which is a literal bit representation
	* @throws must provide a string with a length equal to `64`
	* @returns double
	*
	* @example
	* var bstr = '0100000000010000000000000000000000000000000000000000000000000000';
	* var val = ns.fromBinaryString( bstr );
	* // returns 4.0
	*
	* @example
	* var bstr = '0100000000001001001000011111101101010100010001000010110100011000';
	* var val = ns.fromBinaryString( bstr );
	* // returns 3.141592653589793
	*
	* @example
	* var bstr = '1111111111100001110011001111001110000101111010111100100010100000';
	* var val = ns.fromBinaryString( bstr );
	* // returns -1.0e308
	*
	* @example
	* var bstr = '1000000000000000000000000000000000000000000000000001100011010011';
	* var val = ns.fromBinaryString( bstr );
	* // returns -3.14e-320
	*
	* @example
	* var bstr = '0000000000000000000000000000000000000000000000000000000000000001';
	* var val = ns.fromBinaryString( bstr );
	* // returns 5.0e-324
	*
	* @example
	* var bstr = '0000000000000000000000000000000000000000000000000000000000000000';
	* var val = ns.fromBinaryString( bstr );
	* // returns 0.0
	*
	* @example
	* var bstr = '1000000000000000000000000000000000000000000000000000000000000000';
	* var val = ns.fromBinaryString( bstr );
	* // returns -0.0
	*
	* @example
	* var bstr = '0111111111111000000000000000000000000000000000000000000000000000';
	* var val = ns.fromBinaryString( bstr );
	* // returns NaN
	*
	* @example
	* var bstr = '0111111111110000000000000000000000000000000000000000000000000000';
	* var val = ns.fromBinaryString( bstr );
	* // returns Infinity
	*
	* @example
	* var bstr = '1111111111110000000000000000000000000000000000000000000000000000';
	* var val = ns.fromBinaryString( bstr );
	* // returns -Infinity
	*/
	fromBinaryString: typeof fromBinaryString;

	/**
	* Converts a signed 64-bit integer byte array to a double-precision floating-point number.
	*
	* ## Notes
	*
	* -   The function assumes host byte order (endianness).
	*
	* @param bytes - byte array
	* @param stride - index stride
	* @param offset - index offset
	* @returns double-precision floating-point number
	*
	* @example
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
	* var x = ns.fromInt64Bytes( bytes, 1, 0 );
	* // returns -1.0
	*/
	fromInt64Bytes: typeof fromInt64Bytes;

	/**
	* Creates a double-precision floating-point number from a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
	*
	* ## Notes
	*
	* ```text
	* float64 (64 bits)
	* f := fraction (significand/mantissa) (52 bits)
	* e := exponent (11 bits)
	* s := sign bit (1 bit)
	*
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |                                Float64                                |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |              Uint32               |               Uint32              |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* ```
	*
	* If little endian (more significant bits last):
	*
	* ```text
	*                         <-- lower      higher -->
	* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
	* ```
	*
	* If big endian (more significant bits first):
	*
	* ```text
	*                         <-- higher      lower -->
	* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
	* ```
	*
	*
	* In which Uint32 should we place the higher order bits? If little endian, the second; if big endian, the first.
	*
	*
	* ## References
	*
	* -   [Open Group][1]
	*
	* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
	*
	* @param high - higher order word (unsigned 32-bit integer)
	* @param low - lower order word (unsigned 32-bit integer)
	* @returns floating-point number
	*
	* @example
	* var v = ns.fromWords( 1774486211, 2479577218 );
	* // returns 3.14e201
	*
	* @example
	* var v = ns.fromWords( 3221823995, 1413754136 );
	* // returns -3.141592653589793
	*
	* @example
	* var v = ns.fromWords( 0, 0 );
	* // returns 0.0
	*
	* @example
	* var v = ns.fromWords( 2147483648, 0 );
	* // returns -0.0
	*
	* @example
	* var v = ns.fromWords( 2146959360, 0 );
	* // returns NaN
	*
	* @example
	* var v = ns.fromWords( 2146435072, 0 );
	* // returns Infinity
	*
	* @example
	* var v = ns.fromWords( 4293918720, 0 );
	* // returns -Infinity
	*/
	fromWords: typeof fromWords;

	/**
	* Returns an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns higher order word (unsigned 32-bit integer)
	*
	* @example
	* var w = ns.getHighWord( 3.14e201 ); // => 01101001110001001000001011000011
	* // returns 1774486211
	*/
	getHighWord: typeof getHighWord;

	/**
	* Returns a 32-bit unsigned integer corresponding to the less significant 32 bits of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns lower order word (unsigned 32-bit integer)
	*
	* @example
	* var w = ns.getLowWord( 3.14e201 ); // => 10010011110010110101100010000010
	* // returns 2479577218
	*/
	getLowWord: typeof getLowWord;

	/**
	* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
	*
	* ## Notes
	*
	* -   The first element of the returned array corresponds to `y` and the second to `exp`.
	*
	* @param x - input value
	* @returns output array
	*
	* @example
	* var pow = require( '@stdlib/math-base-special-pow' );
	*
	* var out = ns.normalize( 3.14e-319 );
	* // returns <Float64Array>[ 1.4141234400356668e-303, -52 ]
	*
	* var y = out[ 0 ];
	* var exponent = out[ 1 ];
	*
	* var bool = ( y*pow(2.0, exponent) === 3.14e-319 );
	* // returns true
	*/
	normalize: typeof normalize;

	/**
	* Sets the more significant 32 bits of a double-precision floating-point number.
	*
	* ## Notes
	*
	* ```text
	* float64 (64 bits)
	* f := fraction (significand/mantissa) (52 bits)
	* e := exponent (11 bits)
	* s := sign bit (1 bit)
	*
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |                                Float64                                |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |              Uint32               |               Uint32              |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* ```
	*
	* If little endian (more significant bits last):
	*
	* ```text
	*                         <-- lower      higher -->
	* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
	* ```
	*
	* If big endian (more significant bits first):
	*
	* ```text
	*                         <-- higher      lower -->
	* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
	* ```
	*
	* In which Uint32 can we find the higher order bits? If little endian, the second; if big endian, the first.
	*
	*
	* ## References
	*
	* -   [Open Group][1]
	*
	* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
	*
	* @param x - double
	* @param high - unsigned 32-bit integer to replace the higher order word of `x`
	* @returns double having the same lower order word as `x`
	*
	* @example
	* var high = 5 >>> 0; // => 0 00000000000 00000000000000000101
	*
	* var y = ns.setHighWord( 3.14e201, high ); //  => 0 00000000000 0000000000000000010110010011110010110101100010000010
	* // returns 1.18350528745e-313
	*
	* @example
	* var PINF = require( '@stdlib/constants-float64-pinf' ); // => 0 11111111111 00000000000000000000 00000000000000000000000000000000
	*
	* var high = 1072693248 >>> 0; // => 0 01111111111 00000000000000000000
	*
	* // Set the higher order bits of `+infinity` to return `1`:
	* var y = ns.setHighWord( PINF, high ); // => 0 01111111111 0000000000000000000000000000000000000000000000000000
	* // returns 1.0
	*/
	setHighWord: typeof setHighWord;

	/**
	* Sets the less significant 32 bits of a double-precision floating-point number.
	*
	* ## Notes
	*
	* ```text
	* float64 (64 bits)
	* f := fraction (significand/mantissa) (52 bits)
	* e := exponent (11 bits)
	* s := sign bit (1 bit)
	*
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |                                Float64                                |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* |              Uint32               |               Uint32              |
	* |-------- -------- -------- -------- -------- -------- -------- --------|
	* ```
	*
	* If little endian (more significant bits last):
	*
	* ```text
	*                         <-- lower      higher -->
	* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
	* ```
	*
	* If big endian (more significant bits first):
	*
	* ```text
	*                         <-- higher      lower -->
	* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
	* ```
	*
	* In which Uint32 can we find the lower order bits? If little endian, the first; if big endian, the second.
	*
	*
	* ## References
	*
	* -   [Open Group][1]
	*
	* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
	*
	* @param x - double
	* @param low - unsigned 32-bit integer to replace the lower order word of `x`
	* @returns double having the same higher order word as `x`
	*
	* @example
	* var low = 5 >>> 0; // => 00000000000000000000000000000101
	*
	* var x = 3.14e201; // => 0 11010011100 01001000001011000011 10010011110010110101100010000010
	*
	* var y = ns.setLowWord( x, low ); // => 0 11010011100 01001000001011000011 00000000000000000000000000000101
	* // returns 3.139998651394392e+201
	*
	* @example
	* var PINF = require( '@stdlib/constants-float64-pinf' );
	* var NINF = require( '@stdlib/constants-float64-ninf' );
	*
	* var low = 12345678;
	*
	* var y = ns.setLowWord( PINF, low );
	* // returns NaN
	*
	* y = ns.setLowWord( NINF, low );
	* // returns NaN
	*
	* y = ns.setLowWord( NaN, low );
	* // returns NaN
	*/
	setLowWord: typeof setLowWord;

	/**
	* Returns a boolean indicating if the sign bit is on (true) or off (false).
	*
	* @param x - input value
	* @returns boolean indicating if sign bit is on or off
	*
	* @example
	* var bool = ns.signbit( 4.0 );
	* // returns false
	*
	* @example
	* var bool = ns.signbit( -9.14e-307 );
	* // returns true
	*
	* @example
	* var bool = ns.signbit( 0.0 );
	* // returns false
	*
	* @example
	* var bool = ns.signbit( -0.0 );
	* // returns true
	*/
	signbit: typeof signbit;

	/**
	* Returns a string giving the literal bit representation of a double-precision floating-point number.
	*
	* @param x - input value
	* @returns bit representation
	*
	* @example
	* var str = ns.toBinaryString( 4.0 );
	* // returns '0100000000010000000000000000000000000000000000000000000000000000'
	*
	* @example
	* var str = ns.toBinaryString( 3.141592653589793 );
	* // returns '0100000000001001001000011111101101010100010001000010110100011000'
	*
	* @example
	* var str = ns.toBinaryString( -1.0e308 );
	* // returns '1111111111100001110011001111001110000101111010111100100010100000'
	*
	* @example
	* var str = ns.toBinaryString( -3.14e-320 );
	* // returns '1000000000000000000000000000000000000000000000000001100011010011'
	*
	* @example
	* var str = ns.toBinaryString( 5.0e-324 );
	* // returns '0000000000000000000000000000000000000000000000000000000000000001'
	*
	* @example
	* var str = ns.toBinaryString( 0.0 );
	* // returns '0000000000000000000000000000000000000000000000000000000000000000'
	*
	* @example
	* var str = ns.toBinaryString( -0.0 );
	* // returns '1000000000000000000000000000000000000000000000000000000000000000'
	*
	* @example
	* var str = ns.toBinaryString( NaN );
	* // returns '0111111111111000000000000000000000000000000000000000000000000000'
	*
	* @example
	* var str = ns.toBinaryString( Infinity );
	* // returns '0111111111110000000000000000000000000000000000000000000000000000'
	*
	* @example
	* var str = ns.toBinaryString( -Infinity );
	* // returns '1111111111110000000000000000000000000000000000000000000000000000'
	*/
	toBinaryString: typeof toBinaryString;

	/**
	* Convert a double-precision floating-point number to the nearest single-precision floating-point number.
	*
	* @param x - double-precision floating-point number
	* @returns nearest single-precision floating-point number
	*
	* @example
	* var ns.float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
	*
	* var y = ns.float64ToFloat32( 1.337 );
	* // returns 1.3370000123977661
	*/
	float64ToFloat32: typeof float64ToFloat32;

	/**
	* Converts a double-precision floating-point number to a signed 32-bit integer.
	*
	* @param x - double-precision floating-point number
	* @returns signed 32-bit integer
	*
	* @example
	* var y = ns.float64ToInt32( 4294967295.0 );
	* // returns -1
	*
	* @example
	* var y = ns.float64ToInt32( 3.14 );
	* // returns 3
	*
	* @example
	* var y = ns.float64ToInt32( -3.14 );
	* // returns -3
	*
	* @example
	* var y = ns.float64ToInt32( NaN );
	* // returns 0
	*
	* @example
	* var y = ns.float64ToInt32( Infinity );
	* // returns 0
	*
	* @example
	* var y = ns.float64ToInt32( -Infinity );
	* // returns 0
	*/
	float64ToInt32: typeof float64ToInt32;

	/**
	* Converts an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order (endianness).
	*
	* ## Notes
	*
	* -   This function assumes that the input value is less than the maximum safe double-precision floating-point integer plus one (i.e., `2**53`).
	*
	* @param x - double-precision floating-point number
	* @returns byte array
	*
	* @example
	* var bytes = ns.float64ToInt64Bytes( 1.0 );
	* // returns <Uint8Array>
	*
	* @example
	* var Uint8Array = require( '@stdlib/array-uint8' );
	*
	* var out = new Uint8Array( 16 );
	* var bytes = ns.float64ToInt64Bytes.assign( 1.0, out, 2, 1 );
	* // returns <Uint8Array>
	*/
	float64ToInt64Bytes: typeof float64ToInt64Bytes;

	/**
	* Converts a double-precision floating-point number to an unsigned 32-bit integer.
	*
	* @param x - double-precision floating-point number
	* @returns unsigned 32-bit integer
	*
	* @example
	* var y = ns.float64ToUint32( 4294967297.0 );
	* // returns 1
	*
	* @example
	* var y = ns.float64ToUint32( 3.14 );
	* // returns 3
	*
	* @example
	* var y = ns.float64ToUint32( -3.14 );
	* // returns 4294967293
	*
	* @example
	* var y = ns.float64ToUint32( NaN );
	* // returns 0
	*
	* @example
	* var y = ns.float64ToUint32( Infinity );
	* // returns 0
	*
	* @example
	* var y = ns.float64ToUint32( -Infinity );
	* // returns 0
	*/
	float64ToUint32: typeof float64ToUint32;

	/**
	* Splits a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
	*
	* @param x - input value
	* @returns output array
	*
	* @example
	* var w = ns.toWords( 3.14e201 );
	* // returns [ 1774486211, 2479577218 ]
	*/
	toWords: typeof toWords;
}

/**
* Base utilities for double-precision floating-point numbers.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
