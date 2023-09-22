import React from 'react';
import {FormPhoneProps as Props, FormPhoneDefaultProps} from './FormPhone.types';
import FormInputControl from '../FormInputControl';

const FormPhone: React.FC<Props> = (props) => {
  return <FormInputControl type='tel' {...props} />;
};

FormPhone.displayName = 'FormPhone';
FormPhone.defaultProps = FormPhoneDefaultProps;

export default FormPhone;
