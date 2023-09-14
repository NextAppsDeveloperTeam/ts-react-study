import { FormInputControlProps } from '../FormInputControl';

export interface FormTextProps extends Omit<FormInputControlProps<'name'>, 'type'> {}

export const FormTextDefaultProps = {};
