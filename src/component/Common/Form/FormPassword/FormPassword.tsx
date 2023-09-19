import React from 'react';
import { FormPasswordProps as Props, FormPasswordDefaultProps } from './FormPassword.types';
import FormInputControl from '../FormInputControl';

const FormPassword: React.FC<Props> = (props) => {
  return <FormInputControl type='password' {...props} />;
};

FormPassword.displayName = 'FormPassword';
FormPassword.defaultProps = FormPasswordDefaultProps;

export default FormPassword;
