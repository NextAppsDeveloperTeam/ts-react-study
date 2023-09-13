import React from 'react';
import { FormNumberProps as Props, FormNumberDefaultProps } from './FormNumber.types';
import FormInputControl from '../FormInputControl';

const FormNumber: React.FC<Props> = (props) => {
  return <FormInputControl type='number' {...props} />;
};

FormNumber.displayName = 'FormNumber';
FormNumber.defaultProps = FormNumberDefaultProps;

export default FormNumber;
