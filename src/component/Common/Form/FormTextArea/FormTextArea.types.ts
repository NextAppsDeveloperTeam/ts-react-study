import { FormControlProps } from '../FormControl';

export type FormTextAreaValue = string;

export interface FormTextAreaProps<T extends FormTextAreaValue> extends Omit<FormControlProps<T>, 'children'> {}

export const FormTextAreaDefaultProps = {};
