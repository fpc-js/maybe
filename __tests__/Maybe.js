import { Maybe, Nothing, Just } from '../src';

/* global Symbol */

test('Maybe(null) instanceof Maybe', () =>
  expect(Maybe(null)).toBeInstanceOf(Maybe)
);

test('Maybe(undefined) instanceof Maybe', () =>
  expect(Maybe(undefined)).toBeInstanceOf(Maybe)
);

test('Maybe(0) instanceof Maybe', () =>
  expect(Maybe(0)).toBeInstanceOf(Maybe)
);

test('Maybe(0) instanceof Just', () =>
  expect(Maybe(0)).toBeInstanceOf(Just)
);

test('Maybe(null) = Nothing', () =>
  expect(Maybe(null)).toBe(Nothing)
);

test('Maybe(undefined) = Nothing', () =>
  expect(Maybe(undefined)).toBe(Nothing)
);

test('Maybe(true) = Just(true)', () => {
  expect(Maybe(true)).toBeInstanceOf(Just);
  expect(Maybe(true).get()).toBe(true);
});

test('Maybe(false) = Just(false)', () => {
  expect(Maybe(false)).toBeInstanceOf(Just);
  expect(Maybe(false).get()).toBe(false);
});

test('Maybe(0) = Just(0)', () => {
  expect(Maybe(0)).toBeInstanceOf(Just);
  expect(Maybe(0).get()).toBe(0);
});

test('Maybe(Symbol()) = Just(Symbol())', () => {
  const sym = Symbol('desc');
  expect(Maybe(sym)).toBeInstanceOf(Just);
  expect(Maybe(sym).get()).toBe(sym);
});

test('Maybe(_ => 0) = Just(_ => 0)', () => {
  const fn = _ => 0;
  expect(Maybe(fn)).toBeInstanceOf(Just);
  expect(Maybe(fn).get()).toBe(fn);
});

test('Maybe({}) = Just({})', () => {
  const obj = {};
  expect(Maybe(obj)).toBeInstanceOf(Just);
  expect(Maybe(obj).get()).toBe(obj);
});

test('Maybe("") = Just("")', () => {
  expect(Maybe('')).toBeInstanceOf(Just);
  expect(Maybe('').get()).toBe('');
});

test('Maybe(Just(0)) = Just(0)', () => {
  expect(Maybe(Just(0))).toBeInstanceOf(Just);
  expect(Maybe(Just(0)).get()).toBe(0);
});
