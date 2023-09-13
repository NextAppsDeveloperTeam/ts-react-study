import { FormInputControlProps } from '../FormInputControl';

export interface FormEmailProps extends Omit<FormInputControlProps<'email'>, 'type'> {}

export const FormEmailDefaultProps = {};
