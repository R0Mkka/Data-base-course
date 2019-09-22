import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task3Component implements OnInit {
  public userNumberControl: FormControl;
  public resultControl: FormControl;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForms();
  }

  public countResult(): void {
    const { value } = this.userNumberControl;

    if (value.length === 0) {
      this.resultControl.setValue('Вы не ввели число.');

      return;
    }

    const userNumber = parseInt(value, 10);

    if (userNumber < 1 || userNumber > 1000000) {
      this.resultControl.setValue('Диапазон числа [1, 1000000].');

      return;
    }

    let sum = 0;

    for (let i = 1; i <= userNumber; i++) {
      sum += i;
    }

    this.resultControl.setValue(sum);
  }

  private initForms(): void {
    this.userNumberControl = this.formBuilder.control('');
    this.resultControl = this.formBuilder.control('');
  }
}
