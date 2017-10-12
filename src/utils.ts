export type Unit = () => void;
export type Func0<Z> = () => Z
export type Func1<A, Z> = (a: A) => Z
export type Func2<A, B, Z> = (a: A, b: B) => Z
export type Func3<A, B, C, Z> = (a: A, b: B, c: C) => Z
export type Func<A, B, C, Z> = Func1<A, Z> | Func2<A, B, Z> | Func3<A, B, C, Z>

export function compose<A, Z>(f1: Func1<A, Z>): Func1<A, Z>;
export function compose<A, B, Z>(f1: Func1<B, Z>, f2: Func1<A, B>): Func1<A, Z>;
export function compose<A, B, C, Z>(f1: Func1<C, Z>, f2: Func1<B, C>, f3: Func1<A, B>): Func1<A, Z>;
export function compose(...args: Function[]): Function {
  const argsr = args.reverse();
  return (x: any) => argsr.reduce((p, c) => c(p), x);
}
