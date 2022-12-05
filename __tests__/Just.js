import { Maybe, Nothing, Just } from '../src/index.js';
import { jest } from '@jest/globals';

const just0 = Just(0);

test('Just(0) instanceof Maybe', () =>
  expect(just0).toBeInstanceOf(Maybe)
);

test('Just(0) instanceof Just', () =>
  expect(just0).toBeInstanceOf(Just)
);

test('Just(0).isEmpty = false', () =>
  expect(just0.isEmpty).toBe(false)
);

test('Just(0).nonEmpty = true', () =>
  expect(just0.nonEmpty).toBe(true)
);

test('Just(0).filter(_ => false) = Nothing', () =>
  expect(just0.filter(_ => false)).toBe(Nothing)
);

test('Just(0).filter(_ => true) = Just(0)', () =>
  expect(just0.filter(_ => true)).toBe(just0)
);

test('Just(0).map(x => x + 1) = Just(1)', () =>
  expect(just0.map(x => x + 1).get()).toBe(1)
);

test('Just(0).map(x => Maybe(x + 1) = Just(1)', () =>
  expect(just0.map(x => Maybe(x + 1)).get()).toBe(1)
);

test('Just(0).forEach(fn) calls `fn(0)`', () => {
  const fn = jest.fn(x => x);
  expect(just0.forEach(fn)).toBe(just0);
  expect(fn.mock.calls.length).toBe(1);
  expect(fn.mock.calls[0][0]).toBe(0);
});

test('Just(0).get() = 0', () =>
  expect(just0.get()).toBe(0)
);

test('Just(0).getOrElse(1) = 0', () =>
  expect(just0.getOrElse(1)).toBe(0)
);

test('Just(0).getOrElse(_ => 1) = 0', () =>
  expect(just0.getOrElse(_ => 1)).toBe(0)
);

test('Just(0).getOrThrow() = 0', () =>
  expect(just0.getOrThrow()).toBe(0)
);

test('Just(0).getOrThrow(error) = 0', () =>
  expect(just0.getOrThrow(new Error('Custom!'))).toBe(0)
);

test('Just(0).orElse(1) = Just(0)', () =>
  expect(just0.orElse(1)).toBe(just0)
);

test('Just(0).orElse(_ => 1) = Just(0)', () =>
  expect(just0.orElse(_ => 1)).toBe(just0)
);

test('Just(0).toString() = "0"', () =>
  expect(just0.toString()).toBe('0')
);

test('const [value] = Just(0) gives `0`', () => {
  const [value] = just0;
  expect(value).toBe(0);
});

test('const [v1, v2, v3] = Just(0) gives `0, undefined, undefined`', () => {
  const [v1, v2, v3] = just0;
  expect(v1).toBe(0);
  expect(v2).toBe(undefined);
  expect(v3).toBe(undefined);
});
