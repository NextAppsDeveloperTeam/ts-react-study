import { FormInputControlProps } from '../FormInputControl';

export interface FormTextProps extends Omit<FormInputControlProps<'text'>, 'type'> {}

export const FormTextDefaultProps = {};
