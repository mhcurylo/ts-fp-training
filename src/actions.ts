import * as L from './list.js';

export enum Actions {
  ADD,
  DELETE,
  DONE,
  LIST
}

export interface AddTask {
  readonly kind: Actions.ADD;
  readonly date: string;
  readonly at: string;
  readonly task: string;
}

export interface DeleteTask {
  readonly kind: Actions.DELETE;
  readonly date: string;
  readonly id: string;
}

export interface DoneTask {
  readonly kind: Actions.DONE;
  readonly date: string;
  readonly id: string;
}

export interface ListTask {
  kind: Actions.LIST;
}

export type Task = AddTask | DeleteTask | DoneTask | ListTask;

export const addTask = (at: string, task: string, date: string): AddTask => ({kind: Actions.ADD, date, at, task});
export const deleteTask = (id: string, date: string): DeleteTask => ({kind: Actions.DELETE, date, id});
export const doneTask = (id: string, date: string): DoneTask => ({kind: Actions.DONE, date, id});
export const listTask = (): ListTask => ({kind: Actions.LIST});
