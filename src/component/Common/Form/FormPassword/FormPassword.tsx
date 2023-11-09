import React, { KeyboardEvent } from 'react';
import { FormPasswordProps as Props, FormPasswordDefaultProps } from './FormPassword.types';
import FormInputControl from '../FormInputControl';

const VALID_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,16}$/;

const FormPassword: React.FC<Props> = ({ onValidate, ...props }) => {
  const handleValidate = useCallback(
    (value?: string) => {
      if (notEmpty(value) && !VALID_REGEX.test(value)) {
        return '비밀번호를 형식에 맞게 입력해주세요.';
      }

      if (onValidate) {
        return onValidate(value);
      }

      return true;
    },
    [onValidate]
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  }, []);

  return <FormInputControl type='password' onKeyDown={handleKeyDown} onValidate={handleValidate} {...props} />;
};

FormPassword.displayName = 'FormPassword';
FormPassword.defaultProps = FormPasswordDefaultProps;

export default FormPassword;
