import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: 'yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class YesNoDialogComponent {
  constructor(
    public readonly dialogRef: MatDialogRef<YesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: any
  ) { }

  public onYes(): void {
    this.dialogRef.close(true);
  }

  public closeDialog(): void {
    this.dialogRef.close(false);
  }
}
