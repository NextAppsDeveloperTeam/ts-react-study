import React, { ChangeEvent } from 'react';
import {
  FormInputControlProps as Props,
  FormInputControlDefaultProps,
  FormInputControlType,
} from './FormInputControl.types';
import FormControl, { FormControlValue } from '../FormControl';

const FormInputControl = <Type extends FormInputControlType, T extends FormControlValue>({
  type,
  placeholder,
  value,
  onChange,
  ...props
}: Props<Type, T>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      switch (type) {
        case 'number':
          onChange && onChange((empty(e.target.value) ? undefined : Number(e.target.value)) as T);
          break;
        default:
          onChange && onChange(e.target.value as T);
          break;
      }
    },
    [onChange, type]
  );

  const handleRequestFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <FormControl value={value} {...props} onRequestFocus={handleRequestFocus}>
      <input ref={inputRef} type={type} placeholder={placeholder} value={value} onChange={handleChange} />
    </FormControl>
  );
};

FormInputControl.displayName = 'FormInputControl';
FormInputControl.defaultProps = FormInputControlDefaultProps;

export default FormInputControl;
