import { isPromise } from '@fpc/types';
import { Nothing, Just } from './maybe.js';

export const maybePromise = val => (
  isPromise(val) ? new Just(val) : Nothing
);
