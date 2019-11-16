import { isString } from '@fpc/types';
import { Nothing, Just } from './maybe';

export const maybeString = val => (
  isString(val) ? new Just(val) : Nothing
);
