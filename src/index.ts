import * as L from './list.js';

enum Actions {
  ADD,
  DELETE,
  DONE
}

const actions = [
 {action: Actions.ADD, date: '11-11-2017', before: '11-11-2017', mission: 'Write this app', id: 2 },
 {action: Actions.DONE, date: '12-11-2017', id: 3},
 {action: Actions.DELEte, date: '12-11-2017', id: 4}
];


console.log((L.empty() as L.List<string>).cons('aa'));
console.log(L.of('aa').cons('l1'));
console.log(L.fromArray([ 1, 2, 3, 4, 5]));
