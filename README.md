# @fpc/maybe

<div align="center">
  <a href="https://travis-ci.org/fpc-js/maybe" target="_blank">
    <img src="https://travis-ci.org/fpc-js/maybe.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://snyk.io/test/github/fpc-js/maybe?targetFile=package.json">
    <img src="https://snyk.io/test/github/fpc-js/maybe/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/fpc-js/maybe?targetFile=package.json" style="max-width:100%;">
  </a>
  <a href="https://coveralls.io/github/fpc-js/maybe?branch=master" target="_blank">
    <img src="https://coveralls.io/repos/github/fpc-js/maybe/badge.svg?branch=master" alt="Coverage Status">
  </a>
  <a href="https://github.com/semantic-release/semantic-release" target="_blank">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release">
  </a>
</div>

A `Maybe` is basically an array of at most one element: `map`, `filter`
and `forEach` can be used like usual.
When a function may return `null` or `undefined` this pattern can be used
to make the absence of value more explicit and less error prone<sup>[<a href="https://xkcd.com/285">citation needed</a>]</sup>.

## Create new Maybe

```javascript
import { Maybe, Nothing, Just } from '@fpc/maybe';

Maybe(null) === Nothing; // true
Maybe(undefined) === Nothing; // true

const maybeThree = Maybe(3); // Just(3)
maybeThree.get() === Just(3).get() // true
```

Note that `Just`, unlike `Maybe`, doesn't make any check.
A `Just` instance is always created:

```javascript
const m1 = Just(null);

m1.isEmpty; // false
m1.get(); // null

const m2 = Maybe('some value');

// `Maybe`s *can* be nested using `Just`
m2 === Just(m2); // false
m2 === Just(m2).get(); // true
Just(Nothing) === Nothing; // false

// They *cannot* be nested using `Maybe`
m2 === Maybe(m2); // true
Maybe(Nothing) === Nothing; // true
```

## Maybe API

### .isEmpty

This property is `true` on Nothing, `false` otherwise.

```javascript
Maybe(null).isEmpty; // true
Maybe(undefined).isEmpty; // true
Maybe(0).isEmpty; // false
```

### .nonEmpty

Negation of `isEmpty`.

### .get()

Returns `value` when called on `Just(value)`, throws an error when
called on `Nothing`.

```javascript
Maybe(0).get(); // 0
Maybe(null).get(); // Error: Trying to get value of Nothing
```

### .getOrThrow()

Like `get`, allows to customize the `Error` to throw.

```javascript
Maybe(null).getOrThrow(new Error('Uh-oh'));
```

### .filter()

`Just(value).filter(fn)` returns `Just(value)` if `fn(value)` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy),
otherwise `Nothing` is returned.

`Nothing.filter(fn)` is always `Nothing`.

### .map()

`Just(value).map(fn)` returns `Maybe(fn(value))`, then:

- If `fn(value)` returns a `Maybe` instance, that instance is simply returned by `map`
- If `fn(value)` is `null` or `undefined` the method returns `Nothing`
- The result will be `Just(fn(value))` otherwise

`Nothing.map(fn)` is always `Nothing`.

### .forEach()

`Just(value).forEach(fn)` calls `fn(value)`.

`Nothing.forEach(fn)` does nothing.

`forEach` always returns the `Maybe` itself.

### .getOrElse()

`Just(value).getOrElse(defaultValue)` always returns `value`.

`Nothing.getOrElse(defaultValue)` returns `defaultValue()` if it's a function,
just `defaultValue` otherwise.

### .orElse()

`Just(value).orElse(defaultValue)` always returns `Just(value)`.

`Nothing.orElse(defaultValue)` returns `Maybe(defaultValue())` if it's a function,
`Maybe(defaultValue)` otherwise.

### .toString()

`Nothing.toString()` is an empty string.

`Just(value).toString()` returns `String(value)`.

### [Symbol.iterator]

Maybes implement the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol).

```javascript
import { Maybe, Nothing, Just } from '@fpc/maybe';

Array.from(Nothing); // []
Array.from(Just(0)); // [ 0 ]

const [ v1 ] = Nothing; // v1 is `undefined`
const [ v2 ] = Just(0); // v2 is `0`
```

## Type specific constructors

Every is* function in [@fpc/types](https://github.com/fpc-js/types) has a
maybe* counterpart.

```javascript
import {
  maybeArray,
  maybeBoolean,
  maybeFunction,
  maybeInteger,
  maybeIterable,
  maybeNumber,
  maybeObject,
  maybePromise,
  maybeString,
  maybeSymbol
} from '@fpc/maybe';
```

For example `maybeArray` is defined as:

```javascript
import { isArray } from '@fpc/types';
import { Nothing, Just } from '@fpc/maybe';

const maybeArray = val => (
  isArray(val) ? new Just(val) : Nothing
);
```
