import { ReactNode } from 'react';

export type FormControlValue = string | number | undefined;

export interface FormControlProps<T extends FormControlValue> {
  children: ReactNode;
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  helperText?: ReactNode;
  errorText?:ReactNode;
  error?: boolean;
  checkText?: ReactNode;
  check?: boolean;
  labelText?: string;
  value?: T;
  // checked?: boolean;
  onChange?(value: T): void;
  onValidate?(value: T): boolean;
  onRequestFocus?(): void;
}

export const FormControlDefaultProps = {};
