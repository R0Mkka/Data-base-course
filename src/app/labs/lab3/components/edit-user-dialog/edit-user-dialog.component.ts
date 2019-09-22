import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { newUserFormConfig } from './edit-user-dialog.config';
import { ICustomField, ControlTypes } from '@models/form.models';
import { IUser } from '@models/user.models';
import { User } from '@classes/user.classes';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: 'edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUserDialogComponent implements OnInit {
  public newUserForm: FormGroup;
  public newUserFormConfig: ICustomField[];
  public controlTypes = ControlTypes;

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private readonly data: IUser,
    public readonly dialogRef: MatDialogRef<EditUserDialogComponent>
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public editUser(): void {
    const userData: IUser = this.newUserForm.value as IUser;

    const user = { ...this.data, ...userData };

    this.dialogRef.close(user);
  }

  public closeDialog(): void {
    this.dialogRef.close(null);
  }

  private initForm(): void {
    this.newUserFormConfig = newUserFormConfig(this.data);

    this.newUserForm = this.formBuilder.group(
      this.newUserFormConfig.reduce((prev, curr) => ({
        ...prev,
        [curr.control.name]: [curr.control.initialValue || '', curr.control.validators]
      }), {})
    );
  }
}
