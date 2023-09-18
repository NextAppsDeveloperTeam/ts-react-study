import { FormInputControlProps } from '../FormInputControl';

export interface FormPhoneProps extends Omit<FormInputControlProps<'phone'>, 'type'> {}

export const FormPhoneDefaultProps = {};
