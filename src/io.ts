import {Monad, Apply} from './category';
import {Func0, Func1, Unit} from './utils';

export type Func0<Z> = () => Z


export class IO<T> implements Monad<T> {
  constructor(private readonly _fn: Func0<T>) {
  }

  map<B>(f: Func1<T, B>): IO<B> {
    return new IO(() => f(this._fn()));
  }

  ap<B>(b: IO<Func1<T, B>>): IO<B> {
    return new IO(() => b.unsafePerformIO()(this._fn()));
  }

  chain<B>(f: Func1<T, IO<B>>): IO<B> {
    return new IO(() => this.map(f).unsafePerformIO().unsafePerformIO());
  }

  unsafePerformIO(): T {
    return this._fn();
  }

  of<R>(f: R): IO<R> {
    return new IO<R>(() => f);
  }
}

export const io = <A>(f: Func0<A>): IO<A> => new IO(f);

