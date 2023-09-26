import React, { ChangeEvent } from 'react';
import {
  FormRadioControlProps as Props,
  FormRadioControlDefaultProps,
  FormRadioControlType,
} from './FormRadioControl.types';
import FormControl, { FormControlValue } from '../FormControl';
import styled from "styled-components";

const Input = styled.input`
  height: 27px;
  padding-left: 5px;
`;

const FormRadioControl = <Type extends FormRadioControlType, T extends FormControlValue>({
  type,
  placeholder,
  value,
  onChange,
  ...props
}: Props<Type, T>) => {

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.target.value as T);
    },
    [onChange]
  );

  return (
    <FormControl value={value} {...props}>
      <Input type={type} placeholder={placeholder} value={value} onChange={handleChange} />
    </FormControl>
  );
};

FormRadioControl.displayName = 'FormInputControl';
FormRadioControl.defaultProps = FormRadioControlDefaultProps;

export default FormRadioControl;
