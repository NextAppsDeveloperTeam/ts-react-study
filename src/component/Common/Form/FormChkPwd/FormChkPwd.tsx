import React from 'react';
import { FormChkPwdProps as Props, FormChkPwdDefaultProps } from './FormChkPwd.types';
import FormInputControl from '../FormInputControl';

const FormChkPwd: React.FC<Props> = (props) => {
  return <FormInputControl type='password' {...props} />;
};

FormChkPwd.displayName = 'FormChkPwd';
FormChkPwd.defaultProps = FormChkPwdDefaultProps;

export default FormChkPwd;
