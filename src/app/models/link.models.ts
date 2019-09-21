export enum LabStatuses {
  Done = 'Done',
  InProgress = 'InProgress',
  ToDo = 'ToDo'
}

export interface ILink {
  label: string;
  href: string;
}

export interface ILabLink extends ILink {
  status: LabStatuses;
}
