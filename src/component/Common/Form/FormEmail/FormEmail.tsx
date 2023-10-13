import React, { useContext } from 'react';
import { FormEmailProps as Props, FormEmailDefaultProps } from './FormEmail.types';
import FormInputControl from '../FormInputControl';
import { UserContext, UserContextValue } from '../../../../context';

const VALID_REGEX = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const FormEmail: React.FC<Props> = ({ onValidate, ...props }) => {
  const { userList } = useContext(UserContext) as UserContextValue;

  const chkEmail = useMemo(() => {
    return userList.map((user) => user.email);
  }, [userList]);

  const handleValidate = useCallback(
    (value?: string) => {
      if (notEmpty(value) && !VALID_REGEX.test(value)) {
        return '이메일을 형식에 맞게 입력해주세요.';
      }

      if (notEmpty(value) && chkEmail.includes(value)) {
        return '이미 존재하는 이메일입니다.';
      }

      if (onValidate) {
        return onValidate(value);
      }

      return true;
    },
    [chkEmail, onValidate]
  );

  return <FormInputControl type='email' onValidate={handleValidate} {...props} />;
};

FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;

export default FormEmail;
