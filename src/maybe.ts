import { Monad, Functor } from './category';
import {Func0, Func1} from './utils';

export type MaybeKind = 'NOTHING' | 'JUST';

export interface Maybe<T> extends Monad<T>, Functor<T> {
  kind: MaybeKind;
  map<R>(f: (v: T) => R): Maybe<R>
  join<R>(): Maybe<R>;
  of<R>(v: R): Maybe<R>;
  chain<R>(f: (v: T) => Maybe<R>): Maybe<R>;
  ap<R>(m: Maybe<Func1<T, R>>): Maybe<R>;
  get(): T;
  getOrElse(v: T): T;
  isJust(): boolean;
}

export class Nothing<T> implements Maybe<T> {
  kind: 'NOTHING' = 'NOTHING';

  of<R>(v: R): Maybe<R> {
    return new Nothing() as Nothing<R>;
  }

  map<R>(f: (v: T) => R): Nothing<R> {
    return new Nothing() as Nothing<R>;
  }

  chain<R>(f: (v: T) => Maybe<R>): Nothing<R> {
    return new Nothing() as Nothing<R>;
  }

  ap<R>(m: Maybe<Func1<T, R>>): Nothing<R> {
    return new Nothing() as Nothing<R>;
  }

  join<R>(): Nothing<R> {
    return new Nothing() as Nothing<R>;
  }

  get(): T {
    throw 'Cant touch this'
  }

  getOrElse(v: T): T {
    return v;
  }
  isJust(): boolean {
    return false;
  }
}

export class Just<T> implements Maybe<T> {
  kind: 'JUST' = 'JUST';

  private constructor(private readonly _val: T) {
  }

  of<R>(v: R | null | undefined): Maybe<R> {
    return Just.of(v);
  }

  static of<R>(v: R | null | undefined): Maybe<R> {
      return v === null || v === undefined ? new Nothing() as Nothing<R> : new Just(v) as Just<R>;
  }

  map<R>(f: (v: T) => R): Just<R> {
    return new Just(f(this._val)) as Just<R>;
  }

  chain<R>(f: (v: T) => Maybe<R>): Maybe<R> {
    return f(this._val);
  }

  ap<R>(m: Maybe<Func1<T, R>>): Maybe<R> {
    return m.isJust() ? new Just(m.get()(this._val)) : new Nothing() as Maybe<R>;
  }

  join<R>(): Maybe<R> {
    if (isMaybe(this._val)) {
      return this._val as Maybe<R>;
    } else {
      throw 'NOTHING TO DO';
    }
  }

  get(): T {
    return this._val;
  }

  getOrElse(v: T): T {
    return this._val;
  }
  isJust(): boolean {
    return true;
  }
}

export const getOrElse = <T> (v: T) => <T>(m: Maybe<T>) => m.getOrElse(v);

function isMaybe(v: any): v is Maybe<any> {
  return v.kind === 'JUST' || v.kind === 'NOTHING' ? true : false;
}
