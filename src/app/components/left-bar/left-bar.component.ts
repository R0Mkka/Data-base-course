import { Component, ChangeDetectionStrategy } from '@angular/core';

import { labLinkList } from './left-bar.config';
import { ILabLink, LabStatuses } from '@models/link.models';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftBarComponent {
  public labLinkList: ILabLink[] = labLinkList;
  public labStatuses = LabStatuses;
}
