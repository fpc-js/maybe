import { isArray } from '@fpc/types';
import { Nothing, Just } from './maybe';

export const maybeArray = val => (
  isArray(val) ? new Just(val) : Nothing
);
