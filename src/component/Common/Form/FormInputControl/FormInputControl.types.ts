import { FormControlProps, FormControlValue } from '../FormControl';

export type FormInputControlType = 'name' | 'email' | 'number' | 'phone' | 'password';

export interface FormInputControlProps<
  Type extends FormInputControlType = 'name',
  T extends FormControlValue = Type extends 'number' ? number | undefined : string,
> extends Omit<FormControlProps<T>, 'children' | 'onRequestFocus'> {
  type: Type;
  placeholder?: string;
}

export const FormInputControlDefaultProps = {};
