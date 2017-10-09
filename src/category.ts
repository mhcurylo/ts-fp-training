import {Func1} from './utils';

export interface Functor<T> {
  map<M>(f: Func1<T, M>): Functor<M>;
}

export interface Apply<T> extends Functor<T> {
  ap<R>(f: Apply<Func1<T, R>>): Apply<R>;
}

export interface Applicative<T> extends Apply<T> {
  of<R>(f: R): Applicative<R>;
}

export interface Chain<T> extends Apply<T> {
  chain<U>(f: Func1<T, Chain<U>>): Chain<U>;
}

export interface Monad<T> extends Apply<T>, Chain<T> {
}
