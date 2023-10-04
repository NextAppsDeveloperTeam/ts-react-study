import React from 'react';
import { FormStatusProps as Props, FormStatusDefaultProps } from './FormStatus.types';
import FormInputControl from '../FormInputControl';
import styled from 'styled-components';

const Radio = styled.label`
  display: inline-block;
`;

const Span = styled.span`
  float: left;
  margin: -40px 0 0 150px;
`;

const FormStatus: React.FC<Props> = ({ ...props }) => {
  return (
    <Radio>
      <FormInputControl type='radio' {...props} />
      <Span>{props.labelText}</Span>
    </Radio>
  );
};

FormStatus.displayName = 'FormStatus';
FormStatus.defaultProps = FormStatusDefaultProps;

export default FormStatus;
