import {io, IO} from './io';

export const trace = (s: string): IO<string> => io(() => {console.log(s); return s});
export const log = (s: string): IO<void> => io(() => {console.log(s)});
