'use strict';

import * as L from './list';
import {readArgs} from './readArgs';
import {trace} from './log';

readArgs
  .map(a => a.join(', '))
  .chain(trace).unsafePerformIO();

trace(L.fromArray([1,2,3,4,5]).map(x => x + 1).toString()).unsafePerformIO();
trace(L.fromArray(['1','2','3','4','5']).reduce((p, c) => p + c, "").toString()).unsafePerformIO();
