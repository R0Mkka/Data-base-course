import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Lab3Service } from './lab3.service';

import { NewUserDialogComponent } from '../new-user-dialog/new-user-dialog.component';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { YesNoDialogComponent } from '@shared/yes-no-dialog/yes-no-dialog.component';

import { IUser } from '@models/user.models';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.scss'],
  providers: [Lab3Service],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lab3Component implements OnInit {
  public selectedRowIndex: number = null;
  public errorMessage: string = null;

  private users$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  public get usersStream(): Observable<IUser[]> {
    return this.users$.asObservable();
  }

  constructor(
    private readonly lab3Service: Lab3Service,
    private readonly dialog: MatDialog,
    private readonly cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initUsers();
  }

  public getFullName(user: IUser): string {
    return `${user.firstName} ${user.lastName}`;
  }

  public selectRow(index: number): void {
    this.selectedRowIndex = index;
  }

  public openUserAddingDialog(): void {
    const dialogRef: MatDialogRef<NewUserDialogComponent> = this.dialog.open(NewUserDialogComponent, {
      width: '400px'
    });

    const localSub: Subscription = dialogRef.afterClosed().subscribe((user: IUser) => {
      if (!!user) {
        this.lab3Service.addUser(user).subscribe(_ => console.log(_));

        this.pushUser(user);
      }

      localSub.unsubscribe();
    });
  }

  public openClearingListDialog(): void {
    const dialogRef: MatDialogRef<YesNoDialogComponent> = this.dialog.open(YesNoDialogComponent, {
      width: '400px',
      data: {
        message: 'Вы действительно хотите очистить список? Восстановление будет данных невозможно.'
      }
    });

    const localSub: Subscription = dialogRef.afterClosed().subscribe((answer: boolean) => {
      if (answer) {
        this.lab3Service.removeAllUsers().subscribe();
        this.users$.next([]);
      }

      localSub.unsubscribe();
    });
  }

  public openUserEditingDialog(): void {
    const dialogRef: MatDialogRef<EditUserDialogComponent> = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      data: this.getSelectedUser()
    });

    const localSub: Subscription = dialogRef.afterClosed().subscribe((user: IUser) => {
      if (!!user) {
        this.lab3Service.editUser(user).subscribe(_ => console.log(_));

        this.replaceUser(user);
      }

      localSub.unsubscribe();
    });
  }

  public openUserRemovingDialog(): void {
    const dialogRef: MatDialogRef<YesNoDialogComponent> = this.dialog.open(YesNoDialogComponent, {
      width: '400px',
      data: {
        message: 'Вы действительно хотите очистить список? Восстановление будет данных невозможно.'
      }
    });

    const localSub: Subscription = dialogRef.afterClosed().subscribe((answer: boolean) => {
      if (answer) {
        const user: IUser = this.getSelectedUser();

        this.lab3Service.removeUser(user.id).subscribe(_ => console.log(_));

        this.removeUser(user.id);
      }

      localSub.unsubscribe();
    });
  }

  private initUsers(): void {
    this.lab3Service.getUsers().subscribe(
      (users: IUser[]) => {
        this.users$.next(users);
      },
      (_) => {
        this.errorMessage = 'Ошибка сервера.';

        this.cdRef.markForCheck();
      });
  }

  private pushUser(user: IUser): void {
    const users: IUser[] = this.users$.getValue();

    users.push(user);

    this.users$.next(users);
  }

  private replaceUser(editingUser: IUser): void {
    const users: IUser[] = this.users$.getValue()
      .map((user: IUser) => {
        if (user.id === editingUser.id) {
          return editingUser;
        }

        return user;
      });

    this.users$.next(users);
  }

  private removeUser(userId: string): void {
    const users: IUser[] = this.users$.getValue()
      .filter((user: IUser) => user.id !== userId);

    this.users$.next(users);
  }

  private getSelectedUser(): IUser {
    return this.users$.getValue()[this.selectedRowIndex];
  }
}
