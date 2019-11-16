import { isIterable } from '@fpc/types';
import { Nothing, Just } from './maybe';

export const maybeIterable = val => (
  isIterable(val) ? new Just(val) : Nothing
);
