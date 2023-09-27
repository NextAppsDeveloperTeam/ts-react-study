import React from 'react';
import { FormStatusProps as Props, FormStatusDefaultProps } from './FormStatus.types';
import FormRadioControl from '../FormRadioControl';
import styled from 'styled-components';

const Radio = styled.label`
  display: inline-block;
  text-align: right;
`;

const DIV = styled.div`
  float: left;
`;

const Span = styled.span`
  float: right;
  line-height: 70px;
  margin: 0 50px 0 7px;
`;

const FormStatus: React.FC<Props> = ({ ...props }) => {
  return (
    <Radio>
      <DIV>
        <FormRadioControl type='radio' {...props} />
      </DIV>
      <Span>{props.labelText}</Span>
    </Radio>
  );
};

FormStatus.displayName = 'FormStatus';
FormStatus.defaultProps = FormStatusDefaultProps;

export default FormStatus;
