/* global Symbol */

/* eslint-disable-next-line func-style */
function Ctor (props) {
  /* eslint-disable-next-line guard-for-in */
  for (const key in props) {
    this[key] = props[key];
  }
}

Ctor.prototype = {
  get (e) {
    throw e instanceof Error ? e : new Error('Trying to get value of Nothing');
  },

  getOrThrow (e) {
    return this.get(e);
  },

  filter (fn) {
    /* eslint-disable-next-line no-use-before-define */
    return this.isEmpty ? this : fn(this.get()) ? this : Nothing;
  },

  map (fn) {
    /* eslint-disable-next-line no-use-before-define */
    return this.isEmpty ? this : Maybe(fn(this.get()));
  },

  forEach (fn) {
    /* eslint-disable-next-line no-sequences */
    return this.isEmpty || fn(this.get()), this;
  },

  getOrElse (def) {
    return this.nonEmpty ? this.get() : typeof def === 'function' ? def() : def;
  },

  orElse (def) {
    /* eslint-disable-next-line no-use-before-define */
    return this.isEmpty ? Maybe(this.getOrElse(def)) : this;
  },

  toString () {
    return this.isEmpty ? '' : String(this.get());
  },

  [Symbol.iterator] () {
    let counter = 0;

    const next = () => (
      /* eslint-disable-next-line no-plusplus */
      counter++ > 0 ? { done: true } : { done: false, value: this.get() }
    );

    return { next };
  },
};

export const Nothing = new Ctor({ isEmpty: true, nonEmpty: false });

/* eslint-disable-next-line func-style */
export function Just (val) {
  if (this instanceof Just) {
    this.get = () => val;
  } else {
    return new Just(val);
  }
}

Just.prototype = new Ctor({ isEmpty: false, nonEmpty: true });

export const Maybe = val => (
  val == null ? Nothing : val instanceof Maybe ? val : new Just(val)
);

Maybe.prototype = Ctor.prototype;
