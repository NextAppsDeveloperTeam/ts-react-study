import React from 'react';
import { FormControlValue } from '../FormControl';

export interface FormControlCommands {
  validate(): boolean;
  getValue(): FormControlValue;
  focus(): void;
}

export type FormContextValue = {
  submit(): false | Dict;
  focusControl(name: string): void;
  addControl(name: string, commands: FormControlCommands): void;
};

export interface FormContextProps {
  children: React.ReactNode;
}
