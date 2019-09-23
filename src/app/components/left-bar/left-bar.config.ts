import { ILabLink, LabStatuses, ILink } from '@models/link.models';

interface Lab {
  index: number;
  tasks: ILink[];
  status: LabStatuses;
}

const COMMON_LAB_LABEL_PART = 'Лабораторная №';
const COMMON_LAB_HREF_PART = 'lab';

const COMMON_TASK_LABEL_PART = 'Задание №';
const COMMON_TASK_HREF_PART = 'task';

const labs: Lab[] = [
  {
    index: 1,
    tasks: [
      ...getTasks(1, [1, 2, 3, 4, 5, 6, 7])
    ],
    status: LabStatuses.Checked
  },
  {
    index: 2,
    tasks: [],
    status: LabStatuses.Done
  },
  {
    index: 3,
    tasks: [],
    status: LabStatuses.Checked
  },
  {
    index: 4,
    tasks: [],
    status: LabStatuses.InProgress
  },
  {
    index: 5,
    tasks: [],
    status: LabStatuses.ToDo
  }
];

export const labLinkList: ILabLink[] = labs.reduce((prev, curr) => ([
  ...prev,
  {
    label: `${COMMON_LAB_LABEL_PART}${curr.index}`,
    href: `${COMMON_LAB_HREF_PART}${curr.index}`,
    tasks: curr.tasks,
    status: curr.status
  }
]), []);

function getTasks(labIndex: number, taskNumberList: number[]): ILink[] {
  return taskNumberList.reduce((prev, curr) => ([
    ...prev,
    {
      label: `${COMMON_TASK_LABEL_PART}${curr}`,
      href: `${COMMON_LAB_HREF_PART}${labIndex}/${COMMON_TASK_HREF_PART}${curr}`
    }
  ]), []);
}
