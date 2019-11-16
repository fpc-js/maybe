import { isInteger } from '@fpc/types';
import { Nothing, Just } from './maybe';

export const maybeInteger = val => (
  isInteger(val) ? new Just(val) : Nothing
);
