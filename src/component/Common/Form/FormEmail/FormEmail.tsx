import React from 'react';
import { FormEmailProps as Props, FormEmailDefaultProps } from './FormEmail.types';
import FormInputControl from '../FormInputControl';

const FormEmail: React.FC<Props> = (props) => {
  return <FormInputControl type='email' {...props} />;
};

FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;

export default FormEmail;
