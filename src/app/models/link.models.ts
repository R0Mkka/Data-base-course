export enum LabStatuses {
  Checked = 'Checked',
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
  tasks: ILink[];
}
