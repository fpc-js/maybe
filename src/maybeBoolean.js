import { isBoolean } from '@fpc/types';
import { Nothing, Just } from './maybe.js';

export const maybeBoolean = val => (
  isBoolean(val) ? new Just(val) : Nothing
);
