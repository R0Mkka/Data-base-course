import { EventEmitter } from '@angular/core';

interface IPrintingConfig {
  startAt: number;
  pagesCount: number;
  copiesCount: number;
  isColor: boolean;
  isTwoSidedPrinting: boolean;
}

export interface IPrinter {
  manufacturer: string;
  type: string;
  quality: string;
  mark: string;
  model: string;
  isColor: boolean;
  printingFormat: string;
  printingVelocity: number;
  weight: number;

  switchOn: () => void;
  switchOff: () => void;
  print: (printingConfiguration: IPrintingConfig) => any;
  stopPrinting: () => void;

  switchedOn: EventEmitter<void>;
  switchedOff: EventEmitter<void>;
  printStarted: EventEmitter<IPrintingConfig>;
  printFinished: EventEmitter<IPrintingConfig>;
}
