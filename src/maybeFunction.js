import { isFunction } from '@fpc/types';
import { Nothing, Just } from './maybe';

export const maybeFunction = val => (
  isFunction(val) ? new Just(val) : Nothing
);
