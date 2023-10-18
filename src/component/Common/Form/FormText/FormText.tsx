import React from 'react';
import { FormTextProps as Props, FormTextDefaultProps } from './FormText.types';
import FormInputControl from '../FormInputControl';

const FormText: React.FC<Props> = ({ ...props }) => {
  if (props.value) {
    props.value = props.value.trim();
  }
  return <FormInputControl type='text' {...props} />;
};

FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;

export default FormText;
