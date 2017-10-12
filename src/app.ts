import * as A from './actions.js';

export const actionFromArgs = (args: string[], date: string): A.Task => {
  const act = args[0];

  switch(act) {
    case 'add':
      return A.addTask(args[1], args[2], date);
    case 'rm':
      return A.deleteTask(args[1], date);
    case 'done':
      return A.doneTask(args[1], date);
    case 'list':
      return A.listTask();
  };
}

