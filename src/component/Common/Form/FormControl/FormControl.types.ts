import { ReactNode } from 'react';

export type FormControlValue = string | number | undefined;

export interface FormControlProps<T extends FormControlValue> {
  children: ReactNode;
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  helperText?: ReactNode;
  labelText?: string;
  value?: T;
  // checked?: boolean;
  onChange?(value: T): void;
  onValidate?(): boolean;
  onRequestFocus?(): void;
}

export const FormControlDefaultProps = {};
