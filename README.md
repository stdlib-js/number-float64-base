<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Float64

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base utilities for double-precision floating-point numbers.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/number-float64-base/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Base utilities for double-precision floating-point numbers.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`exponent( x )`][@stdlib/number/float64/base/exponent]</span><span class="delimiter">: </span><span class="description">return an integer corresponding to the unbiased exponent of a double-precision floating-point number.</span>
-   <span class="signature">[`fromBinaryString( bstr )`][@stdlib/number/float64/base/from-binary-string]</span><span class="delimiter">: </span><span class="description">create a double-precision floating-point number from a literal bit representation.</span>
-   <span class="signature">[`fromInt64Bytes( bytes, stride, offset )`][@stdlib/number/float64/base/from-int64-bytes]</span><span class="delimiter">: </span><span class="description">convert a signed 64-bit integer byte array to a double-precision floating-point number.</span>
-   <span class="signature">[`fromWords( high, low )`][@stdlib/number/float64/base/from-words]</span><span class="delimiter">: </span><span class="description">create a double-precision floating-point number from a higher order word and a lower order word.</span>
-   <span class="signature">[`getHighWord( x )`][@stdlib/number/float64/base/get-high-word]</span><span class="delimiter">: </span><span class="description">return an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.</span>
-   <span class="signature">[`getLowWord( x )`][@stdlib/number/float64/base/get-low-word]</span><span class="delimiter">: </span><span class="description">return an unsigned 32-bit integer corresponding to the less significant 32 bits of a double-precision floating-point number.</span>
-   <span class="signature">[`normalize( x )`][@stdlib/number/float64/base/normalize]</span><span class="delimiter">: </span><span class="description">return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.</span>
-   <span class="signature">[`setHighWord( x, high )`][@stdlib/number/float64/base/set-high-word]</span><span class="delimiter">: </span><span class="description">set the more significant 32 bits of a double-precision floating-point number.</span>
-   <span class="signature">[`setLowWord( x, low )`][@stdlib/number/float64/base/set-low-word]</span><span class="delimiter">: </span><span class="description">set the less significant 32 bits of a double-precision floating-point number.</span>
-   <span class="signature">[`signbit( x )`][@stdlib/number/float64/base/signbit]</span><span class="delimiter">: </span><span class="description">return a boolean indicating if the sign bit for a double-precision floating-point number is on (true) or off (false).</span>
-   <span class="signature">[`toBinaryString( x )`][@stdlib/number/float64/base/to-binary-string]</span><span class="delimiter">: </span><span class="description">return a string giving the literal bit representation of a double-precision floating-point number.</span>
-   <span class="signature">[`float64ToFloat32( x )`][@stdlib/number/float64/base/to-float32]</span><span class="delimiter">: </span><span class="description">convert a double-precision floating-point number to the nearest single-precision floating-point number.</span>
-   <span class="signature">[`float64ToInt32( x )`][@stdlib/number/float64/base/to-int32]</span><span class="delimiter">: </span><span class="description">convert a double-precision floating-point number to a signed 32-bit integer.</span>
-   <span class="signature">[`float64ToInt64Bytes( x )`][@stdlib/number/float64/base/to-int64-bytes]</span><span class="delimiter">: </span><span class="description">convert an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order (endianness).</span>
-   <span class="signature">[`float64ToUint32( x )`][@stdlib/number/float64/base/to-uint32]</span><span class="delimiter">: </span><span class="description">convert a double-precision floating-point number to an unsigned 32-bit integer.</span>
-   <span class="signature">[`toWords( [out,] x )`][@stdlib/number/float64/base/to-words]</span><span class="delimiter">: </span><span class="description">split a double-precision floating-point number into a higher order word and a lower order word.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base@umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base

[test-image]: https://github.com/stdlib-js/number-float64-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-base/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-base/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/number/float64/base/exponent]: https://github.com/stdlib-js/number-float64-base-exponent/tree/umd

[@stdlib/number/float64/base/from-binary-string]: https://github.com/stdlib-js/number-float64-base-from-binary-string/tree/umd

[@stdlib/number/float64/base/from-int64-bytes]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/tree/umd

[@stdlib/number/float64/base/from-words]: https://github.com/stdlib-js/number-float64-base-from-words/tree/umd

[@stdlib/number/float64/base/get-high-word]: https://github.com/stdlib-js/number-float64-base-get-high-word/tree/umd

[@stdlib/number/float64/base/get-low-word]: https://github.com/stdlib-js/number-float64-base-get-low-word/tree/umd

[@stdlib/number/float64/base/normalize]: https://github.com/stdlib-js/number-float64-base-normalize/tree/umd

[@stdlib/number/float64/base/set-high-word]: https://github.com/stdlib-js/number-float64-base-set-high-word/tree/umd

[@stdlib/number/float64/base/set-low-word]: https://github.com/stdlib-js/number-float64-base-set-low-word/tree/umd

[@stdlib/number/float64/base/signbit]: https://github.com/stdlib-js/number-float64-base-signbit/tree/umd

[@stdlib/number/float64/base/to-binary-string]: https://github.com/stdlib-js/number-float64-base-to-binary-string/tree/umd

[@stdlib/number/float64/base/to-float32]: https://github.com/stdlib-js/number-float64-base-to-float32/tree/umd

[@stdlib/number/float64/base/to-int32]: https://github.com/stdlib-js/number-float64-base-to-int32/tree/umd

[@stdlib/number/float64/base/to-int64-bytes]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes/tree/umd

[@stdlib/number/float64/base/to-uint32]: https://github.com/stdlib-js/number-float64-base-to-uint32/tree/umd

[@stdlib/number/float64/base/to-words]: https://github.com/stdlib-js/number-float64-base-to-words/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
