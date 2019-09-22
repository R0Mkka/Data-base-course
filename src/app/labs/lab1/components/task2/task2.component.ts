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
  public resultControl: FormControl;
  public guessedNumber = '6';
  public parallelepipedVolumeForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForms();
  }

  public showResult(): void {
    if (this.userNumberControl.value.length === 0) {
      this.resultControl.setValue('Вы не ввели число.');

      return;
    }

    const resultText = this.userNumberControl.value === this.guessedNumber
      ? 'Угадал!'
      : 'Не угадал.';

    this.resultControl.setValue(resultText);
  }

  public showParallelepipedVolume(): void {
    const resultControl = this.parallelepipedVolumeForm.get('result');

    if (!this.parallelepipedVolumeForm.valid) {
      resultControl.setValue('Указаны не все параметры.');

      return;
    }

    const length = this.parallelepipedVolumeForm.get('length').value;
    const width = this.parallelepipedVolumeForm.get('width').value;
    const height = this.parallelepipedVolumeForm.get('height').value;

    resultControl.setValue(`${(length * width * height).toString()} см2`);
  }

  private initForms(): void {
    this.userNumberControl = this.formBuilder.control('');
    this.resultControl = this.formBuilder.control('');

    this.parallelepipedVolumeForm = this.formBuilder.group({
      length: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required],
      result: ['']
    });
  }
}
