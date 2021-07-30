import { isObject } from '@fpc/types';
import { Nothing, Just } from './maybe.js';

export const maybeObject = val => (
  isObject(val) ? new Just(val) : Nothing
);
