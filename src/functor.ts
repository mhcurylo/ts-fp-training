import {Func1} from './utils';

export interface Functor<T> {
  map<M>(f: Func1<T, M>): Functor<M>;
}
