import { FormInputControlProps } from '../FormInputControl';

export interface FormPasswordProps extends Omit<FormInputControlProps<'password'>, 'type'> {}

export const FormPasswordDefaultProps = {};
