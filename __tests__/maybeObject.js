import { Nothing, Just, maybeObject } from '../src';
import * as test from '../test-utils';

test._nan(maybeObject, Nothing);
test._plusInfinity(maybeObject, Nothing);
test._minusInfinity(maybeObject, Nothing);
test._undefined(maybeObject, Nothing);
test._null(maybeObject, Nothing);
test._true(maybeObject, Nothing);
test._false(maybeObject, Nothing);
test._function(maybeObject, Just);
test._number(maybeObject, Nothing);
test._object(maybeObject, Just);
test._string(maybeObject, Nothing);
test._symbol(maybeObject, Nothing);
test._integer(maybeObject, Nothing);
test._array(maybeObject, Just);
test._typedArray(maybeObject, Just);
test._map(maybeObject, Just);
test._set(maybeObject, Just);