import {flip} from './utils.js';

export enum ListType {
  EMPTY,
  NODE
}

export interface List<T> {
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
}

export const cons = <T>(h: T, t: List<T>): List<T> => t.cons(h);
export const consF = flip(cons);
export const head = <T>(l: List<T>): T => l.head();
export const tail = <T>(l: List<T>): List<T> => l.tail();
export const empty = <T>(): List<T> => new EmptyList() as List<T>;
export const of = <T>(el: T): List<T> => new ListNode(el, empty() as List<T>);
export const fromArray = <T>(arr: Array<T>) => arr.reverse().reduce(consF, empty() as List<T>);
