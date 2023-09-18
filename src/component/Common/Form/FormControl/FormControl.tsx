import React from 'react';
import {
  // FormControlProps as Props,
  FormControlDefaultProps,
  FormControlValue,
  FormControlProps,
} from './FormControl.types';
import { useFormContext } from '../FormContext';

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
            setError(true);
            return false;
          }
        }

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
    <div>
      <div style={{ color: error ? 'red' : undefined }}>
        {props.label}
        {props.required && '*'}
      </div>
      <div>{props.children}</div>
      {props.helperText && <div style={{display: error ? 'block' : 'none', color: 'red'}}>{props.helperText}</div>}
    </div>
  );
}

FormControl.displayName = 'FormControl';
FormControl.defaultProps = FormControlDefaultProps;

export default FormControl;
