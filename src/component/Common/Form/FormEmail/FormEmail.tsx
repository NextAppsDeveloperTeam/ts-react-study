import React, { KeyboardEvent } from 'react';
import { FormEmailProps as Props, FormEmailDefaultProps } from './FormEmail.types';
import FormInputControl from '../FormInputControl';

const VALID_REGEX = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const FormEmail: React.FC<Props> = ({ onValidate, value: initValue, onChange, ...props }) => {
  const [value, setValue] = useState(initValue || '');

  useEffect(() => {
    setValue(initValue || '');
  }, [initValue]);

  const handleValidate = useCallback(
    (value?: string) => {
      if (notEmpty(value) && !VALID_REGEX.test(value)) {
        return '이메일을 형식에 맞게 입력해주세요.';
      }

      if (onValidate) {
        return onValidate(value);
      }

      return true;
    },
    [onValidate]
  );

  const handleChange = useCallback(
    (newValue: string) => {
      const finalValue = newValue.replace(/ /g, '');
      setValue(finalValue);
      onChange && onChange(finalValue);
    },
    [onChange]
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  }, []);

  return (
    <FormInputControl
      type='email'
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onValidate={handleValidate}
      {...props}
    />
  );
};

FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;

export default FormEmail;
