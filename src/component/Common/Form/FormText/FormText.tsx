import React from 'react';
import { FormTextProps as Props, FormTextDefaultProps } from './FormText.types';
import FormInputControl from '../FormInputControl';

const FormText: React.FC<Props> = (props) => {
  return <FormInputControl type='name' {...props} />;
};

FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;

export default FormText;
