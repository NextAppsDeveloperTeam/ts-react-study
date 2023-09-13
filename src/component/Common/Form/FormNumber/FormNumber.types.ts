import { FormInputControlProps } from '../FormInputControl';

export interface FormNumberProps extends Omit<FormInputControlProps<'number'>, 'type'> {}

export const FormNumberDefaultProps = {};
