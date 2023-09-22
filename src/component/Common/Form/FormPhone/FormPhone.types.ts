import { FormInputControlProps } from '../FormInputControl';

export interface FormPhoneProps extends Omit<FormInputControlProps<'tel'>, 'type'> {}

export const FormPhoneDefaultProps = {};
