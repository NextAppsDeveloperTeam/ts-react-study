import React from 'react';
import { FormStatusProps as Props, FormStatusDefaultProps } from './FormStatus.types';
import FormInputControl from '../FormInputControl';
import styled from "styled-components";

const Label = styled.label`
  
`;

const Span = styled.span`
  
`;

const FormStatus: React.FC<Props> = ({ labelText, ...props }) => {
  return (
    <Label>
      <FormInputControl type='radio' {...props} />
      <Span>{labelText}</Span>
    </Label>
  );
};

FormStatus.displayName = 'FormStatus';
FormStatus.defaultProps = FormStatusDefaultProps;

export default FormStatus;
