import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task2Component implements OnInit {
  public userNumberControl: FormControl;
  public randomNumberControl: FormControl;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForms();
  }

  public showResult(): void {

  }

  private initForms(): void {
    this.userNumberControl = this.formBuilder.control('');
    this.randomNumberControl = this.formBuilder.control('');
  }
}
