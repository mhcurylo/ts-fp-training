import * as L from './list.js';

export enum Actions {
  ADD,
  DELETE,
  DONE
}

export interface AddTask {
  readonly kind: Actions.ADD;
  readonly date: string;
  readonly at: string;
  readonly task: string;
  readonly id: number;
}

export interface DeleteTask {
  readonly kind: Actions.DELETE;
  readonly date: string;
  readonly id: number;
}

export interface DoneTask {
  readonly kind: Actions.DONE;
  readonly date: string;
  readonly id: number;
}

export type Task = AddTask | DeleteTask | DoneTask;

export const addTask = (date: string, at: string, task: string, id: number): AddTask => ({kind: Actions.ADD, date, at, task, id});
export const deleteTask = (date: string,  id: number): DeleteTask => ({kind: Actions.DELETE, date, id});
export const doneTask = (date: string, id: number): DoneTask => ({kind: Actions.DONE, date, id});
