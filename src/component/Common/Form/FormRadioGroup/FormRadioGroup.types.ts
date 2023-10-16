import { FormControlProps } from '../FormControl';

export type FormRadioGroupItemValue = string | number;

export interface FormRadioGroupItem<T extends FormRadioGroupItemValue> {
  label: string;
  value: T;
  checked?: boolean;
}

export type FormRadioGroupItems<T extends FormRadioGroupItemValue> = FormRadioGroupItem<T>[];

export interface FormRadioGroupProps<T extends FormRadioGroupItemValue> extends Omit<FormControlProps<T>, 'children'> {
  items: FormRadioGroupItems<T>;
}

export const FormRadioGroupDefaultProps = {};
