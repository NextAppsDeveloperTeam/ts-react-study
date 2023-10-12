import React, { useContext, useState } from 'react';
import { FormEmailProps as Props, FormEmailDefaultProps } from './FormEmail.types';
import FormInputControl from '../FormInputControl';
import { UserContext, UserContextValue } from '../../../../context';

const FormEmail: React.FC<Props> = (props) => {
  const { userList } = useContext(UserContext) as UserContextValue;

  const [isEmailError, setIsEmailError] = useState(false);
  const [isEmailCheck, setIsEmailCheck] = useState(false);

  const emailRegEx = useMemo(() => {
    return /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  }, []);
  const chkEmail = useMemo(() => {
    return userList.map((user) => user.email);
  }, [userList]);

  useEffect(() => {
    if (notEmpty(props.value)) {
      props.value && emailRegEx.test(props.value) ? setIsEmailError(false) : setIsEmailError(true);
      props.value && chkEmail.includes(props.value) ? setIsEmailCheck(true) : setIsEmailCheck(false);
    }
  }, [chkEmail, emailRegEx, isEmailError, props.value]);

  return <FormInputControl type='email' error={isEmailError} check={isEmailCheck} {...props} />;
};

FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;

export default FormEmail;
