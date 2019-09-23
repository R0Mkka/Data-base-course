import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task6Component implements OnInit {
  public userInputControl: FormControl;
  public resultControl: FormControl;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForms();
  }

  public countStringLength(): void {
    const { value } = this.userInputControl;

    const strEnding = [2, 3, 4].includes(value % 10)
      ? 'вороны.'
      : [5, 6, 7, 8, 9, 0].includes(value % 10)
        ? 'ворон.'
        : 'ворона.';

    this.resultControl.setValue(`Летели по небу ${value.length} ${strEnding}`);
  }

  private initForms(): void {
    this.userInputControl = this.formBuilder.control('');
    this.resultControl = this.formBuilder.control('');
  }
}
