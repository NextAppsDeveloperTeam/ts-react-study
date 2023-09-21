import React from 'react';
import { FormStatusProps as Props, FormStatusDefaultProps } from './FormStatus.types';
import FormInputControl from '../FormInputControl';

const FormStatus: React.FC<Props> = (props) => {
  return <FormInputControl type='radio' {...props} />;
};

FormStatus.displayName = 'FormStatus';
FormStatus.defaultProps = FormStatusDefaultProps;

export default FormStatus;
