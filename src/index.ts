import * as L from './list.js';
import {readArgs} from './readArgs';
import {trace} from './log';


trace(L.fromArray([ 1, 2, 3, 4, 5]).toString()).unsafePerformIO();



