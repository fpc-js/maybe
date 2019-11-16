import { isObject } from '@fpc/types';
import { Nothing, Just } from './maybe';

export const maybeObject = val => (
  isObject(val) ? new Just(val) : Nothing
);
