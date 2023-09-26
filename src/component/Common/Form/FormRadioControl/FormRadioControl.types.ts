import { FormControlProps, FormControlValue } from '../FormControl';

export type FormRadioControlType = 'radio';

export interface FormRadioControlProps<
  Type extends FormRadioControlType = 'radio',
  T extends FormControlValue = Type extends 'number' ? number | undefined : string,
> extends Omit<FormControlProps<T>, 'children'> {
  type: Type;
  placeholder?: string;
}

export const FormRadioControlDefaultProps = {};
