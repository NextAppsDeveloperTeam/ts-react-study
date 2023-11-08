import { ReactNode } from 'react';

export type FormControlValue = string | number | undefined;

export interface FormControlProps<T extends FormControlValue> {
  children: ReactNode;
  name: string;
  label?: string;
  required?: boolean;
  readonly?: boolean;
  placeholder?: string;
  helperText?: ReactNode;
  labelText?: string;
  value?: T;
  onChange?(value: T): void;
  onValidate?(value?: T): true | string;
  onRequestFocus?(): void;
}

export const FormControlDefaultProps = {};
