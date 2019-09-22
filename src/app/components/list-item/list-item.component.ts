import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  public isActive = false;

  constructor(
    private readonly router: Router
  ) { }

  public handleClick(): void {
    if (this.lab.tasks.length === 0) {
      this.goToLab();

      return;
    }

    this.toggle();
  }

  public get maxHeight(): number {
    if (!this.isActive) {
      return 0;
    }

    return this.lab.tasks.length * 35;
  }

  private toggle(): void {
    this.isActive = !this.isActive;
  }

  private goToLab(): void {
    this.router.navigate([this.lab.href]);
  }
}
