import { Functor } from './category';

export interface Maybe<T> {
  get(): T;
  getOrElse(v: T): T;
  isJust(): boolean;
}

// export class Nothing<T> implements Maybe<T> {
//
// }
//
// export class Just<T> implements Maybe<T> {
// }

