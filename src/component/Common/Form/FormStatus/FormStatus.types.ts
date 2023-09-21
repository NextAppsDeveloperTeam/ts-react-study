import { FormInputControlProps } from '../FormInputControl';

export interface FormStatusProps extends Omit<FormInputControlProps<'radio'>, 'type'> {}

export const FormStatusDefaultProps = {};
