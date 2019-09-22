import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task5Component implements OnInit {
  public rectangleAreaForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public countRectangleArea(): void {
    const resultControl = this.rectangleAreaForm.get('result');

    if (!this.rectangleAreaForm.valid) {
      resultControl.setValue('Указаны не все параметры.');

      return;
    }

    const length = this.rectangleAreaForm.get('length').value;
    const width = this.rectangleAreaForm.get('width').value;

    resultControl.setValue(`${(length * width).toString()} см2`);
  }

  private initForm(): void {
    this.rectangleAreaForm = this.formBuilder.group({
      length: ['', Validators.required],
      width: ['', Validators.required],
      result: ['']
    });
  }
}
