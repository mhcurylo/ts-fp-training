import {Foldable, Functor} from './category';
import {Func1, Func2, flip} from './utils';

export interface List<T> {
  cons: (el: T) => List<T>;
  head: () => T;
  tail: () => List<T>;
}
//
// class EmptyList<T> implements List<T> {
//
// }
//
// class ListNode<T> implements List<T> {
// }

