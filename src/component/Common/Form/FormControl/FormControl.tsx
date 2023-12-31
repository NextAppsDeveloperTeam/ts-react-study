import React, { useContext, useState } from 'react';
import { FormControlDefaultProps, FormControlValue, FormControlProps } from './FormControl.types';
import { useFormContext } from '../FormContext';
import styled from 'styled-components';
import { UserContext, UserContextValue } from '../../../../context';

const InputBox = styled.div`
  .labelStyled {
    margin-top: 7px;
  }
`;

const Label = styled.label`
  text-align: left;
  font-size: 17px;
`;

const HelperText = styled.div`
  margin: 5px 0;
  font-size: 13px;
  opacity: 0.5;
`;

const ErrorText = styled.div`
  margin: 5px 0;
  font-size: 14px;
  color: red;
`;

function FormControl<T extends FormControlValue>({
  children,
  name,
  value,
  label,
  helperText,
  required,
  onValidate,
  onRequestFocus,
}: FormControlProps<T>) {
  const { auth } = useContext(UserContext) as UserContextValue;

  const { addControl } = useFormContext();

  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState<string>();

  useEffect(() => {
    addControl(name, {
      validate() {
        if (required && empty(value)) {
          setError(true);
          setErrorText('필수 항목입니다.');
          return false;
        }

        if (onValidate) {
          const validateResult = onValidate(value);
          if (validateResult !== true) {
            setError(true);
            setErrorText(validateResult);
            return false;
          }
        }

        setError(false);
        setErrorText(undefined);
        return true;
      },
      getValue(): FormControlValue {
        return value;
      },
      focus() {
        onRequestFocus && onRequestFocus();
      },
    });
  }, [addControl, auth, error, name, onRequestFocus, onValidate, required, value]);

  return (
    <InputBox>
      {label && (
        <div className='labelStyled' style={{ color: error ? 'red' : undefined }}>
          <Label>{label}</Label>
          {required && '*'}
        </div>
      )}
      <div>{children}</div>
      {helperText && <HelperText>{helperText}</HelperText>}
      {error && <ErrorText>{errorText}</ErrorText>}
    </InputBox>
  );
}

FormControl.displayName = 'FormControl';
FormControl.defaultProps = FormControlDefaultProps;

export default FormControl;
