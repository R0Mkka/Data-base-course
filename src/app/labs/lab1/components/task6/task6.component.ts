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

    this.resultControl.setValue(value.length);
  }

  private initForms(): void {
    this.userInputControl = this.formBuilder.control('');
    this.resultControl = this.formBuilder.control('');
  }
}
