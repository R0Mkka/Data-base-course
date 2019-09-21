import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ILabLink, LabStatuses } from '@models/link.models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input()
  public readonly lab: ILabLink;

  public readonly labStatuses = LabStatuses;

  public isExpanded = false;

  public toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  public get maxHeight(): number {
    if (!this.isExpanded) {
      return 0;
    }

    return this.lab.tasks.length * 35;
  }
}
