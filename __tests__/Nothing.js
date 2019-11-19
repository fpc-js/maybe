import { Maybe, Nothing, Just } from '../src';

const defaultError = new Error('Trying to get value of Nothing');

test('Nothing instanceof Maybe', () =>
  expect(Nothing).toBeInstanceOf(Maybe)
);

test('Maybe(null) = Nothing', () =>
  expect(Maybe(null)).toBe(Nothing)
);

test('Maybe(undefined) = Nothing', () =>
  expect(Maybe(undefined)).toBe(Nothing)
);

test('Maybe(Nothing) = Nothing', () =>
  expect(Maybe(Nothing)).toBe(Nothing)
);

test('Nothing.isEmpty = true', () =>
  expect(Nothing.isEmpty).toBe(true)
);

test('Nothing.nonEmpty = false', () =>
  expect(Nothing.nonEmpty).toBe(false)
);

test('Nothing.filter(_ => false) = Nothing', () =>
  expect(Nothing.filter(_ => false)).toBe(Nothing)
);

test('Nothing.filter(_ => true) = Nothing', () =>
  expect(Nothing.filter(_ => true)).toBe(Nothing)
);

test('Nothing.map(_ => 1) = Nothing', () =>
  expect(Nothing.map(_ => 1)).toBe(Nothing)
);

test('Nothing.forEach(fn) does not call `fn`', () => {
  const fn = jest.fn(_ => 1);
  expect(Nothing.forEach(fn)).toBe(Nothing);
  expect(fn.mock.calls.length).toBe(0);
});

test('Nothing.get() throws an error', () =>
  expect(() => Nothing.get()).toThrow(defaultError)
);

test('Nothing.get(error) acts like Nothing.getOrThrow(error)', () => {
  const error = new TypeError('Custom!');
  expect(() => Nothing.get(error)).toThrow(error);
});

test('Nothing.getOrElse(1) = 1', () =>
  expect(Nothing.getOrElse(1)).toBe(1)
);

test('Nothing.getOrElse(_ => 1) = 1', () =>
  expect(Nothing.getOrElse(_ => 1)).toBe(1)
);

test('Nothing.getOrThrow() throws an error', () =>
  expect(() => Nothing.getOrThrow()).toThrow(defaultError)
);

test('Nothing.getOrThrow(error) throws the given error', () => {
  const error = new TypeError('Custom!');
  expect(() => Nothing.getOrThrow(error)).toThrow(error);
});

test('Nothing.orElse(1) = Just(1)', () => {
  const def = Nothing.orElse(1);
  expect(def).toBeInstanceOf(Just);
  expect(def.get()).toBe(1);
});

test('Nothing.orElse(_ => 1) = Just(1)', () => {
  const def = Nothing.orElse(_ => 1);
  expect(def).toBeInstanceOf(Just);
  expect(def.get()).toBe(1);
});

test('Nothing.toString() = ""', () =>
  expect(Nothing.toString()).toBe('')
);

test('const [value] = Nothing gives undefined', () => {
  const [value] = Nothing;

  expect(value).toBe(undefined);
});
