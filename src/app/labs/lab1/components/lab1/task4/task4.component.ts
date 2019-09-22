import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task4Component implements OnInit {
  public userNumberControl: FormControl;
  public resultControl: FormControl;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForms();
  }

  public countResult(mode: string): void {
    const { value } = this.userNumberControl;

    if (!this.isValid(value)) {
      return;
    }

    const userNumber = parseInt(value, 10);
    let result = null;

    switch (mode) {
      case 'sin':
        result = Math.sin(userNumber);
        break;
      case 'cos':
        result = Math.cos(userNumber);
        break;
      case 'abs':
        result = Math.abs(userNumber);
        break;
      case 'sqrt':
        if (userNumber < 0) {
          result = 'Операция невозможна.';
          break;
        }
        result = Math.sqrt(userNumber);
        break;
      case 'square':
        result = Math.pow(userNumber, 2);
        break;
      default:
        break;
    }

    this.resultControl.setValue(result);
  }

  private isValid(value): boolean {
    if (value.length === 0) {
      this.resultControl.setValue('Вы не ввели число.');

      return false;
    }

    const userNumber = parseInt(value, 10);

    if (userNumber < -500000 || userNumber > 500000) {
      this.resultControl.setValue('Диапазон числа [-500000, 500000].');

      return false;
    }

    return true;
  }

  private initForms(): void {
    this.userNumberControl = this.formBuilder.control('');
    this.resultControl = this.formBuilder.control('');
  }
}
