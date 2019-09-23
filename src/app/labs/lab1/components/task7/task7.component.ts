import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

enum States {
  Number = 'number',
  Operation = 'operation',
  AfterEqual = 'afterEqual'
}

enum Operations {
  Divide = '/',
  Multiply = '*',
  Plus = '+',
  Minus = '-'
}

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task7Component implements OnInit {
  public memory = null;
  public currentState = States.Number;
  public states = States;
  public currentValue = '';
  public currentOperation: Operations = null;
  public operations = Operations;
  public firstNumberStr = '';
  public secondNumberStr = '';
  public currentValueControl: FormControl;

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public clearValue(): void {
    this.currentValue = '';
    this.firstNumberStr = '';
    this.secondNumberStr = '';
    this.currentOperation = null;
    this.currentState = this.states.Number;

    this.updateValue();
  }

  public clearLast(): void {
    if (this.currentState === this.states.Number || this.currentState === this.states.AfterEqual) {
      this.clearValue();

      return;
    }

    if (this.currentState === this.states.Operation && this.secondNumberStr.length === 0) {
      this.currentValue = `${this.firstNumberStr}`;
      this.currentOperation = null;
      this.currentState = this.states.Number;
    }

    if (this.currentState === this.states.Operation && this.secondNumberStr.length > 0) {
      this.currentValue = `${this.firstNumberStr} ${this.currentOperation} `;
      this.secondNumberStr = '';
    }

    this.updateValue();
  }

  public backspace(): void {
    if (this.currentState === this.states.AfterEqual) {
      if (!parseFloat(this.currentValue)) {
        this.clearValue();

        return;
      }

      this.secondNumberStr = '';
      this.currentState = this.states.Number;
      this.currentOperation = null;
      this.currentValue = this.currentValue.slice(0, this.currentValue.length - 1);
      this.firstNumberStr = this.currentValue;

      this.updateValue();

      return;
    }

    if (this.currentState === this.states.Number) {
      this.currentValue = this.currentValue.length > 0
        ? this.currentValue.slice(0, this.currentValue.length - 1)
        : '';

      this.firstNumberStr = this.currentValue;

      this.updateValue();

      return;
    }

    if (this.secondNumberStr.length > 0) {
      this.currentValue = this.currentValue.slice(0, this.currentValue.length - 1);
      this.secondNumberStr = this.secondNumberStr.slice(0, this.secondNumberStr.length - 1);
    } else {
      this.currentValue = this.currentValue.slice(0, this.currentValue.length - 3);
      this.currentState = this.states.Number;
    }

    this.updateValue();
  }

  public memoryRemember(): void {
    if (!this.memory) {
      return;
    }

    if (this.currentState === this.states.AfterEqual) {
      this.currentValue = this.memory;

      this.updateValue();
    }

    if (this.currentState === this.states.Number) {
      this.firstNumberStr = this.memory;
      this.currentValue = this.firstNumberStr;

      this.updateValue();
    }

    if (this.currentState === this.states.Operation) {
      this.secondNumberStr = this.memory;
      this.currentValue = `${this.firstNumberStr} ${this.currentOperation} ${this.secondNumberStr}`;

      this.updateValue();
    }
  }

  public memoryAdd(): void {
    if (this.currentState === this.states.AfterEqual) {
      this.memory = this.currentValue;
    }

    if (this.currentState === this.states.Number) {
      this.memory = this.firstNumberStr;
    }

    if (this.currentState === this.states.Operation) {
      this.memory = this.secondNumberStr;
    }
  }

  public clearMemory(): void {
    this.memory = null;
  }

  public toSquare(): void {
    if (this.currentState === this.states.AfterEqual) {
      const num = parseFloat(this.currentValue);
      this.firstNumberStr = Math.pow(num, 2).toString();

      this.currentValue = this.firstNumberStr;

      this.updateValue();
    }

    if (this.currentState === this.states.Number) {
      const num = parseFloat(this.firstNumberStr);
      this.firstNumberStr = Math.pow(num, 2).toString();

      this.currentValue = this.firstNumberStr;

      this.updateValue();
    }

    if (this.currentState === this.states.Operation) {
      const num = parseFloat(this.secondNumberStr);
      this.secondNumberStr = Math.pow(num, 2).toString();

      this.currentValue = `${this.firstNumberStr} ${this.currentOperation} ${this.secondNumberStr}`;

      this.updateValue();
    }
  }

  public sqrt(): void {
    if (this.currentState === this.states.AfterEqual) {
      const num = parseFloat(this.currentValue);
      if (num < 0) {
        return;
      }
      this.firstNumberStr = Math.sqrt(num).toString();

      this.currentValue = this.firstNumberStr;

      this.updateValue();
    }

    if (this.currentState === this.states.Number) {
      const num = parseFloat(this.firstNumberStr);
      if (num < 0) {
        return;
      }
      this.firstNumberStr = Math.sqrt(num).toString();

      this.currentValue = this.firstNumberStr;

      this.updateValue();
    }

    if (this.currentState === this.states.Operation) {
      const num = parseFloat(this.secondNumberStr);
      if (num < 0) {
        return;
      }
      this.secondNumberStr = Math.sqrt(num).toString();

      this.currentValue = `${this.firstNumberStr} ${this.currentOperation} ${this.secondNumberStr}`;

      this.updateValue();
    }
  }

  public pushNumber(value: number): void {
    if (this.currentState === this.states.AfterEqual) {
      this.clearValue();

      this.currentState = this.states.Number;
    }

    if (this.currentState === this.states.Number) {
      this.firstNumberStr += value.toString();
    } else {
      this.secondNumberStr += value.toString();
    }

    this.currentValue = `${this.currentValue}${value}`;

    this.updateValue();
  }

  public chooseOperation(operation: Operations): void {
    if (this.currentState === this.states.AfterEqual) {
      if (!parseFloat(this.currentValue)) {
        this.clearValue();

        return;
      }

      this.firstNumberStr = this.currentValue;
      this.secondNumberStr = '';
      this.currentState = this.states.Operation;
      this.currentOperation = operation;
      this.currentValue = `${this.firstNumberStr} ${operation} `;

      this.updateValue();

      return;
    }

    if (this.firstNumberStr.length === 0) {
      return;
    }

    if (this.currentState === this.states.Number) {
      this.currentValue = `${this.currentValue} ${operation} `;
      this.currentOperation = operation;
      this.currentState = this.states.Operation;

      this.updateValue();

      return;
    }

    if (this.currentState === this.states.Operation) {
      this.currentValue = `${this.firstNumberStr} ${operation} `;
      this.currentOperation = operation;
      this.secondNumberStr = '';

      this.updateValue();
    }
  }

  public toggleSign(): void {
    if (this.currentState === this.states.AfterEqual) {
      if (!parseFloat(this.currentValue)) {
        this.clearValue();

        return;
      }

      this.firstNumberStr = (Number(this.currentValue) * -1).toString();
      this.secondNumberStr = '';
      this.currentState = this.states.Number;
      this.currentOperation = null;
      this.currentValue = `${this.firstNumberStr}`;

      this.updateValue();

      return;
    }

    if (this.currentState === this.states.Number && this.firstNumberStr.length > 0) {
      this.firstNumberStr = (Number(this.firstNumberStr) * -1).toString();
      this.currentValue = this.firstNumberStr;

      this.updateValue();
    }

    if (this.currentState === this.states.Operation && this.secondNumberStr.length > 0) {
      this.secondNumberStr = (Number(this.secondNumberStr) * -1).toString();
      this.currentValue = `${this.firstNumberStr} ${this.currentOperation} ${this.secondNumberStr}`;

      this.updateValue();
    }
  }

  public pushDot(): void {
    if (this.currentState === this.states.AfterEqual) {
      if (!parseFloat(this.currentValue)) {
        this.clearValue();

        return;
      }

      this.secondNumberStr = '';
      this.currentState = this.states.Number;
      this.currentOperation = null;
      this.firstNumberStr = this.currentValue.includes('.')
        ? this.currentValue
        : `${this.currentValue}.`;

      this.currentValue = this.firstNumberStr;

      this.updateValue();

      return;
    }

    if (this.currentState === this.states.Number) {
      this.firstNumberStr = this.firstNumberStr.length > 0 && !this.firstNumberStr.includes('.')
        ? `${this.firstNumberStr}.`
        : this.firstNumberStr;

      this.currentValue = this.firstNumberStr;

      this.updateValue();

      return;
    }

    if (this.currentState === this.states.Operation) {
      this.secondNumberStr = this.secondNumberStr.length > 0 && !this.secondNumberStr.includes('.')
        ? `${this.secondNumberStr}.`
        : this.secondNumberStr;

      this.currentValue = `${this.firstNumberStr} ${this.currentOperation} ${this.secondNumberStr}`;

      this.updateValue();
    }
  }

  public countResult(): void {
    if (this.currentState === this.states.AfterEqual
        || this.currentState === this.states.Number
        || this.secondNumberStr.length === 0) {
      return;
    }

    const firstNumber = parseFloat(this.firstNumberStr);
    const secondNumber = parseFloat(this.secondNumberStr);
    let result = null;

    switch (this.currentOperation) {
      case this.operations.Divide:
        if (secondNumber === 0) {
          this.currentValue = 'Операция невозможна.';
          this.firstNumberStr = '';
          this.secondNumberStr = '';
          this.currentOperation = null;
          this.currentState = this.states.AfterEqual;

          this.updateValue();
          return;
        }

        result = firstNumber / secondNumber;
        break;
      case this.operations.Multiply:
        result = firstNumber * secondNumber;
        break;
      case this.operations.Plus:
        result = firstNumber + secondNumber;
        break;
      case this.operations.Minus:
        result = firstNumber - secondNumber;
        break;
      default:
        break;
    }

    if (Number(result) > 999999999 || Number(result) < -999999999) {
      this.currentValue = 'Ошибка.';
    } else {
      if (Math.abs(parseInt(result, 10)) < Math.abs(parseFloat(result))) {
        this.currentValue = `${Number(result.toFixed(8))}`;
      } else {
        this.currentValue = `${result}`;
      }
    }

    this.firstNumberStr = '';
    this.secondNumberStr = '';
    this.currentOperation = null;
    this.currentState = this.states.AfterEqual;

    this.updateValue();
  }

  private initForm(): void {
    this.currentValueControl = this.formBuilder.control('');
  }

  private updateValue(): void {
    this.currentValueControl.setValue(this.currentValue);
  }
}
