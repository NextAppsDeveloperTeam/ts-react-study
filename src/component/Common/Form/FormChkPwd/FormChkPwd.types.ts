import { FormInputControlProps } from '../FormInputControl';

export interface FormChkPwdProps extends Omit<FormInputControlProps<'password'>, 'type'> {}

export const FormChkPwdDefaultProps = {};
