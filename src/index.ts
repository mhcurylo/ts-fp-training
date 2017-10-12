'use strict';
import {Functor} from './category';
import {Just, Maybe, Nothing} from './maybe';

console.log('I compile!');


const name = "ateusz";

const greetMat = (str: string): Maybe<string> => str === 'Mateusz' ? Just.of(str) : new Nothing();

console.log(Just.of(name)
    .chain(greetMat)
    .map((x: string): string => `hello ${x}`)
    .getOrElse('Get a name'));

