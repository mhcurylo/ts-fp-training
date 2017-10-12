import {Func1, Func2} from './utils';

export interface Functor<T> {
  map<M>(f: (v: T) => M): Functor<M>;
}
export const fmap = <T, R> (f: (a: T) => R) => (functor: Functor<T>) => functor.map(f);

export interface Apply<T> extends Functor<T> {
  ap<R>(f: Apply<Func1<T, R>>): Apply<R>;
}

export interface Applicative<T> extends Apply<T> {
  of<R>(f: R): Applicative<R>;
}

export interface Chain<T> {
  chain<U>(f: Func1<T, Chain<U>>): Chain<U>;
}

export interface Monad<T> extends Applicative<T>, Chain<T> {
}

export interface Foldable<T> {
  reduce<R>(f: Func2<R, T, R>, v: R): R
}

