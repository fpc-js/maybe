import { isInteger } from '@fpc/types';
import { Nothing, Just } from './maybe.js';

export const maybeInteger = val => (
  isInteger(val) ? new Just(val) : Nothing
);
