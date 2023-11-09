import React, { ChangeEvent } from 'react';
import {
  FormInputControlProps as Props,
  FormInputControlDefaultProps,
  FormInputControlType,
} from './FormInputControl.types';
import FormControl, { FormControlValue } from '../FormControl';
import styled from 'styled-components';

const Input = styled.input`
  width: 270px;
  height: 35px;
  padding-left: 6px;
`;

const FormInputControl = <Type extends FormInputControlType, T extends FormControlValue>({
  type,
  placeholder,
  value: initValue,
  onChange,
  onKeyDown,
  ...props
}: Props<Type, T>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(initValue === undefined ? '' : initValue);

  useEffect(() => {
    setValue(initValue === undefined ? '' : initValue);
  }, [initValue]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      switch (type) {
        case 'number':
          {
            const value = (empty(e.target.value) ? undefined : Number(e.target.value)) as T;
            onChange && onChange(value);
            setValue(value === undefined ? '' : value);
          }
          break;
        case 'tel':
          {
            const value = e.target.value.replace(/[^0-9]/g, '') as T;
            onChange && onChange(value);
            setValue(value === undefined ? '' : value);
          }
          break;
        default:
          {
            const value = e.target.value as T;
            onChange && onChange(value);
            setValue(value === undefined ? '' : value);
          }
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
      <Input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={handleChange}
      />
    </FormControl>
  );
};

FormInputControl.displayName = 'FormInputControl';
FormInputControl.defaultProps = FormInputControlDefaultProps;

export default FormInputControl;
