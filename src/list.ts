import {Foldable, Functor} from './category';
import {Func1, Func2, flip} from './utils';

export enum ListType {
  EMPTY,
  NODE
}

export interface List<T> extends Foldable<T>, Functor<T> {
  kind: ListType;
  cons: (el: T) => List<T>;
  head: () => T;
  tail: () => List<T>;
}

class EmptyList<T> implements List<T> {
  kind = ListType.EMPTY;
  cons(el: T): List<T> {
    return new ListNode(el, this) as List<T>;
  }
  head(): T {
    throw 'HEAD ON EMPTY LIST';
  }

  tail(): List<T> {
    throw 'TAIL ON EMPTY LIST';
  }

  map<R>(f: Func1<T,R>): List<R> {
    return empty() as List<R>;
  }

  reduce<R>(f: Func2<R,T,R> , v: R): R {
    return v;
  }
}

class ListNode<T> implements List<T> {
  kind = ListType.NODE;
  constructor(private _head: T, private _tail: List<T>) {
  }

  cons(el: T): List<T> {
    return new ListNode(el, this);
  }

  head(): T {
    return this._head;
  }

  tail(): List<T> {
    return this._tail;
  }

  map<R>(f: Func1<T,R>): List<R> {
    return new ListNode(f(this._head), this._tail.map(f) as List<R>);
  }

  reduce<R>(f: Func2<R,T,R> , v: R): R {
    return this._tail.reduce(f, f(v, this._head));
  }
}

export const cons = <T>(h: T, t: List<T>): List<T> => t.cons(h);
export const consF = flip(cons);
export const head = <T>(l: List<T>): T => l.head();
export const tail = <T>(l: List<T>): List<T> => l.tail();
export const empty = <T>(): List<T> => new EmptyList() as List<T>;
export const single = <T>(el: T): List<T> => new ListNode(el, empty() as List<T>);
export const fromArray = <T>(arr: Array<T>): List<T> => arr.reverse().reduce(consF, empty() as List<T>) as List<T>;

