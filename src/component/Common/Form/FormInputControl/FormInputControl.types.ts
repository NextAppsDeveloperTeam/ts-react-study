import { FormControlProps, FormControlValue } from '../FormControl';

export type FormInputControlType = 'text' | 'email' | 'number' | 'tel' | 'password' | 'radio';

export interface FormInputControlProps<
  Type extends FormInputControlType = 'text',
  T extends FormControlValue = Type extends 'number' ? number | undefined : string,
> extends Omit<FormControlProps<T>, 'children' | 'onRequestFocus'> {
  type: Type;
  placeholder?: string;
}

export const FormInputControlDefaultProps = {};
