import { FormControlProps, FormControlValue } from '../FormControl';
import { KeyboardEventHandler } from 'react';

export type FormInputControlType = 'text' | 'email' | 'number' | 'tel' | 'password' | 'radio';

export interface FormInputControlProps<
  Type extends FormInputControlType = 'text',
  T extends FormControlValue = Type extends 'number' ? number | undefined : string,
> extends Omit<FormControlProps<T>, 'children' | 'onRequestFocus'> {
  type: Type;
  placeholder?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const FormInputControlDefaultProps = {};
