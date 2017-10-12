import {Chain, Functor} from './category';

export interface Maybe<T> extends Functor<T>, Chain<T> {
  chain<R>(f: (v: T) => Maybe<R>): Maybe<R>;
  map<R>(f: (v: T) => R): Maybe<R>;
  get(): T;
  getOrElse(v: T): T;
  isJust(): boolean;
}

export class Nothing<T> implements Maybe<T> {
  get(): T {
    throw 'Do not do this';
  }
  getOrElse(v: T): T {
    return v;
  }
  isJust() {
    return false;
  }
  map<R>(f: (v: T) => R): Nothing<R> {
      return new Nothing() as Nothing<R>;
  };
  chain<R>(f: (v: T) => Maybe<R>): Nothing<R> {
      return new Nothing() as Nothing<R>;
  };
}

export class Just<T> implements Maybe<T> {
    constructor(private readonly value: T) {
    }
    get(): T {
        return this.value;
    }

    getOrElse(v: T): T {
        return this.value;
    }

    isJust() {
        return true;
    }
    map<R>(f: (v: T) => R): Just<R> {
        return new Just(f(this.value));
    };
    chain<R>(f: (v: T) => Maybe<R>): Maybe<R> {
        return f(this.value);
    };
    static of<B>(val: B | null | undefined): Maybe<B> {
        return val !== null && val !== undefined ? new Just(val) : new Nothing() as Maybe<B>;
    }
}

