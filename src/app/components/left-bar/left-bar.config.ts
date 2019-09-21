import { ILabLink, LabStatuses } from '@models/link.models';

interface Lab {
  index: number;
  status: LabStatuses;
}

const COMMON_LABEL_PART = 'Лабораторная №';
const COMMON_HREF_PART = 'lab';

const labs: Lab[] = [
  { index: 1, status: LabStatuses.InProgress }
];

export const labLinkList: ILabLink[] = labs.reduce((prev, curr) => ([
  ...prev,
  {
    label: `${COMMON_LABEL_PART}${curr.index}`,
    href: `${COMMON_HREF_PART}${curr.index}`,
    status: curr.status
  }
]), []);
