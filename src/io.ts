import {Functor} from './functor';
import {Func0, Func1} from './utils';

export type Func0<Z> = () => Z


export class IO<T> implements Functor<T> {
  constructor(private readonly _fn: Func0<T>) {
  }

  map<B>(f: Func1<T, B>): IO<B> {
    return new IO(() => f(this._fn()));
  }

  unsafePerformIO(): void {
    this._fn();
  }
}

export const io = <A>(f: Func0<A>): IO<A> => new IO(f);
