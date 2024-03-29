import { Nothing, Just, maybeFunction } from '../src/index.js';
import * as test from '../test-utils.js';

test._nan(maybeFunction, Nothing);
test._plusInfinity(maybeFunction, Nothing);
test._minusInfinity(maybeFunction, Nothing);
test._undefined(maybeFunction, Nothing);
test._null(maybeFunction, Nothing);
test._true(maybeFunction, Nothing);
test._false(maybeFunction, Nothing);
test._function(maybeFunction, Just);
test._number(maybeFunction, Nothing);
test._object(maybeFunction, Nothing);
test._string(maybeFunction, Nothing);
test._symbol(maybeFunction, Nothing);
test._integer(maybeFunction, Nothing);
test._promise(maybeFunction, Nothing);
test._array(maybeFunction, Nothing);
test._typedArray(maybeFunction, Nothing);
test._map(maybeFunction, Nothing);
test._set(maybeFunction, Nothing);
