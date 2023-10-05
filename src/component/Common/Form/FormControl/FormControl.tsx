import React from 'react';
import {
  FormControlDefaultProps,
  FormControlValue,
  FormControlProps,
} from './FormControl.types';
import { useFormContext } from '../FormContext';
import styled from "styled-components";

const InputBox = styled.div`
  padding-bottom: 10px;
`;

const Label = styled.label`
  text-align: left;
  font-size: 17px;
`;

const HelperText = styled.div`
  font-size: 14px;
  color: red;
`;

function FormControl<T extends FormControlValue>(props: FormControlProps<T>) {
  const { addControl } = useFormContext();

  const [error, setError] = useState(false);

  useEffect(() => {
    addControl(props.name, {
      validate() {
        if (props.required && empty(props.value)) {
          setError(true);
          return false;
        }

        if (props.onValidate) {
          if (!props.onValidate()) {
            return false;
          }
        }

        setError(false);
        return true;
      },
      getValue(): FormControlValue {
        return props.value;
      },
      focus() {
        props.onRequestFocus && props.onRequestFocus();
      },
    });
  }, [addControl, props]);

  return (
    <InputBox>
      <div style={{ color: error ? 'red' : undefined }}>
        <Label>{props.label}</Label>
        {props.required && '*'}
      </div>
      <div>{props.children}</div>
      {props.helperText && <HelperText style={{display: error ? 'block' : 'none'}}>{props.helperText}</HelperText>}
      {props.error === true && <HelperText>{props.errorText}</HelperText>}
      {props.check === true && <HelperText>{props.checkText}</HelperText>}
    </InputBox>
  );
}

FormControl.displayName = 'FormControl';
FormControl.defaultProps = FormControlDefaultProps;

export default FormControl;
