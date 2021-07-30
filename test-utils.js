import { Nothing, Just } from './src/index.js';

/* globals Promise, Symbol, Int8Array, Map, Set */
/* eslint-disable no-magic-numbers */

const testValue = (val, strVal, fn, exp) => {
  if (exp === Nothing) {
    test(`${fn.name}(${strVal}) = Nothing`, () =>
      expect(fn(val)).toBe(Nothing)
    );
  } else if (exp === Just) {
    test(`${fn.name}(${strVal}) = Just(${strVal})`, () =>
      expect(fn(val).get()).toBe(val)
    );
  } else {
    throw new Error('Invalid expected value');
  }
};

/* NaN, ±Infinity, undefined, null */

export const _nan = (fn, exp) =>
  testValue(NaN, 'NaN', fn, exp);

export const _plusInfinity = (fn, exp) =>
  testValue(Infinity, 'Infinity', fn, exp);

export const _minusInfinity = (fn, exp) =>
  testValue(-Infinity, '-Infinity', fn, exp);

export const _undefined = (fn, exp) =>
  testValue(undefined, 'undefined', fn, exp);

export const _null = (fn, exp) =>
  testValue(null, 'null', fn, exp);

/* Boolean, Function, Number, Object, String, Symbol, Integer */

export const _true = (fn, exp) =>
  testValue(true, 'true', fn, exp);

export const _false = (fn, exp) =>
  testValue(false, 'false', fn, exp);

export const _function = (fn, exp) =>
  testValue(() => undefined, '() => undefined', fn, exp);

export const _number = (fn, exp) =>
  testValue(0.1, '0.1', fn, exp);

export const _object = (fn, exp) =>
  testValue({}, '{}', fn, exp);

export const _string = (fn, exp) =>
  testValue('', '\'\'', fn, exp);

export const _symbol = (fn, exp) =>
  testValue(Symbol('desc'), 'Symbol()', fn, exp);

export const _integer = (fn, exp) =>
  testValue(0, '0', fn, exp);

/* Promise, Array, TypedArray, Map, Set */
export const _promise = (fn, exp) =>
  testValue(Promise.resolve(0), 'Promise', fn, exp);

export const _array = (fn, exp) =>
  testValue([], '[]', fn, exp);

export const _typedArray = (fn, exp) =>
  testValue(new Int8Array(2), '<TypedArray>', fn, exp);

export const _map = (fn, exp) =>
  testValue(new Map([[0, 'zero']]), '<Map>', fn, exp);

export const _set = (fn, exp) =>
  testValue(new Set([0]), '<Set>', fn, exp);
