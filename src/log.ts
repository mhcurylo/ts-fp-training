import {io, IO} from './io';

export const log = (s: string): IO<void> => io(() => {console.log(s)});
