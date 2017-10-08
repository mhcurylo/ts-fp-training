export type Func1<A, Z> = (a: A) => Z
export type Func2<A, B, Z> = (a: A, b: B) => Z
export type Func3<A, B, C, Z> = (a: A, b: B, c: C) => Z
export type Func<A, B, C, Z> = Func1<A, Z> | Func2<A, B, Z> | Func3<A, B, C, Z>

export function flip<A, B, Z>(f: Func2<A, B, Z>): Func2<B, A, Z> {
       return (b: B, a: A) => f(a, b);
}
