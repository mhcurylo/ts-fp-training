'use strict';

import * as L from './list';
import {readArgs} from './readArgs';
import {trace, log} from './log';
import {Just, Maybe, getOrElse} from './maybe';
import {fmap} from './category';
import {Func1} from './utils';
import {string2RegExp} from 'fuse-box/dist/typings/Utils';

const head = <T>(arr: T[]): Maybe<T> => Just.of(arr[0]);
const greet = (name: string) => `Hello! ${name}`;
const failMessage = 'What is your name stranger?';
const drop = <T> (num: number) => (arr: T[]) => arr.slice(num);

readArgs
    .map(drop(2))
    .map(head)
    .map(fmap(greet))
    .map(getOrElse(failMessage))
    .chain(log).unsafePerformIO();
