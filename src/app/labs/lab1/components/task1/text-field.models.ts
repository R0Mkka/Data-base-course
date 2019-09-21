import { EventEmitter } from '@angular/core';

enum BorderTypes {
  Solid,
  Dashed,
  Dotted
}

interface IPoint {
  x: number;
  y: string;
}

interface IBorder {
  width: number;
  color: string;
  type: BorderTypes;
}

export interface ITextField {
  position: IPoint;
  width: number;
  height: number;
  margin: number;
  padding: number;
  textSize: number;
  textColor: string;
  placeholderColor: string;
  backgroundColor: string;
  border: IBorder;

  render: () => void;
  remove: () => void;
  setText: (text: string) => void;
  getText: () => string;
  setPlaceholder: (placeholderText: string) => void;
  getPlaceholder: () => string;
  click: () => void;
  focus: () => void;
  blur: () => void;

  rendered: EventEmitter<Event>;
  removed: EventEmitter<Event>;
  clicked: EventEmitter<Event>;
  focused: EventEmitter<Event>;
  blured: EventEmitter<Event>;
  textChanged: EventEmitter<Event>;
}
