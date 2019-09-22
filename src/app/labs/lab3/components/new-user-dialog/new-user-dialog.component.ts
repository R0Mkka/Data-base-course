import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { newUserFormConfig } from './new-user-dialog.config';
import { ICustomField, ControlTypes } from '@models/form.models';
import { IUser } from '@models/user.models';
import { User } from '@classes/user.classes';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: 'new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewUserDialogComponent implements OnInit {
  public newUserForm: FormGroup;
  public newUserFormConfig: ICustomField[] = newUserFormConfig;
  public controlTypes = ControlTypes;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<NewUserDialogComponent>
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public addUser(): void {
    const userData: IUser = this.newUserForm.value as IUser;

    const user = new User(userData);

    this.dialogRef.close(user);
  }

  public closeDialog(): void {
    this.dialogRef.close(null);
  }

  private initForm(): void {
    this.newUserForm = this.formBuilder.group(
      this.newUserFormConfig.reduce((prev, curr) => ({
        ...prev,
        [curr.control.name]: [curr.control.initialValue || '', curr.control.validators]
      }), {})
    );
  }
}
