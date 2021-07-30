import { isNumber } from '@fpc/types';
import { Nothing, Just } from './maybe.js';

export const maybeNumber = val => (
  isNumber(val) ? new Just(val) : Nothing
);
