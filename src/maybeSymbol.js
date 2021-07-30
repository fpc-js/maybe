import { isSymbol } from '@fpc/types';
import { Nothing, Just } from './maybe.js';

export const maybeSymbol = val => (
  isSymbol(val) ? new Just(val) : Nothing
);
